import "server-only"
import { cache } from "react"
import { createTRPCContext } from "@/server/context"
import { appRouter } from "@/server/root"

export const createTRPCServer = cache(async () => {
  const ctx = await createTRPCContext()
  return appRouter.createCaller(ctx)
})
