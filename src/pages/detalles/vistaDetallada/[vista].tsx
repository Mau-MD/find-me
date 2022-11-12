import { type NextPage } from "next";
import {
  Group,
  Checkbox,
  Select,
  Text,
  Flex,
  TextInput,
  Textarea,
  NumberInput,
  useMantineTheme,
  Button,
  Stack,
  Slider,
  Center,
  Title,
} from "@mantine/core";
import {
  Dropzone,
  DropzoneProps,
  FileWithPath,
  IMAGE_MIME_TYPE,
} from "@mantine/dropzone";
import { useState, useRef } from "react";
import { IconUpload, IconPhoto, IconX } from "@tabler/icons";
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { storage } from "../../../firebase/firebase";
import { useForm } from "@mantine/form";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import _, { values } from "lodash";
import { colorSelect, uploadImage } from "../../agregar";
import { trpc } from "../../../utils/trpc";
import {
  GoogleMap,
  MarkerF,
  CircleF,
  useLoadScript,
} from "@react-google-maps/api";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

interface FormType {
  rescatado: boolean;
  placa: boolean;
  detallesPlaca: string;
  nombre: string;
  edad: number;
  raza: string;
  color: string;
  detalles: string;
  coordenadas: { longitud: number; latitud: number };
}
const vista: NextPage = () => {
  const form = useForm<FormType>({
    initialValues: {
      rescatado: false,
      placa: false,
      detallesPlaca: "",
      nombre: "",
      edad: 0,
      color: "",
      raza: "",
      detalles: "",
      coordenadas: { longitud: 0, latitud: 0 },
    },
  });
  const router = useRouter();
  const { vista } = router.query;
  console.log(vista)
  const dataPerro = trpc.posts.singlePost.useQuery({ id: vista }, {enabled: !!vista, onSuccess(data) {
      form.setValues({
        color: data?.color,
        raza: data?.raza,
        edad: data?.edad,
      })
  },});
  const [filesToUpload, setFilesToUpload] = useState<FileWithPath[]>([]);
  const openRef = useRef<() => void>(null);
  const theme = useMantineTheme();

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDRbZkLZZYFiPYAJjSm6wE6k8QCs2PyDG0" || "",
  });

  const { data: breeds } = useQuery(["breeds"], async () => {
    const res = await axios.get("https://dog.ceo/api/breeds/list/all ");
    const breedArray = Object.keys(res.data.message);
    return [
      { value: "", label: "Todas las razas" },
      ...breedArray.map((breed) => {
        return { label: _.capitalize(breed), value: breed };
      }),
    ];
  });

  

  const { data } = useSession();
  
  const handleFormSubmit = async (values: FormType) => {
    var urls = [];
    for (const image of filesToUpload) {
      urls.push(await uploadImage(image));
    }
    create.mutate({
      color: values.color,
      detallesPerro: values.detalles,
      raza: values.raza,
      edad: values.edad,
      rescatado: values.rescatado,
      detallesPlaca: values.detallesPlaca,
      fecha: new Date(),
      imagenes: urls,
      latitud: values.coordenadas.latitud,
      longitud: values.coordenadas.longitud,
      nombrePlaca: values.nombre,
      telefono: "12312312",
      userId: data?.user.id || "",
    });
  };

  const [currentLocation, setCurrentLocation] = useState<{
    latitud: number;
    longitud: number;
  }>({ latitud: 31.87326329663515, longitud: -116.6459030853411 });
  const create = trpc.createPost.PostVisto.useMutation();
  
  if (!isLoaded || !vista) return <div>loading</div>;

  return (
    <form onSubmit={form.onSubmit(handleFormSubmit)}>
      <Checkbox
        label="He rescatado a este perro"
        mb={12}
        {...form.getInputProps("rescatado")}
      />
      <Checkbox label="Tenía placa" mb={12} {...form.getInputProps("placa")} />
      <Textarea
        placeholder="Detalles..."
        label="Detalles de la placa"
        mb={12}
        {...form.getInputProps("detallesPlaca")}
      />
      <Flex mb={12}>
        <TextInput
          label="Nombre que tenía en la placa"
          placeholder="ej. Bolt"
          mr={12}
          style={{ width: "70%" }}
          {...form.getInputProps("nombre")}
        />
        <NumberInput
          defaultValue={0}
          placeholder=""
          label="Edad aproximada"
          {...form.getInputProps("edad")}
          style={{ width: "30%" }}
        />
      </Flex>
      <Flex mb={12}>
        <Select
          label="Color"
          placeholder="Blanco..."
          mr={12}
          data={colorSelect}
          {...form.getInputProps("color")}
          style={{ width: "50%" }}
        />
        <Select
          label="Raza"
          placeholder="Pick one"
          {...form.getInputProps("raza")}
          data={breeds ? breeds : []}
          style={{ width: "50%" }}
        />
      </Flex>
      <Textarea
        placeholder="ej. Cicatriz en el ojo derecho"
        label="Detalles particulares"
        {...form.getInputProps("detalles")}
        mb={26}
      />
      <Dropzone
        onDrop={(files) => {
          if (!files) return;
          setFilesToUpload(files);
        }}
        onReject={(files) => console.log("rejected files", files)}
        maxSize={3 * 1024 ** 2}
        accept={IMAGE_MIME_TYPE}
      >
        <Group
          position="center"
          spacing="xl"
          style={{ minHeight: 220, pointerEvents: "none" }}
        >
          <Dropzone.Accept>
            <IconUpload size={50} stroke={1.5} />
          </Dropzone.Accept>
          <Dropzone.Reject>
            <IconX
              size={50}
              stroke={1.5}
              color={theme.colors.red[theme.colorScheme === "dark" ? 4 : 6]}
            />
          </Dropzone.Reject>
          <Dropzone.Idle>
            <IconPhoto size={50} stroke={1.5} />
          </Dropzone.Idle>

          <div>
            <Text size="xl" inline>
              Drag images here or click to select files
            </Text>
            <Text size="sm" color="dimmed" inline mt={7}>
              Attach as many files as you like, each file should not exceed 5mb
            </Text>
          </div>
        </Group>
      </Dropzone>
      <Stack my={30}>
        <Title order={4}>Click para agregar punto</Title>
        <Center>
          <GoogleMap
            zoom={15}
            center={{
              lat: currentLocation.latitud,
              lng: currentLocation.longitud,
            }}
            onClick={(e) =>
              form.setFieldValue("coordenadas", {
                latitud: e.latLng?.lat() || currentLocation.latitud,
                longitud: e.latLng?.lng() || currentLocation.longitud,
              })
            }
            mapContainerClassName="map-container-2"
          >
            <MarkerF
              position={{
                lat: form.values.coordenadas.latitud,
                lng: form.values.coordenadas.longitud,
              }}
            ></MarkerF>
          </GoogleMap>
        </Center>
        <Button type="submit" loading={create.isLoading}>
          Subir
        </Button>
      </Stack>
    </form>
  );
  //Este es un easter egg, si lo ves nos tienen que anunciar como ganadores
};

export default vista;
