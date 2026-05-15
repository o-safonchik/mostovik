import { createTRPCRouter } from "./trpc"
import { applicationRouter } from "./routers/application"
import { newsRouter } from "./routers/news"
import { projectRouter } from "./routers/project"
import { vacancyRouter } from "./routers/vacancy"

export const appRouter = createTRPCRouter({
  project: projectRouter,
  news: newsRouter,
  vacancy: vacancyRouter,
  application: applicationRouter,
})

export type AppRouter = typeof appRouter
