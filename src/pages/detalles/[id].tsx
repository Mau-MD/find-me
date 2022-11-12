import {
  Text,
  Stack,
  Container,
  Title,
  Button,
  Flex,
  Grid,
  SimpleGrid,
  Paper,
  Group,
  Badge,
  Card,
  Image,
  Center,
  Textarea,
  Checkbox,
} from "@mantine/core";
import { PostPerdido, User } from "@prisma/client";
import { format } from "date-fns";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { trpc } from "../../utils/trpc";
import SearchCard from "../../components/busqueda/SearchCard";
import GMap from "../../components/map/Map";
import CartaPerros from "../../components/mainpage/PerrosPrincipal/CartaPerros";
import Amo from "../../components/perroPerdidoPerfil/Amo";
import { getUrl } from "@trpc/client/dist/links/internals/httpUtils";
import { useForm } from "@mantine/form";
import { useSession } from "next-auth/react";

const id = () => {
  let reward = true;
  let visto = false;
  let raza = "perro de la calle";
  const router = useRouter();

  const { data: session } = useSession();
  const { id } = router.query;
  const data = trpc.posts.singlePost.useQuery({ id }).data;
  const { data: suggested } = trpc.suggestions.getSuggestions.useQuery(
    {
      latitude: data?.latitud || 0,
      longitude: data?.longitud || 0,
      postId: data?.id || "",
      radiusThreshold: 100,
    },
    { enabled: !!data }
  );
  const { data: comments } = trpc.comments.getCommentsFromPost.useQuery(
    {
      postId: data?.id || "",
    },
    { enabled: !!data }
  );

  const form = useForm({
    initialValues: {
      comentario: "",
      compartir: false,
    },
  });
  const utils = trpc.useContext();

  const submitComment = trpc.comments.addCommentToPost.useMutation({
    onSuccess: () => {
      utils.comments.getCommentsFromPost.invalidate({ postId: data?.id || "" });
    },
  });
  if (!data) {
    return <div>loading...</div>;
  }

  return (
    <Stack spacing={100}>
      <Card shadow="xl" p={0} radius="md" withBorder>
        <Flex justify="" w={"100%"} gap={20}>
          <div style={{ width: "40%" }}>
            <Image src={data.imagenes[0]} radius="md" height={"300px"} />
          </div>
          <Flex p={10} pr={40} justify={"space-between"} w={"60%"}>
            <Stack maw={400} justify={"center"}>
              <Stack spacing={6}>
                <Title>{data?.nombrePerro} 🐾</Title>
                {data.casoAbierto && <Badge>Encontrado</Badge>}
                <Flex gap={10} align="center">
                  <Text color={"gray"}>{format(data?.fecha, "dd/MM/yy")}</Text>
                  {data?.recompensa && <Badge color="green">Recompensa</Badge>}
                  {!visto && <Badge color="blue">{raza}</Badge>}
                </Flex>
              </Stack>
              <Text style={{ color: "#00467f" }} weight={800}>
                {data?.raza}
              </Text>
              <Text weight={500}>{data?.edad} años</Text>

              <Text align="justify">{data?.detalles}</Text>
              <Title order={2}></Title>
            </Stack>
            <Stack justify={"space-between"} pt={10} pb={30}>
              <Amo nombre={data?.usuario.name} telefono={data?.telefono} />
              <Button onClick={() => router.push("/vista")}>
                <Group spacing={7}>
                  <Text>Vi a este perro</Text>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#ffffff"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="12" cy="12" r="2" />
                    <path d="M12 19c-4 0 -7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7c-.42 .736 -.858 1.414 -1.311 2.033" />
                    <path d="M15 19l2 2l4 -4" />
                  </svg>
                </Group>
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Card>
      <Center>
        <GMap
          posts={[data]}
          visto={true}
          center={{ longitud: data.longitud, latitud: data.latitud }}
          containerClass="map-container-2"
        />
      </Center>
      <Stack>
        {suggested && suggested.length > 0 && (
          <>
            <Title order={2}>Posibles Encuentros</Title>
            <SimpleGrid cols={3}>
              {suggested.map((post) => (
                <SearchCard
                  key={post.id}
                  ownerName={post.usuario.name || ""}
                  dogName={post.nombrePerro}
                  dateLost={format(post.fecha, "dd/MM/yyyy")}
                  image={post.imagenes[0] || ""}
                  detalles={post.detalles ?? post.detallesPerro}
                  visto={true}
                  raza={post.raza}
                  found={post.casoAbierto}
                  id={post.id}
                />
              ))}
            </SimpleGrid>
          </>
        )}
      </Stack>
      <Stack>
        <Title order={2}>Comentarios</Title>
        <form
          onSubmit={form.onSubmit((vals) => {
            submitComment.mutate({
              content: vals.comentario,
              showEmailToOwner: vals.compartir,
              postId: id as string,
              poster: session?.user.id || "",
            });
            form.reset();
          })}
        >
          <Card shadow={"md"} withBorder>
            <Stack>
              <Textarea
                label="Comentario"
                {...form.getInputProps("comentario")}
              />
              <Checkbox
                label="Compartir Informacion de Contacto con el Dueno"
                {...form.getInputProps("compartir")}
              />
            </Stack>
            <Group position="right">
              <Button
                type="submit"
                color={"green"}
                loading={submitComment.isLoading}
              >
                Publicar
              </Button>
            </Group>
          </Card>
          <Stack mt={20}>
            {comments?.map((comment) => (
              <Card key={comment.id} withBorder shadow="md">
                <Stack spacing={1}>
                  <Group>
                    <Title order={5}>{comment.usuario.name}</Title>
                    {comment.postPerdido.userId === session?.user.id &&
                      comment.showEmailToOwner && (
                        <Badge color="gray">{comment.usuario.email}</Badge>
                      )}
                  </Group>
                  <Text color="dimmed" size={"sm"}>
                    {format(comment.fecha, "dd/MM/yy")}
                  </Text>
                </Stack>

                <Text mt={5}>{comment.contenido}</Text>
              </Card>
            ))}
          </Stack>
        </form>
      </Stack>
    </Stack>
  );
};
export default id;
