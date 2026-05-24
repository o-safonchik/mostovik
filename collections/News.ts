import { 
  BlocksFeature, 
  FixedToolbarFeature, 
  HeadingFeature, 
  HorizontalRuleFeature, 
  InlineToolbarFeature, 
  lexicalEditor 
} from '@payloadcms/richtext-lexical';

import { Banner } from '../blocks/Banner/config.ts'
import { Code } from '../blocks/Code/config.ts'
import { MediaBlock } from '../blocks/MediaBlock/config.ts'

import { anyone } from '../access/anyone.ts';
import { authenticated } from '../access/authenticated.ts';


export const News = {
  slug: 'news',
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
  timestamps: true,
}