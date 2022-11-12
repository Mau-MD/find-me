import { Flex } from "@mantine/core";
import CardDisplay from "../stripe/Donation";

const Footer = () => {
  return (
    <div>
      <Flex justify="right">
        <CardDisplay />
      </Flex>
    </div>
  );
};

export default Footer;
