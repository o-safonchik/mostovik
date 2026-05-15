import { z } from "zod"
import { createTRPCRouter, publicProcedure } from "../trpc"

export const vacancyRouter = createTRPCRouter({
  list: publicProcedure.query(async ({ ctx }) => {
    return ctx.prisma.vacancy.findMany({
      orderBy: { publishDate: "desc" },
      select: {
        id: true,
        title: true,
        slug: true,
        employmentType: true,
        department: true,
        location: true,
        salary: true,
        publishDate: true,
      },
    })
  }),

  getBySlug: publicProcedure
    .input(z.object({ slug: z.string().min(1) }))
    .query(async ({ ctx, input }) => {
      return ctx.prisma.vacancy.findUnique({
        where: { slug: input.slug },
      })
    }),

  getById: publicProcedure
    .input(z.object({ id: z.string().uuid() }))
    .query(async ({ ctx, input }) => {
      return ctx.prisma.vacancy.findUnique({
        where: { id: input.id },
      })
    }),
})
