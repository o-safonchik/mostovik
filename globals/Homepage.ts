import type { GlobalConfig } from 'payload'

export const Homepage: GlobalConfig = {
  slug: 'homepage',

  label: 'Главная страница',

  access: {
    read: () => true, 
  },

  fields: [
    {
      name: 'featuredProjects',
      label: 'Избранные проекты',
      type: 'relationship',
      relationTo: 'projects',
      hasMany: true,
      minRows: 4,
      maxRows: 4,
      required: true,
    },
  ],
}