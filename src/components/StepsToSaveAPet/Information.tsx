import React from "react";
import { useState } from "react";
import { IconInfoSquare } from "@tabler/icons";
import {
  ActionIcon,
  useMantineColorScheme,
  Modal,
  Group,
  Stack,
} from "@mantine/core";
import Steps from "./Stepper";

const InfoButton = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const [opened, setOpened] = useState(false);
  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title=""
        size="80%"
      >
        <Stack>
          <Group position="center">
            <h3>
              ¿Encontraste al amigo de alguien? Aquí hay una serie de pasos que
              puedes seguir
            </h3>
          </Group>
          <Steps setOpened={setOpened} />
        </Stack>
      </Modal>
      <ActionIcon
        variant="outline"
        color={dark ? "yellow" : "blue"}
        onClick={() => setOpened(true)}
        title="Toggle color scheme"
      >
        <IconInfoSquare size={16} />
      </ActionIcon>
    </>
  );
};

export default InfoButton;
