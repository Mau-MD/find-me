import { router } from "../trpc";
import { authRouter } from "./auth";
import { exampleRouter } from "./example";
import { createPostRouter } from "./createPost";
import { updatePostRouter } from "./updatePost";

export const appRouter = router({
  example: exampleRouter,
  auth: authRouter,
  createPost: createPostRouter,
  updatePost: updatePostRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
