import { remark } from 'remark';
import html from 'remark-html';
import gfm from 'remark-gfm';
import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

export async function markdownToHtml(markdown) {
    const result = await remark().use(gfm).use(html).process(markdown);
    return result.toString();
}

export function getPostBySlug(path, slug, fields = []) {
    const postsDirectory = join(process.cwd(), path);
    const realSlug = slug.replace(/\.md$/, '');
    const fullPath = join(postsDirectory, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const items = {};

    fields.forEach((field) => {
        if (field === 'slug') {
            items[field] = realSlug;
        }
        if (field === 'content') {
            items[field] = content;
        }

        if (typeof data[field] !== 'undefined') {
            items[field] = data[field];
        }
    });

    return items;
}

export function getAllPosts(path, fields = []) {
    const postsDirectory = join(process.cwd(), path);
    const slugs = fs.readdirSync(postsDirectory);
    const posts = slugs
        .map((slug) => getPostBySlug(path, slug, fields))
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
    return posts;
}
