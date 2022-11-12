import { type NextPage } from "next";
import { Flex, TextInput, Textarea, NumberInput } from '@mantine/core'


const busqueda: NextPage = () => {
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
        <TextInput label="Raza" placeholder="ej. Husky" mr={12} style={{ width: "50%" }} />
        <TextInput label="Nombre del dueño" placeholder="ej. Juan Pérez" style={{ width: "50%" }} />
      </Flex>
      <Flex mb={12}>
        <TextInput label="Color" placeholder="Blanco..." mr={12} style={{ width: "50%" }} />
        <TextInput label="Celular de contacto" placeholder="ej. 123-456-7890" style={{ width: "50%" }} />
      </Flex>
      <Textarea
        placeholder="Detalles particulares"
        label="Tus comentarios"
        withAsterisk
      />
      
    </div>
  )
}

export default busqueda
