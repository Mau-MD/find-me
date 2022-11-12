import { router } from "../trpc";
import { authRouter } from "./auth";
import { exampleRouter } from "./example";
import { posts } from "./getPost";

export const appRouter = router({
  example: exampleRouter,
  auth: authRouter,
  posts: posts,
});

// export type definition of API
export type AppRouter = typeof appRouter;
