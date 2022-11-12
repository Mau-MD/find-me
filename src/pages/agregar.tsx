import { type NextPage } from "next";
import {
  Group,
  Text,
  Flex,
  TextInput,
  Textarea,
  NumberInput,
  useMantineTheme,
  Checkbox,
  Select,
  Center,
  Title,
  Stack,
  Button,
  Slider,
  Image,
  SimpleGrid,
  Loader,
} from "@mantine/core";
import {
  Dropzone,
  DropzoneProps,
  FileWithPath,
  IMAGE_MIME_TYPE,
} from "@mantine/dropzone";
import { useRef, useState } from "react";
import { IconUpload, IconPhoto, IconX } from "@tabler/icons";
import {
  CircleF,
  GoogleMap,
  MarkerF,
  useLoadScript,
} from "@react-google-maps/api";
import { useForm } from "@mantine/form";
import { storage } from "../firebase/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { Mutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import _ from "lodash";
import { trpc } from "../utils/trpc";
import { useSession } from "next-auth/react";
import { useMediaQuery } from "@mantine/hooks";

interface FormType {
  nombrePerro: string;
  edad: number;
  nombreDueno: string;
  raza: string;
  color: string;
  celular: string;
  comentarios: string;
  recompensa: boolean;
  coordenadas: { latitud: number; longitud: number };
  radius: number;
}
const c = ["blanco", "negro", "café", "gris", "biColor", "triColor"];
export const colorSelect = c.map((c) => {
  return {
    label: _.capitalize(c),
    value: c,
  };
});

export const uploadImage = async (image: FileWithPath) => {
  const imageRef = ref(storage, `images/${image.name + v4()}`);
  const uploadedRef = await uploadBytes(imageRef, image);
  const imageURL = await getDownloadURL(uploadedRef.ref);
  return imageURL;
};

const agregar: NextPage = () => {
  const [imageUpload, setImageUpload] = useState<FileWithPath | null>(null);
  const openRef = useRef<() => void>(null);
  const theme = useMantineTheme();
  const { data: session } = useSession();

  const [filesToUpload, setFilesToUpload] = useState<FileWithPath[]>([]);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDRbZkLZZYFiPYAJjSm6wE6k8QCs2PyDG0" || "",
  });

  const [currentLocation, setCurrentLocation] = useState<{
    latitud: number;
    longitud: number;
  }>({ latitud: 31.87326329663515, longitud: -116.6459030853411 });

  const { values, setFieldValue, getInputProps, onSubmit } = useForm<FormType>({
    initialValues: {
      nombrePerro: "",
      edad: 0,
      nombreDueno: "",
      raza: "",
      color: "",
      celular: "",
      comentarios: "",
      recompensa: false,
      coordenadas: currentLocation,
      radius: 500,
    },
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

  const matches = useMediaQuery("(max-width: 768px)");
  const create = trpc.createPost.PostPerdido.useMutation();
  if (!isLoaded) {
    return (
      <Center w={"100vw"}>
        <Center h={"80vh"}>
          <Loader />
        </Center>
      </Center>
    );
  }

  const handleFormSubmit = async (values: FormType) => {
    var urls = [];
    for (const image of filesToUpload) {
      urls.push(await uploadImage(image));
    }
    create.mutate({
      userId: session?.user.id || "",
      nombrePerro: values.nombrePerro,
      edad: values.edad,
      raza: values.raza,
      color: values.color,
      telefono: values.celular,
      detalles: values.comentarios,
      recompensa: values.recompensa,
      latitud: values.coordenadas.latitud,
      longitud: values.coordenadas.longitud,
      imagenes: urls,
    });
  };

  if (!breeds) return <div>Cargando..</div>;

  return (
    <form onSubmit={onSubmit(handleFormSubmit)}>
      <Flex mb={12}>
        <TextInput
          label="Nombre del perro"
          placeholder="ej. Bolt"
          mr={12}
          style={{ width: "70%" }}
          {...getInputProps("nombrePerro")}
        />
        <NumberInput
          defaultValue={0}
          placeholder=""
          label="Edad del perro"
          style={{ width: matches ? "100%" : "30%" }}
          {...getInputProps("edad")}
        />
      </Flex>
      <Flex mb={12}>
        <TextInput
          label="Nombre del dueño"
          placeholder="ej. Juan Pérez"
          style={{ width: "50%" }}
          mr={12}
          {...getInputProps("nombreDueno")}
        />
        <Select
          label="Raza"
          placeholder="Elige una"
          searchable
          data={breeds}
          style={{ width: "50%" }}
          {...getInputProps("raza")}
        />
      </Flex>
      <Flex mb={12}>
        <Select
          label="Color"
          searchable
          mr={12}
          style={{ width: "50%" }}
          data={colorSelect}
          {...getInputProps("color")}
        />
        <TextInput
          label="Celular de contacto"
          placeholder="ej. 123-456-7890"
          style={{ width: "50%" }}
          {...getInputProps("celular")}
        />
      </Flex>
      <Textarea
        placeholder="Detalles particulares"
        label="Tus comentarios"
        mb={18}
        {...getInputProps("comentarios")}
      />
      <Checkbox
        label="Ofrezco una recompensa por este perro"
        mb={26}
        {...getInputProps("recompensa")}
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
              Jala imágenes, o haz click para seleccionar archivos
            </Text>
            <Text size="sm" color="dimmed" inline mt={7}>
              Adjunta tantos archivos como gustes, cada archivo debe ser menor a 5mb
            </Text>
          </div>
        </Group>
      </Dropzone>
      <Group>
        <SimpleGrid cols={4} spacing={10} mt={10}>
          {filesToUpload.map((file) => (
            <Image src={URL.createObjectURL(file)} key={file.name}></Image>
          ))}
        </SimpleGrid>
      </Group>

      <Stack my={30}>
        <Title order={4}>Click para agregar punto</Title>
        <Slider
          {...getInputProps("radius")}
          min={10}
          max={1000}
          label="Radio"
          labelAlwaysOn
        />
        <Center>
          <GoogleMap
            zoom={15}
            center={{
              lat: currentLocation.latitud,
              lng: currentLocation.longitud,
            }}
            onClick={(e) =>
              setFieldValue("coordenadas", {
                latitud: e.latLng?.lat() || currentLocation.latitud,
                longitud: e.latLng?.lng() || currentLocation.longitud,
              })
            }
            mapContainerClassName="map-container-2"
          >
            <MarkerF
              position={{
                lat: values.coordenadas.latitud,
                lng: values.coordenadas.longitud,
              }}
            ></MarkerF>
            <CircleF
              center={{
                lat: values.coordenadas.latitud,
                lng: values.coordenadas.longitud,
              }}
              radius={values.radius}
            />
          </GoogleMap>
        </Center>
        <Button type="submit" loading={create.isLoading}>
          Subir
        </Button>
      </Stack>
    </form>
  );
};

export default agregar;
