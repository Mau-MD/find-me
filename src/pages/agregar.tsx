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
} from "@mantine/core";
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import { useRef, useState } from "react";
import { IconUpload, IconPhoto, IconX } from "@tabler/icons";
import {
  CircleF,
  GoogleMap,
  MarkerF,
  useLoadScript,
} from "@react-google-maps/api";
import { useForm } from "@mantine/form";

const agregar: NextPage = () => {
  const openRef = useRef<() => void>(null);
  const theme = useMantineTheme();

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDRbZkLZZYFiPYAJjSm6wE6k8QCs2PyDG0" || "",
  });

  const [currentLocation, setCurrentLocation] = useState<{
    latitud: number;
    longitud: number;
  }>({ latitud: 31.87326329663515, longitud: -116.6459030853411 });

  const { values, setFieldValue, getInputProps, onSubmit } = useForm({
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

  if (!isLoaded) {
    return <div>loading...</div>;
  }

  return (
    <form onSubmit={onSubmit((values) => console.log(values))}>
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
          style={{ width: "30%" }}
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
          placeholder="Pick one"
          data={[
            { value: "husky", label: "husky" },
            { value: "placeholder", label: "placeholder" },
          ]}
          style={{ width: "50%" }}
          {...getInputProps("raza")}
        />
      </Flex>
      <Flex mb={12}>
        <TextInput
          label="Color"
          placeholder="Blanco..."
          mr={12}
          style={{ width: "50%" }}
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
        onDrop={(files) => console.log("accepted files", files)}
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
        <Button type="submit">Subir</Button>
      </Stack>
    </form>
  );
};

export default agregar;
