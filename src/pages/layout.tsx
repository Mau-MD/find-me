import { AppShell, Container } from "@mantine/core";
import Navbar from "../components/core/Navbar";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

interface Props {
  children: React.ReactNode;
}

const layout = ({ children }: Props) => {
  const { data } = useSession();
  const [links, setLinks] = useState([
    { link: "/", label: "Home" },
    { link: "/busqueda", label: "Busqueda" },
  ]);

  useEffect(() => {
    if (data?.user)
      setLinks([
        { link: "/", label: "Home" },
        { link: "/busqueda", label: "Busqueda" },
        { link: "/agregar", label: "Agregar" },
        { link: "vista", label: "Vista" },
      ]);
  }, [data]);

  return (
    <AppShell header={<Navbar links={links} />} padding={"lg"}>
      <Container size={"xl"}>{children}</Container>
    </AppShell>
  );
};

export default layout;
