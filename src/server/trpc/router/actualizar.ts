import { router, publicProcedure, protectedProcedure } from "../trpc";
import z from "zod";
import { equal } from "assert";
import { PostVisto } from "@prisma/client";

export const updateRouter = router({
    updatePostVisto: protectedProcedure.input(z.object({
        userId: z.string(),
        color: z.string(),
        detallesPerro: z.string().optional(),
        raza: z.string(),
        latitud: z.number(),
        altitud: z.number(),
        imagen: z.string(),
        rescatado: z.boolean(),
        detallesPlaca: z.string().optional(),
        edad: z.number().int().optional(),
        id: z.string()
    }))
    .mutation( async ({ ctx, input }) => {
        const post = await ctx.prisma.postVisto.findUnique({
            where: {
                id: input.id
            }
        })
        if (post === null){
            alert("Hubo un error");
        }
        else{
            post.altitud = input.altitud
            post.latitud = input.latitud
            post.color = input.color
            if (input.detallesPerro) { post.detalles = input.detallesPerro }
            if (input.detallesPlaca) { post.detallesPlaca = input.detallesPlaca }
            if (input.edad) { post.edad = input.edad }
            post.imagen = input.imagen
            post.raza = input.raza
            post.rescatado = input.rescatado
            alert("Actualizado Correctamente");
        }
    })
    
    
})