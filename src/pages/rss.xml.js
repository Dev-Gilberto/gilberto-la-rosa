import rss from "@astrojs/rss";

import { formatBlogPosts } from "../assets/js/utils";

const postImportResult = import.meta.glob("./post/*.mdx", { eager: true });
const posts = formatBlogPosts(Object.values(postImportResult));

export async function GET(context) {
  rss({
    // stylesheet: "/rss/styles.xsl",
    title:
      "Gilberto La Rosa 🚀 Web Developer 🌎 Blog 📝 Programación Web 💻 GilbertoXdev 💣",
    description:
      "Este mi simple y cautivador blog, donde estaré publicando tips, anécdotas de todo lo que he vivido como programador web y como una persona humana (Existen muchas personas, que no son humanas).",
    site: import.meta.env.SITE,
    items: posts.map((post) => ({
      link: post.url,
      title: post.frontmatter.title,
      pubDate: post.frontmatter.pubDate,
      description: post.frontmatter.description,
    })),
  });
}
