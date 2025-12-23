import { z } from 'astro/zod'

export const FriendLinksSchema = () =>
  z
    .object({
      logbook: z.array(
        z.object({
          date: z.string(),
          content: z.string()
        })
      ),
      applyTip: z.array(
        z.object({
          name: z.string(),
          val: z.string()
        })
      )
    })
    .default({
      logbook: [],
      applyTip: [
        { name: 'Name', val: 'Tedevs' },
        { name: 'Desc', val: 'Null' },
        { name: 'Link', val: 'https://tedevs.dev/' },
        { name: 'Avatar', val: 'https://tedevs.dev/favicon/favicon.ico' }
      ]
    })
    .describe('Friend links for your website.')
