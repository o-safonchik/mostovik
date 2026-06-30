import path from "path"
import { fileURLToPath } from "url"

import { anyone } from "../access/anyone"
import { authenticated } from "../access/authenticated"
import type { CollectionConfig } from "payload"

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export const Resumes: CollectionConfig = {
  slug: "resumes",

  labels: {
    singular: "Резюме",
    plural: "Резюме",
  },

  admin: {
    useAsTitle: "filename",
    defaultColumns: ["filename", "mimeType", "filesize", "createdAt"],
  },

  access: {
    create: anyone,
    read: authenticated,
    update: authenticated,
    delete: authenticated,
  },

  fields: [
    {
      name: "candidateName",
      label: "Имя кандидата",
      type: "text",
    },
    {
      name: "email",
      label: "Email кандидата",
      type: "email",
    },
  ],

 upload: {
  staticDir: path.resolve(process.cwd(), 'public/resumes'),

  mimeTypes: [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  ],
},

  timestamps: true,
}