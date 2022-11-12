import { z } from "zod";
import { router, publicProcedure } from "../trpc";
import { sendEmail } from "../../twilio/sendEmail"


export const emailRouter = router({
  GetEmails: publicProcedure
    .query(({ ctx }) => {
      return ctx.prisma.user.findMany({
        select: {
          email: true
        }
      })
    }),

  Send: publicProcedure
    .input(z.object({
      from_mail: z.string(),
      to_mail: z.string(),
      raza: z.string(),
      imagen: z.string(),
      color: z.string().optional(),
      detalles: z.string().optional(),
      edad: z.number().int().optional()
    }))
    .mutation(({ input }) => {
      sendEmail({ ...input })
    })
});
