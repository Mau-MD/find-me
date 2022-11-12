import { Card } from "@mantine/core";
import { NextPage } from "next";
import GMap from "../components/map/Map";

const MapPage: NextPage = () => {
  return (
    <Card>
      <GMap />
      hola
    </Card>
  );
};
export default MapPage;
