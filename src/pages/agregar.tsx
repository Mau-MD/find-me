
import { type NextPage } from "next";
import { Group, Text, Flex, TextInput, Textarea, NumberInput, useMantineTheme, Checkbox, Select } from '@mantine/core'
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { useRef } from "react";
import { IconUpload, IconPhoto, IconX } from '@tabler/icons';


const agregar: NextPage = () => {
  const openRef = useRef<() => void>(null);
  const theme = useMantineTheme();

  return (
    <div>
      <Flex mb={12}>
        <TextInput
          label="Nombre del perro" 
          placeholder="ej. Bolt"
          mr={12}
          style={{ width: "70%" }}
        />
        <NumberInput
          defaultValue={0}
          placeholder=""
          label="Edad del perro"
          style={{ width: "30%" }}
        />
      </Flex>
      <Flex mb={12}>
        <TextInput label="Nombre del dueño" placeholder="ej. Juan Pérez" style={{ width: "50%" }} mr={12} />
        <Select
          label="Raza"
          placeholder="Pick one"
          data={[
            { value: 'husky', label: 'husky' },
            { value: 'placeholder', label: 'placeholder' }
          ]}
          style={{ width: "50%" }}
        />
      </Flex>
      <Flex mb={12}>
        <TextInput label="Color" placeholder="Blanco..." mr={12} style={{ width: "50%" }} />
        <TextInput label="Celular de contacto" placeholder="ej. 123-456-7890" style={{ width: "50%" }} />
      </Flex>
      <Textarea
        placeholder="Detalles particulares"
        label="Tus comentarios"
        mb={18}
      />
      <Checkbox 
        label="Ofrezco una recompensa por este perro"
        mb={26}
      />

      <Dropzone
        onDrop={(files) => console.log('accepted files', files)}
        onReject={(files) => console.log('rejected files', files)}
        maxSize={3 * 1024 ** 2}
        accept={IMAGE_MIME_TYPE}
      >
        <Group position="center" spacing="xl" style={{ minHeight: 220, pointerEvents: 'none' }}>
          <Dropzone.Accept>
            <IconUpload
              size={50}
              stroke={1.5}
            />
          </Dropzone.Accept>
          <Dropzone.Reject>
            <IconX
              size={50}
              stroke={1.5}
              color={theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6]}
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
    </div>
  )
}

export default agregar