import { anyone } from '../access/anyone.ts';
import { authenticated } from '../access/authenticated.ts';
import slugify from 'slugify';


export const Vacancy = {
  slug: 'vacancy',
  labels: {
    singular: "Вакансия",
    plural: "Вакансии",
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
      label: 'Должность',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      label: 'URL вакансии',
      type: 'text',
      unique: true,
      required: true,
    },
    {
      name: 'employment',
      label: 'Тип занятости',
      type: 'text',
      required: true,
    },
    {
      name: 'salary',
      label: 'Заработная плата рублей/месяц',
      type: 'number',
    },
    {
      name: 'experience',
      label: 'Опыт работы (лет)',
      type: 'text',
    },
    {
      name: 'responsibilities',
      label: 'Обязанности',
      type: 'array',
      required: false,
      fields: [
        {
          name: 'item',
          type: 'text',
        },
      ],
    },
    {
      name: 'requirements',
      label: 'Требования',
      type: 'array',
      required: false,
      fields: [
        {
          name: 'item',
          type: 'text',
        },
      ],
    },
    {
      name: 'skills',
      label: 'Навыки',
      type: 'array',
      required: false,
      fields: [
        {
          name: 'item',
          type: 'text',
        },
      ],
    },
    {
      name: 'application',
      label: 'Отклик на вакансию',
      type: 'relationship',
      relationTo: 'applications',
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
  },
  timestamps: true,
}