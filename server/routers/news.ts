import { z } from "zod"
import { createTRPCRouter, publicProcedure } from "../trpc"

const listInput = z.object({
  cursor: z.string().uuid().optional(),
  limit: z.number().int().min(1).max(50).default(12),
  projectId: z.string().uuid().optional(),
})

export const newsRouter = createTRPCRouter({
  list: publicProcedure.input(listInput).query(async ({ ctx, input }) => {
    const items = await ctx.prisma.news.findMany({
      where: input.projectId ? { projectId: input.projectId } : undefined,
      take: input.limit + 1,
      ...(input.cursor
        ? { cursor: { id: input.cursor }, skip: 1 }
        : undefined),
      orderBy: { publishDate: "desc" },
      select: {
        id: true,
        title: true,
        slug: true,
        publishDate: true,
        previewImage: true,
        metaTitle: true,
        metaDescription: true,
        projectId: true,
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
      return ctx.prisma.news.findUnique({
        where: { slug: input.slug },
        include: {
          project: {
            select: {
              id: true,
              title: true,
              slug: true,
            },
          },
        },
      })
    }),
})
