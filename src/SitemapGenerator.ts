require("babel-register")({
  presets: ["es2015", "react"],
});

const router = require("./SitemapRoutes.tsx").default;
const Sitemap = require("react-router-sitemap").default;

function generateSitemap() {
  return new Sitemap(router)
    .build("https://main.d1jnaw467bwl04.amplifyapp.com/")
    .save("./public/sitemap.xml");
}

generateSitemap();
