import { z } from "zod";

import { router, publicProcedure } from "../trpc";


export const createPost = router({
  PostVisto: publicProcedure
    .input(z.object({
      userId: z.string(),
      color: z.string(),
      detalles: z.string().optional(),
      raza: z.string(),
      latitud: z.number(),
      altitud: z.number(),
      imagen: z.string(),
      rescatado: z.boolean(),
      detallesPlaca: z.string().optional(),
      edad: z.number().int().optional()
    }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.postVisto.create({
        data: {
          userId: input.userId,
          color: input.color,
          detalles: input.detalles,
          raza: input.raza,
          latitud: input.latitud,
          altitud: input.altitud,
          imagen: input.imagen,
          rescatado: input.rescatado,
          detallesPlaca: input.detallesPlaca,
          edad: input.edad
        }
      })
    }),

  PostPerdido: publicProcedure
    .input(z.object({
      userId: z.string(),
      color: z.string(),
      detalles: z.string().optional(),
      raza: z.string(),
      latitud: z.number(),
      altitud: z.number(),
      imagen: z.string(),
      recompensa: z.boolean(),
      edad: z.number().int().optional()
    }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.postPerdido.create({
        data: {
          userId: input.userId,
          color: input.color,
          detalles: input.detalles,
          raza: input.raza,
          latitud: input.latitud,
          altitud: input.altitud,
          imagen: input.imagen,
          recompensa: input.recompensa,
          edad: input.edad
        }
      })
    }),
});
