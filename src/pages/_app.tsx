import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { Container, MantineProvider, Stack, Text } from "@mantine/core";
import { trpc } from "../utils/trpc";
import "../styles/globals.css";
import Layout from "./layout";
import Bienvenida from "../components/mainpage/Bienvenida";
import BannerMapa from "../components/mainpage/BannerMapa";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "light",
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MantineProvider>
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);
