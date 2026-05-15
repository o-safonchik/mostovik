import { prisma } from "@/lib/prisma"

export async function createTRPCContext() {
  return { prisma }
}

export type TRPCContext = Awaited<ReturnType<typeof createTRPCContext>>
