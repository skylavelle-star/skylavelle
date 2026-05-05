import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const articles = await getCollection('articles', ({ data }) => !data.draft);
  const sorted = articles.sort(
    (a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime()
  );

  return rss({
    title: 'Sky Lavelle | Enterprise Project Management Articles',
    description:
      'Practical guides for senior project managers and technology leaders. Project recovery, business case development, procurement governance and executive reporting.',
    site: context.site!,
    items: sorted.map((article) => ({
      title: article.data.title,
      pubDate: article.data.publishDate,
      description: article.data.description,
      link: `/articles/${article.id}/`,
      categories: [article.data.category, ...article.data.tags],
    })),
    customData: `<language>en-au</language>`,
  });
}
