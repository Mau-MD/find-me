import { router } from "../trpc";
import { authRouter } from "./auth";
import { exampleRouter } from "./example";
import { createPostRouter } from "./createPost";
import { updateRouter } from "./updatePost";
import { emailRouter } from "./emails"
import { posts } from "./getPost";

export const appRouter = router({
  example: exampleRouter,
  auth: authRouter,
  createPost: createPostRouter,
  updatePost: updateRouter,
  posts: posts,
  emails: emailRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
