import { anyone } from "../access/anyone.ts"
import { authenticated } from "../access/authenticated.ts"

export const Applications = {
  slug: "applications",

  labels: {
    singular: "Отклик",
    plural: "Отклики",
  },
  access: {
    create: anyone,
    read: authenticated,
    update: authenticated,
    delete: authenticated,
  },

  admin: {
    useAsTitle: "email",
    defaultColumns: [
      "firstName",
      "lastName",
      "email",
      "phone",
      "vacancy",
      "createdAt",
    ],
  },

  fields: [
    {
      name: "vacancy",
      label: "Вакансия",
      type: "relationship",
      relationTo: "vacancy",
      required: true,
    },

    {
      name: "firstName",
      label: "Имя",
      type: "text",
      required: true,
    },

    // Фамилия
    {
      name: "lastName",
      label: "Фамилия",
      type: "text",
      required: true,
    },

    // Email
    {
      name: "email",
      label: "Email",
      type: "email",
      required: true,
    },

    // Телефон
    {
      name: "phone",
      label: "Номер телефона",
      type: "text",
      required: true,
    },

    // О себе
    {
      name: "about",
      label: "Расскажите о себе",
      type: "textarea",
      required: false,
    },

    // Резюме
    {
      name: "resume",
      label: "Резюме",
      type: "upload",
      relationTo: "resumes",
      required: false,
    },
  ],

  timestamps: true,
}