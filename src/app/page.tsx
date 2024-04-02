import path from "path";
import { PageTransitionWrapper } from "./_components/atoms";
import { Article } from "./_components/molecules";
import { Post } from "./_constants";
import fs from 'fs';
import matter from 'gray-matter';

// The Blog Page Content
export default async function Blog() {
  const blogDir = process.env.POSTS_LOCATION || '';
  const files = fs.readdirSync(path.join(blogDir))

  const posts = files.map(file => {
    const fileContent = fs.readFileSync(path.join(blogDir, file), 'utf-8');
    const { data: frontmatter } = matter(fileContent);
    return {
      frontmatter: frontmatter,
      slug: file.replace('.mdx', '')
    }
  })

  return (
    <PageTransitionWrapper>
      <main
        className={ `mx-auto px-4 transition-opacity ease-in delay-200 duration-700 ${posts !== null && posts.length ? "opacity-100" : "opacity-0"
          }` }
      >
        { posts.map((post: Post, index: number) => (
          <Article
            key={ index }
            post={ post }
            isDivider={ index !== posts.length - 1 }
          />
        )) }
      </main>
    </PageTransitionWrapper>
  );
}

