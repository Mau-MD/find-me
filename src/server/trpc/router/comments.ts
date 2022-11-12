import { z } from "zod";
import { publicProcedure, router } from "../trpc";

export const comments = router({
  getCommentsFromPost: publicProcedure
    .input(
      z.object({
        postId: z.string(),
      })
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.comentario.findMany({
        where: { postId: input.postId },
        include: { usuario: true, postPerdido: true },
      });
    }),
  addCommentToPost: publicProcedure
    .input(
      z.object({
        postId: z.string(),
        poster: z.string(),
        content: z.string(),
        showEmailToOwner: z.boolean(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.comentario.create({
        data: {
          contenido: input.content,
          showEmailToOwner: input.showEmailToOwner,
          postId: input.postId,
          fecha: new Date(),
          userId: input.poster,
        },
      });
    }),
});
