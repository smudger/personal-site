import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
    const posts = await getCollection('posts');
    return rss({
        title: 'Smudger | Blog',
        description: 'A blog about programming, web development, and other things.',
        site: context.site,
        items: posts.map((post) => ({
            title: post.data.title,
            description: post.data.description,
            link: `/posts/${post.slug}`,
            pubDate: post.data.pubDate,
        })),
        customData: `<language>en-gb</language>`,
    })
}