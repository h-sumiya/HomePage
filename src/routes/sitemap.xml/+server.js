import { articles } from '$lib/articles/article_data';

const domain = 'https://hiro.red';
const lastmod = '2026-02-24';
const staticLinks = [
	{
		loc: '/',
		lastmod,
		changefreq: 'daily',
		priority: 1
	},
	{
		loc: '/othello',
		lastmod,
		changefreq: 'monthly',
		priority: 1
	},
	{
		loc: '/ultradata',
		lastmod,
		changefreq: 'monthly',
		priority: 0.8
	},
	{
		loc: '/articles',
		lastmod,
		changefreq: 'weekly',
		priority: 0.8
	},
	{
		loc: '/contact',
		lastmod,
		changefreq: 'monthly',
		priority: 0.7
	}
];
const articleLinks = articles.map((article) => ({
	loc: article.href,
	lastmod,
	changefreq: 'monthly',
	priority: 0.7
}));
const links = [...staticLinks, ...articleLinks];

export async function GET() {
	return new Response(
		`
		<?xml version="1.0" encoding="UTF-8" ?>
		<urlset
			xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
			xmlns:xhtml="https://www.w3.org/1999/xhtml"
			xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
			xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
			xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
			xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
		>
            ${links
							.map(
								(link) => `
                <url>
                    <loc>${domain}${link.loc}</loc>
                    <lastmod>${link.lastmod}</lastmod>
                    <changefreq>${link.changefreq}</changefreq>
                    <priority>${link.priority}</priority>
                </url>
                `
							)
							.join('')}
		</urlset>`.trim(),
		{
			headers: {
				'Content-Type': 'application/xml'
			}
		}
	);
}
