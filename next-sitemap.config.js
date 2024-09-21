module.exports = {
  // REQUIRED: add your own domain name here (e.g. https://shipfa.st),
  siteUrl: process.env.SITE_URL || "https://www.mybodyprogram.com",
  generateRobotsTxt: true,
  // use this to exclude routes from the sitemap (i.e. a user dashboard). By default, NextJS app router metadata files are excluded (https://nextjs.org/docs/app/api-reference/file-conventions/metadata)
  exclude: ["/twitter-image.*", "/opengraph-image.*", "/icon.*"],
  additionalPaths: async (config) => {
    // Générer des chemins dynamiques pour les articles
    const fs = require('fs');
    const path = require('path');

    const articlePaths = [];

    const articlesDirectory = path.join(__dirname, 'app', '[locale]', 'blog', '_assets', 'articles');
    for (const locale of fs.readdirSync(articlesDirectory)) {
      const categories = fs.readdirSync(path.join(articlesDirectory, locale));
      for (const category of categories) {
        const articles = fs.readdirSync(path.join(articlesDirectory, locale, category));
        // Créer les URLs pour chaque article
        const paths = articles.map((article) => {
          return {
            loc: `/${locale}/blog/${category}/${article.replace('.md', '')}`,
            lastmod: new Date().toISOString(),
          };
        });
        articlePaths.push(...paths); // Fix: push the generated paths into the articlePaths array
      }
    }
    return articlePaths;
  },
};
