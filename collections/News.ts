import { 
  BlocksFeature, 
  FixedToolbarFeature, 
  HeadingFeature, 
  HorizontalRuleFeature, 
  InlineToolbarFeature, 
  lexicalEditor 
} from '@payloadcms/richtext-lexical';

import { Banner } from '../blocks/Banner/config'
import { Code } from '../blocks/Code/config'
import { MediaBlock } from '../blocks/MediaBlock/config'

import { anyone } from '../access/anyone';
import { authenticated } from '../access/authenticated';
import slugify from 'slugify';

import type { CollectionConfig } from 'payload'


export const News: CollectionConfig = {
  slug: 'news',
  labels: {
    singular: "Новость",
    plural: "Новости",
  },
  access: {
        create: authenticated,
        delete: authenticated,
        read: anyone,
        update: authenticated,
    },
  fields: [
    {
      name: 'title',
      label: 'Заголовок новости',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      label: 'URL новости',
      type: 'text',
      unique: true,
      required: true,
    },
    {
      name: 'publishDate',
      label: 'Дата публикации',
      type: 'date',
      required: true,
    },
    {
      name: 'previewImage',
      label: 'Изображение для превью',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'content',
      label: 'Текст новости',
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
      name: 'metaTitle',
      label: 'Заголовок для SEO',
      type: 'text',
      required: true,
    },
    {
      name: 'metaDescription',
      label: 'Описание для SEO',
      type: 'textarea',
    },
    {
      name: 'project',
      label: 'Проект',
      type: 'relationship',
      relationTo: 'projects',
    },
  ],
  hooks: {
    beforeChange: [
      ({ data }: any) => {
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
  },
  timestamps: true,
  defaultPopulate: {
    previewImage: true,
    project: true,
  },
}