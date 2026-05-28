import slugify from 'slugify'

import { 
  BlocksFeature, 
  FixedToolbarFeature, 
  HeadingFeature, 
  HorizontalRuleFeature, 
  InlineToolbarFeature, 
  lexicalEditor 
} from '@payloadcms/richtext-lexical'
import { Banner } from '../blocks/Banner/config.ts'
import { Code } from '../blocks/Code/config.ts'
import { MediaBlock } from '../blocks/MediaBlock/config.ts'

import { anyone } from '../access/anyone.ts'
import { authenticated } from '../access/authenticated.ts'

export const Projects = {
  slug: 'projects',
  labels: {
    singular: "Проект",
    plural: "Проекты",
  },
  timestamps: true,
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
      required: false,
    },
    {
      name: 'previewImage',
      label: 'Изображение проекта',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
    {
      name: 'finished',
      label: 'Проект завершен',
      type: 'checkbox',
      defaultValue: false,
      required: false,
    },
    {
      name: 'description',
      label: 'Описание проекта',
      type: 'textarea',
    },
    {
      name: 'customer',
      label: 'Заказчик',
      type: 'text',
      required: false,
    },
    {
      name: 'workType',
      label: 'Типы работ в проекте',
      type: 'array',
      required: false,
      fields: [
        {
          name: 'item',
          label: 'Тип работ',
          type: 'text',
        },
      ],
    },
    {
      name: 'startYear',
      label: 'Год начала',
      type: 'number',
      required: false,
    },
    {
      name: 'endYear',
      label: 'Год окончания',
      type: 'number',
      required: false,
    },
    {
      name: 'locationName',
      label: 'Регион',
      type: 'text',
      required: false,
    },
    {
      name: 'latitude',
      label: 'Широта',
      type: 'number',
      required: false,
    },
    {
      name: 'longitude',
      label: 'Долгота',
      type: 'number',
      required: false,
    },
    {
      name: 'stages',
      label: 'Состав проекта',
      required: false,
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
            BlocksFeature({ blocks: [Banner, Code, MediaBlock] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
            HorizontalRuleFeature(),
          ]
        },
      }),
    },
    {
      name: 'stagesImage',
      label: 'Иллюстрация к блоку состава проекта',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
    {
      name: 'characteristics',
      label: 'Характеристики',
      required: false,
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
            HorizontalRuleFeature(),
          ]
        },
      }),
    },
    {
      name: 'charactImage',
      label: 'Иллюстация к блоку характеристик',
      type: 'upload',
      relationTo: 'media',
      required: false,
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
  hooks: {
    beforeChange: [
      ({ data }) => {
      if (data.title && !data.slug) {
      data.slug = slugify(data.title, {
        lower: true,
        strict: true,
        locale: 'ru',
      })
      }
      return data
     },
    ],
  }
}