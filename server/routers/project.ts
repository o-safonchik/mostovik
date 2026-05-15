import { z } from "zod"
import { createTRPCRouter, publicProcedure } from "../trpc"

const listInput = z.object({
  cursor: z.string().uuid().optional(),
  limit: z.number().int().min(1).max(50).default(12),
})

export const projectRouter = createTRPCRouter({
  list: publicProcedure.input(listInput).query(async ({ ctx, input }) => {
    const items = await ctx.prisma.project.findMany({
      take: input.limit + 1,
      ...(input.cursor
        ? { cursor: { id: input.cursor }, skip: 1 }
        : undefined),
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        title: true,
        slug: true,
        images: true,
        description: true,
        tags: true,
        locationName: true,
        createdAt: true,
      },
    })

    let nextCursor: string | undefined
    if (items.length > input.limit) {
      const next = items.pop()
      nextCursor = next?.id
    }

    return { items, nextCursor }
  }),

  getBySlug: publicProcedure
    .input(z.object({ slug: z.string().min(1) }))
    .query(async ({ ctx, input }) => {
      return ctx.prisma.project.findUnique({
        where: { slug: input.slug },
      })
    }),

  getById: publicProcedure
    .input(z.object({ id: z.string().uuid() }))
    .query(async ({ ctx, input }) => {
      return ctx.prisma.project.findUnique({
        where: { id: input.id },
        include: {
          news: {
            orderBy: { publishDate: "desc" },
            select: {
              id: true,
              title: true,
              slug: true,
              publishDate: true,
              previewImage: true,
            },
          },
        },
      })
    }),
})
