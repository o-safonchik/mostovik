import { authenticated } from '../access/authenticated.ts';

export const Users = {
  slug: 'users',
  label: 'Пользователи',
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
    // Email added by default
    // Add more fields as needed
  ],
  timestamps: true,
}
