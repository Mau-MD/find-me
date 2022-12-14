import { z } from "zod";
import { sendEmail } from "../../twilio/sendEmail";

import { router, publicProcedure } from "../trpc";
import { emailRouter } from "./emails";


export const createPostRouter = router({
  PostVisto: publicProcedure
    .input(
      z.object({
        userId: z.string(),
        color: z.string(),
        detallesPerro: z.string(),
        nombrePlaca: z.string(),
        raza: z.string(),
        latitud: z.number(),
        longitud: z.number(),
        fecha: z.date(),
        imagenes: z.array(z.string()),
        rescatado: z.boolean(),
        detallesPlaca: z.string(),
        edad: z.number().int(),
        telefono: z.string(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.postVisto.create({
        data: {
          userId: input.userId,
          color: input.color,
          detallesPerro: input.detallesPerro,
          nombrePlaca: input.nombrePlaca,
          fecha: input.fecha,
          telefono: input.telefono,
          raza: input.raza,
          latitud: input.latitud,
          longitud: input.longitud,
          imagenes: input.imagenes,
          imagen: "",
          rescatado: input.rescatado,
          detallesPlaca: input.detallesPlaca,
          edad: input.edad,
        },
      });
    }),

  PostPerdido: publicProcedure
    .input(
      z.object({
        userId: z.string(),
        color: z.string(),
        detalles: z.string().optional(),
        raza: z.string(),
        latitud: z.number(),
        longitud: z.number(),
        recompensa: z.boolean(),
        imagenes: z.array(z.string()),
        edad: z.number().int().optional(),
        nombrePerro: z.string(),
        telefono: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const post = await ctx.prisma.postPerdido.create({
        data: {
          nombrePerro: input.nombrePerro,
          userId: input.userId,
          color: input.color,
          detalles: input.detalles,
          raza: input.raza,
          latitud: input.latitud,
          longitud: input.longitud,
          imagenes: input.imagenes,
          imagen: "",
          recompensa: input.recompensa,
          fecha: new Date(),
          edad: input.edad,
          telefono: input.telefono,
          casoAbierto: false,
        },
      });
      const emails = await ctx.prisma.user.findMany({
        select: {
          email: true
        }
      });
      for (const item in emails) {
        sendEmail({
          from_mail: 'internhub99@gmail.com',
          to_mail: emails[item]?.email || "",
          raza: post.raza,
          imagen: post.imagenes[0] || "",
          color: post.color || "",
          detalles: post.detalles || "",
          edad: post.edad || 0
        })
      }
    }),
});
