import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const posts = router({
  posts: publicProcedure
    .input(
      z.object({
        category: z.enum(["perdidos", "vistos"]),
        raza: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      if (input.category === "perdidos") {
        console.log("PERDIDOS");
        return await ctx.prisma.postPerdido.findMany({
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
      }
      return await ctx.prisma.postVisto.findMany({
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
