import { AppShell, Container } from "@mantine/core";
import Navbar from "../components/core/Navbar";
import React from "react";

interface Props {
  children: React.ReactNode;
}
const links: {
  link: string;
  label: string;
}[] = [
  { link: "/", label: "Home" },
  { link: "/busqueda", label: "Busqueda" },
  { link: "/agregar", label: "Agregar" },
  { link: "vista", label: "Vista"}
];

const layout = ({ children }: Props) => {
  return (
    <AppShell header={<Navbar links={links} />} padding={"lg"}>
      <Container size={"xl"}>{children}</Container>
    </AppShell>
  );
};

export default layout;
