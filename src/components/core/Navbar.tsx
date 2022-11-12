import { useState } from "react";
import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  Paper,
  Transition,
  Title,
  Image,
  Affix,
  Button,
  Menu,
  Avatar,
} from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { useRouter } from "next/router";
import LightAndDarkModeButton from "../LightDarkButton/LightDarkButton";
import { signIn, signOut, useSession } from "next-auth/react";
import { IconTrash } from "@tabler/icons";
import InfoButton from "../StepsToSaveAPet/Information";

const HEADER_HEIGHT = 60;
const useStyles = createStyles((theme) => ({
  root: {
    position: "relative",
    zIndex: 1,
  },

  dropdown: {
    position: "absolute",
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: "hidden",

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    cursor: "pointer",
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },

    [theme.fn.smallerThan("sm")]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },
}));

interface Props {
  links: { link: string; label: string }[];
}

const Navbar = ({ links }: Props) => {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState("");
  const { classes, cx } = useStyles();
  const router = useRouter();
  const { data } = useSession();

  const items = links.map((link) => (
    <span
      key={link.label}
      className={cx(classes.link, {
        [classes.linkActive]: active === link.link,
      })}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
        router.push(link.link);
        close();
      }}
    >
      {link.label}
    </span>
  ));

  const matches = useMediaQuery("(max-width: 768px)");

  return (
    <Header height={HEADER_HEIGHT} className={classes.root}>
      <Affix
        position={{
          top: matches ? undefined : 15,
          bottom: matches ? 15 : undefined,
          left: 30,
        }}
      >
        <LightAndDarkModeButton />
      </Affix>

      <Affix
        position={{
          top: matches ? undefined : 15,
          bottom: matches ? 15 : undefined,
          right: 30,
        }}
      >
        <InfoButton />
      </Affix>

      <Container className={classes.header}>
        <Paper style={{ width: "141px" }}>
          <Image
            fit="contain"
            src={"https://i.imgur.com/73zUnAh.png"}
            width={"100px"}
            onClick={() => router.push("/")}
            style={{ cursor: "pointer" }}
          />
        </Paper>
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>

        {!data ? (
          <Button size="sm" variant="outline" onClick={() => signIn("google")}>
            Iniciar Sesión
          </Button>
        ) : (
          <Menu>
            <Menu.Target>
              <Button variant="subtle">
                <Group>
                  <Avatar
                    src={data.user.image}
                    radius="lg"
                    size={"md"}
                  ></Avatar>
                  {data.user.name}
                </Group>
              </Button>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item onClick={() => router.push("/mine")}>
                Mis publicaciones
              </Menu.Item>
              <Menu.Item color="red" onClick={() => signOut()}>
                Cerrar Sesión
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        )}

        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
        />

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
};

export default Navbar;
