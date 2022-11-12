import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import Navbar from "../components/core/Navbar";
import { AppShell } from "@mantine/core";

import { trpc } from "../utils/trpc";

import styles from "./index.module.css";

const Home: NextPage = () => {
  const hello = trpc.example.hello.useQuery({ text: "from tRPC" });

  return (
    <AppShell
      padding="md"
      header={<Navbar />}
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.white,
        },
      })}
    >
      {/* Your application here */}
    </AppShell>
  );
};

export default Home;
