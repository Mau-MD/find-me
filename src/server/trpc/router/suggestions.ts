import { publicProcedure, router } from "../trpc";
import { z } from "zod";

export const suggestions = router({
  getSuggestions: publicProcedure
    .input(
      z.object({
        latitude: z.number(),
        longitude: z.number(),
        postId: z.string(),
        radiusThreshold: z.number(),
      })
    )
    .query(async ({ ctx, input }) => {
      const { latitude, longitude, postId, radiusThreshold } = input;

      const post = await ctx.prisma.postPerdido.findUnique({
        where: {
          id: postId,
        },
      });

      if (!post) return [];

      const allFound = await ctx.prisma.postVisto.findMany();
      allFound.filter((found) => {
        return (
          distaneBetween(
            post.latitud,
            post.longitud,
            found.latitud,
            found.longitud
          ) < radiusThreshold
        );
      });
    }),
});

const distaneBetween = (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
) => {
  return Math.sqrt(Math.pow(lat1 - lat2, 2) + Math.pow(lon1 - lon2, 2));
};
