import { useState } from "react";
import {
  Stack,
  Title,
  Text,
  Stepper,
  Button,
  Image,
  Group,
} from "@mantine/core";

function Steps({ setOpened }: any) {
  const [active, setActive] = useState(0);
  const nextStep = () => {
    if (active == 4) {
      setOpened(false);
    } else {
      setActive((current) => (current < 4 ? current + 1 : current));
    }
  };
  const prevStep = () => {
    setActive((current) => (current > 0 ? current - 1 : current));
  };

  return (
    <>
      <Stepper
        active={active}
        onStepClick={setActive}
        breakpoint="sm"
        color="orange"
      >
        <Stepper.Step
          label="Primero"
          description="Toma fotos de la mascota"
          allowStepSelect={active > 0}
        >
          <Stack justify={"center"} align={"center"}>
            <Title>Primer Paso:</Title>
            <Text>
              Asegúrate de tomar fotos del perro para poder integrarlas a tu
              publicación.
            </Text>
            <Image
              src={"https://i.imgur.com/O9Y5SQQ.png"}
              height={200}
              fit={"contain"}
            />
          </Stack>
        </Stepper.Step>
        <Stepper.Step
          label="Después"
          description="Intenta acercarte"
          allowStepSelect={active > 1}
        >
          <Stack justify={"center"} align={"center"}>
            <Title>Segundo paso:</Title>
            <Text>
              Sólo si el perro es dócil acercate e intenta rescatarlo.
            </Text>
            <Image
              src={"https://i.imgur.com/icdMBAd.png"}
              height={200}
              fit="contain"
            />
          </Stack>
        </Stepper.Step>
        <Stepper.Step
          label="Crear post"
          description="Publica que lo encontraste"
          allowStepSelect={active > 2}
        >
          <Stack justify={"center"} align={"center"}>
            <Title>Tercer Paso:</Title>
            <Text>
              Si no puedes acercarte, al menos intenta proporcionar todos los
              detalles posibles en tu publicación acerca del perro.
            </Text>
            <Image
              src={"https://i.imgur.com/uoGNPXK.png"}
              height={200}
              fit="contain"
            />
          </Stack>
        </Stepper.Step>
        <Stepper.Step
          label="Por último"
          description="Espera e intentar ponerte en contacto"
          allowStepSelect={active > 3}
        >
          <Stack justify={"center"} align={"center"}>
            <Title>Último Paso:</Title>
            <Text>
              Revisa si hay publicaciones de perros extraviados que se parezcan.
            </Text>
            <Image
              src={"https://i.imgur.com/jN7KJoj.png"}
              height={200}
              fit="contain"
            />
          </Stack>
        </Stepper.Step>
        <Stepper.Completed>
          <Stack justify={"center"} align={"center"}>
            <Title>¡Todo Listo!</Title>
            <Text>Muchas gracias por apoyar a la comunidad de FindMe!</Text>
            <Image
              src={"https://i.imgur.com/Gge1R8t.png"}
              height={200}
              fit="contain"
            />
          </Stack>
        </Stepper.Completed>
      </Stepper>

      <Group position="center" mt="xl">
        <Button variant="default" onClick={prevStep}>
          Atrás
        </Button>
        <Button onClick={nextStep} color="orange">
          Siguiente paso
        </Button>
      </Group>
    </>
  );
}
export default Steps;
