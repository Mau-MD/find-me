import { type NextPage } from "next";
import { Group, Checkbox, Select, Text, Flex, TextInput, Textarea, NumberInput, useMantineTheme } from '@mantine/core'
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { useRef } from "react";
import { IconUpload, IconPhoto, IconX } from '@tabler/icons';


const vista: NextPage = () => {
  const openRef = useRef<() => void>(null);
  const theme = useMantineTheme();

  return (
    <div>
      <Checkbox 
        label="He rescatado a este perro"
        mb={12}
      />
      <Checkbox 
        label="Tenía placa"
        mb={12}
      />
      <Textarea
        placeholder="Detalles..."
        label="Detalles de la placa"
        mb={12}
      />
      <Flex mb={12}>
        <TextInput
          label="Nombre que tenía en la placa" 
          placeholder="ej. Bolt"
          mr={12}
          style={{ width: "70%" }}
        />
        <NumberInput
          defaultValue={0}
          placeholder=""
          label="Edad aproximada"
          style={{ width: "30%" }}
        />
      </Flex>
      <Flex mb={12}>
        <TextInput label="Color" placeholder="Blanco..." mr={12} style={{ width: "50%" }} />
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
      <Textarea
        placeholder="ej. Cicatriz en el ojo derecho"
        label="Detalles particulares"
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

export default vista
