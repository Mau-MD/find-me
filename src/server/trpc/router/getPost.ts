import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const posts = router({
  postsVistos: publicProcedure
    .input(
      z.object({
        raza: z.string(),
      })
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.postVisto.findMany({
        where: {
          raza: input.raza,
        },
        orderBy: {
          fecha: "desc",
        },
        include: {
          usuario: true,
        },
      });
    }),

  postsPerdidos: publicProcedure
    .input(z.object({ raza: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.postPerdido.findMany({
        where: {
          raza: { contains: input.raza },
        },
        orderBy: {
          fecha: "desc",
        },
        include: {
          usuario: true,
        },
      });
    }),
});
