import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import Navbar from "../components/core/Navbar";
import { trpc } from "../utils/trpc";
import { Flex, Stack, Text } from "@mantine/core";
import Bienvenida from "../components/mainpage/Bienvenida";
import BannerMapa from "../components/mainpage/BannerMapa";
import PerrosPrincipal from "../components/mainpage/PerrosPrincipal";
import styles from "./index.module.css";

const Home: NextPage = () => {
  const hello = trpc.example.hello.useQuery({ text: "from tRPC" });

  return (
    <Stack style={{ border: "1px solid black", width: "100%" }}>
      <Bienvenida />
      <BannerMapa />
      <PerrosPrincipal />
    </Stack>
  );
  /* Your application here */
};

export default Home;
