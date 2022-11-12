import { z } from "zod";

import { router, publicProcedure } from "../trpc";


export const getPost = router({
  PostsVistos: publicProcedure
    .query(({ ctx }) => {
      return ctx.prisma.postVisto.findMany({
        orderBy: {
          fecha: 'desc'
        }
      });
    }),

  PostsPerdidos: publicProcedure
    .query(({ ctx }) => {
      return ctx.prisma.postPerdido.findMany({
        orderBy: {
          fecha: 'desc'
        }
      });
    })
});
