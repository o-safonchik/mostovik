import { anyone } from '../access/anyone.ts'
import { authenticated } from '../access/authenticated.ts'

export const Projects = {
  slug: 'projects',
  access: {
      create: authenticated,
      delete: authenticated,
      read: anyone,
      update: authenticated,
  },
  fields: [
    {
      name: 'title',
      label: 'Название проекта',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      label: 'URL проекта',
      type: 'text',
      unique: true,
      required: true,
    },
    {
      name: 'previewImage',
      label: 'Изображение проекта',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'finished',
      label: 'Проект завершен',
      type: 'checkbox',
      defaultValue: false,
      required: true,
    },
    {
      name: 'customer',
      label: 'Заказчик',
      type: 'text',
      required: true,
    },
    {
      name: 'workType',
      label: 'Тип работ',
      type: 'text',
      required: true,
    },
    {
      name: 'startYear',
      label: 'Год начала',
      type: 'number',
      required: true,
    },
    {
      name: 'endYear',
      label: 'Год окончания',
      type: 'number',
      required: false,
    },
    {
      name: 'description',
      label: 'Описание проекта',
      type: 'textarea',
    },
    {
      name: 'stages',
      label: 'Этапы проекта',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'item',
          label: 'Этап',
          type: 'text',
        },
      ],
    },
    {
      name: 'stagesImage',
      label: 'Изображение этапов',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'tags',
      label: 'Теги',
      type: 'array',
      fields: [
        {
          name: 'tag',
          label: 'Тег',
          type: 'text',
        },
      ],
    },
    {
      name: 'characteristics',
      label: 'Характеристики',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'item',
          label: 'Характеристика',
          type: 'text',
        },
      ],
    },
    {
      name: 'charactImage',
      label: 'Изображение характеристик',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'expertResults',
      label: 'Результаты экспертиз',
      type: 'array',
      fields: [
        {
          name: 'item',
          label: 'Результат',
          type: 'text',
        },
      ],
    },
    {
      name: 'locationName',
      label: 'Название места',
      type: 'text',
      required: true,
    },
    {
      name: 'latitude',
      label: 'Широта',
      type: 'number',
      required: true,
    },
    {
      name: 'longitude',
      label: 'Долгота',
      type: 'number',
      required: true,
    },
    {
      name: 'metaTitle',
      label: 'Заголовок для SEO',
      type: 'text',
      required: true,
    },
    {
      name: 'metaDescription',
      label: 'Описание для SEO',
      type: 'textarea',
      required: true,
    },
    {
      name: 'news',
      label: 'Новости проекта',
      type: 'relationship',
      relationTo: 'news',
      hasMany: true,
    },
  ],
}