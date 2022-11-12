import { Button, Flex, Group, Modal } from "@mantine/core";
import { useState } from "react";
import { checkout } from "../../utils/get-stripe";

const CardDisplay = () => {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        size="40%"
        title="Ayúdanos a seguir encontrando a tus mascotas"
      >
        <Flex
          direction={{ base: "column", sm: "row" }}
          gap={{ base: "sm", sm: "lg" }}
          justify={{ sm: "center" }}
        >
          <Button
            onClick={() => {
              checkout({
                lineItems: [
                  {
                    price: "price_1M3QTnCySmvqtgpShiZVNwRJ",
                    quantity: 1,
                  },
                ],
              });
            }}
          >
            Donar $10 MXN
          </Button>
          <Button
            onClick={() => {
              checkout({
                lineItems: [
                  {
                    price: "price_1M3MesCySmvqtgpSk2ufOCX3",
                    quantity: 1,
                  },
                ],
              });
            }}
          >
            Donar $20 MXN
          </Button>
          <Button
            onClick={() => {
              checkout({
                lineItems: [
                  {
                    price: "price_1M3PudCySmvqtgpSc67XZLxX",
                    quantity: 1,
                  },
                ],
              });
            }}
          >
            Donar $50 MXN
          </Button>
        </Flex>
      </Modal>
      <Button size="sm" variant="outline" onClick={() => setOpened(true)}>
        Donaciones
      </Button>
    </>
  );
};

export default CardDisplay;
