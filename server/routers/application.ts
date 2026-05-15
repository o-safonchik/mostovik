import { TRPCError } from "@trpc/server"
import { z } from "zod"
import { createTRPCRouter, publicProcedure } from "../trpc"

const createInput = z.object({
  vacancyId: z.string().uuid(),
  surname: z.string().min(1).max(100),
  name: z.string().min(1).max(100),
  phone: z.string().min(1).max(30),
  email: z.string().email().max(255),
  resume: z.string().max(500),
  message: z.string().max(5000),
})

export const applicationRouter = createTRPCRouter({
  create: publicProcedure
    .input(createInput)
    .mutation(async ({ ctx, input }) => {
      const vacancy = await ctx.prisma.vacancy.findUnique({
        where: { id: input.vacancyId },
        select: { id: true },
      })

      if (!vacancy) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Вакансия не найдена",
        })
      }

      return ctx.prisma.application.create({
        data: input,
        select: {
          id: true,
          createdAt: true,
        },
      })
    }),
})
