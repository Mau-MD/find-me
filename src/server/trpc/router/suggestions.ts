import { publicProcedure, router } from "../trpc";
import { z } from "zod";

//
// 0.02126780757457536
// 0.039031476145054554
// 0.02696508858853538

// 0.00332050246296988
// 0.02182460897395177
// 0.009020228751736524

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
        include: {
          usuario: true,
        },
      });

      if (!post) return [];

      const allFound = await ctx.prisma.postVisto.findMany({
        include: {
          usuario: true,
        },
      });
      return allFound.filter((found) => {
        const distance = distaneBetween(
          post.latitud,
          post.longitud,
          found.latitud,
          found.longitud
        );
        console.log(distance * 10000 < radiusThreshold);

        return distance * 10000 < radiusThreshold;
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
