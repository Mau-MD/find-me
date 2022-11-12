import { router, publicProcedure, protectedProcedure } from "../trpc";
import z from "zod";


export const updateRouter = router({
    updatePostVisto: protectedProcedure.input(z.object({
        userId: z.string(),
        color: z.custom(),
        detallesPerro: z.string().optional(),
        raza: z.string(),
        latitud: z.number(),
        longitud: z.number(),
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
            post.longitud = input.longitud
            post.latitud = input.latitud
            post.color = input.color
            if (input.detallesPerro) { post.detallesPerro = input.detallesPerro }
            if (input.detallesPlaca) { post.detallesPlaca = input.detallesPlaca }
            if (input.edad) { post.edad = input.edad }
            post.imagen = input.imagen
            post.raza = input.raza
            post.rescatado = input.rescatado
            alert("Actualizado Correctamente");
        }
    }),
    
    updateCasoAbierto: protectedProcedure.input(
        z.object({
            id: z.string()
    }))
    .mutation( async ({ ctx, input }) =>{
        const post = await ctx.prisma.postPerdido.findUnique({
            where: {
                id: input.id
            }
        })
        if (post === null){
            alert("Hubo un error")
        }
        else{
            post.casoAbierto = false
            alert("Actualizado Correctamente");
        }
    }),

    updatePostPerdido: protectedProcedure.input(
        z.object({
            color: z.custom(),
            detalles: z.string().optional(),
            raza: z.string(),
            latitud: z.number(),
            longitud: z.number(),
            imagen: z.string(),
            recompensa: z.boolean(),
            edad: z.number().int().optional(),
            abierto: z.boolean().default(true),
            id: z.string()
        }))
        .mutation( async ({ ctx, input }) => {
            const post = await ctx.prisma.postPerdido.findUnique({
                where: {
                    id: input.id
                }
            })
            if (post === null){
                alert("hubo un error")
            }
            else{
                post.color = input.color
                if (input.detalles) { post.detalles = input.detalles }
                post.raza = input.raza
                post.latitud = input.latitud
                post.longitud = input.longitud
                post.imagen = input.imagen
                post.recompensa = input.recompensa
                if (input.edad) { post.edad = input.edad }
                post.casoAbierto = input.abierto
                alert("Actualizado Correctamente");
            }
        })
})