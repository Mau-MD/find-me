import { z } from "zod";
import { router, publicProcedure } from "../trpc";
import { sendEmail } from "../../twilio/sendEmail"


export const emailRouter = router({
  Send: publicProcedure
    .input(z.object({
      to_mail: z.string(),
      from_mail: z.string()
    }))
    .mutation(({ input }) => {
      sendEmail(input.to_mail, input.from_mail)
    })
});
