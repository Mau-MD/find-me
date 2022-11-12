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
  getOwnPosts: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.postPerdido.findMany({
      where: {
        userId: ctx.session?.user.id,
      },
      include: {
        usuario: true,
      },
    });
  }),
  foundSoFar: publicProcedure.query(async ({ ctx }) => {
    const posts = await ctx.prisma.postPerdido.findMany({
      where: {
        casoAbierto: false,
      },
    });
    return posts.length;
  }),
  singlePost: publicProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .query(async ({ input, ctx }) => {
      return await ctx.prisma.postPerdido.findUnique({
        where: {
          id: input.id,
        },
        include: {
          usuario: true,
        },
      });
    }),
  singlePostVisto: publicProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .query(async ({ input, ctx }) => {
      return await ctx.prisma.postVisto.findUnique({
        where: {
          id: input.id,
        },
        include: {
          usuario: true,
        },
      });
    }),
  markAsFound: publicProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.postPerdido.update({
        where: {
          id: input.id,
        },
        data: {
          casoAbierto: true,
        },
      });
    }),
  deletePost: publicProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.postPerdido.delete({ where: { id: input.id } });
    }),
});
