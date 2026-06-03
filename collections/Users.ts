import { authenticated } from '../access/authenticated.ts';

export const Users = {
  slug: 'users',
  labels: {
    singular: "Пользователь",
    plural: "Пользователи",
  },
  access: {
    admin: authenticated,
    create: authenticated,
    delete: authenticated,
    read: authenticated,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
  ],
  timestamps: true,
}
