import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import Navbar from "../components/core/Navbar";
import { trpc } from "../utils/trpc";
import { Flex, Space, Stack, Text } from "@mantine/core";
import Bienvenida from "../components/mainpage/Bienvenida";
import BannerMapa from "../components/mainpage/BannerMapa";
import PerrosPrincipal from "../components/mainpage/PerrosPrincipal";
import styles from "./index.module.css";
import Footer from "../components/core/Footer";

const Home: NextPage = () => {
  const hello = trpc.example.hello.useQuery({ text: "from tRPC" });

  return (
    <Stack style={{ border: "0px solid black", width: "100%" }} spacing={100}>
      <Bienvenida />
      <BannerMapa />
      <PerrosPrincipal />
      <Footer />
    </Stack>
  );
};

export default Home;
