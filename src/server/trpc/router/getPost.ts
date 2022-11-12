import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const posts = router({
  postsVistos: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.postVisto.findMany({
      orderBy: {
        fecha: "desc",
      },
    });
  }),

  postsPerdidos: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.postPerdido.findMany({
      orderBy: {
        fecha: "desc",
      },
    });
  }),
});
