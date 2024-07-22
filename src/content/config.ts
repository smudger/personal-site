import { defineCollection, z } from "astro:content";

export const collections = {
    posts: defineCollection({
        type: 'content',
        schema: z.object({
            title: z.string(),
            pubDate: z.date(),
            description: z.string(),
            author: z.string(),
            image: z.object({
                url: z.string(),
                alt: z.string()
            }),
            tags: z.array(z.string())
        })
    })
};