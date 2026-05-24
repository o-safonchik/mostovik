import path from 'path';
import { fileURLToPath } from 'url';

import { anyone } from '../access/anyone.ts';
import { authenticated } from '../access/authenticated.ts';

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export const Media = {
  slug: 'media',
  type: 'uploadDetails',
  admin: {
    useAsTitle: 'filename',
  },
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: {
    // Upload to the public/media directory in Next.js making them publicly accessible even outside of Payload
    staticDir: path.join(path.dirname(dirname), 'public/media'),
    staticURL: '/media',
    adminThumbnail: 'thumbnail',
    focalPoint: true,
    imageSizes: [
      {
        name: 'thumbnail',
        width: 300,
      },
      {
        name: 'square',
        width: 500,
        height: 500,
      },
      {
        name: 'small',
        width: 600,
      },
      {
        name: 'medium',
        width: 900,
      },
      {
        name: 'large',
        width: 1400,
      },
      {
        name: 'xlarge',
        width: 1920,
      },
      {
        name: 'og',
        width: 1200,
        height: 630,
        crop: 'center',
      },
    ],
  },
}
