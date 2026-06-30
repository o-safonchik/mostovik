import { CollectionConfig } from 'payload';
import { authenticated } from '../access/authenticated';

export const Users: CollectionConfig = {
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
