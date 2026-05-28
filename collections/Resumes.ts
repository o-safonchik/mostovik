import path from "path"
import { fileURLToPath } from "url"

import { anyone } from "../access/anyone.ts"
import { authenticated } from "../access/authenticated.ts"

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export const Resumes = {
  slug: "resumes",

  labels: {
    singular: "Резюме",
    plural: "Резюме",
  },

  admin: {
    useAsTitle: "filename",

    defaultColumns: [
      "filename",
      "mimeType",
      "filesize",
      "createdAt",
    ],
  },

  access: {
    // любой пользователь может загрузить резюме
    create: anyone,

    // смотреть резюме только админы
    read: authenticated,

    // редактировать/удалять только админы
    update: authenticated,
    delete: authenticated,
  },

  fields: [
    {
      name: "candidateName",
      label: "Имя кандидата",
      type: "text",
      required: false,
    },

    {
      name: "email",
      label: "Email кандидата",
      type: "email",
      required: false,
    },
  ],

  upload: {
    // куда сохранять файлы
    staticDir: path.join(
      path.dirname(dirname),
      "public/resumes"
    ),

    // публичный url
    staticURL: "/resumes",

    // превью в админке
    adminThumbnail: undefined,

    // максимум 5MB
    filesize: 5000000,

    // разрешенные типы файлов
    mimeTypes: [
      "application/pdf",

      // .doc
      "application/msword",

      // .docx
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ],
  },

  timestamps: true,
}