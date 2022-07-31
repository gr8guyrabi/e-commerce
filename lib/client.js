import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const SANITY_API_VERSION = '2022-07-27'

export const client = sanityClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: SANITY_API_VERSION,
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)