import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import withMDX from '@next/mdx';

const nextConfig = {
    pageExtensions: [ 'js', 'jsx', 'ts', 'tsx', 'mdx' ],
    options: {
        remarkPlugins: [ remarkFrontmatter, remarkMdxFrontmatter ]
    }
};

export default withMDX( nextConfig );
