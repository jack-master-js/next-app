import markdownStyles from './markdown-styles.module.css';
import { getAllPosts, getPostBySlug, markdownToHtml } from '@/utils/markdown';

export default function PostBody({ post }) {
    return (
        <div>
            <div>{JSON.stringify(post)}</div>
            <div
                className={markdownStyles['markdown']}
                dangerouslySetInnerHTML={{ __html: post.content }}
            />
        </div>
    );
}

export async function getStaticProps({ params }) {
    const post = getPostBySlug('_posts', params.slug, [
        'slug',
        'content',
        'title',
        'date',
        'author',
    ]);
    const content = await markdownToHtml(post.content || '');

    return {
        props: {
            post: {
                ...post,
                content,
            },
        },
    };
}

export async function getStaticPaths() {
    const posts = getAllPosts('_posts', ['slug']);

    return {
        paths: posts.map((post) => {
            return {
                params: {
                    slug: post.slug,
                },
            };
        }),
        fallback: false,
    };
}
