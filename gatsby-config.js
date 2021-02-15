const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development";

console.log(`Using environment config: '${activeEnv}'`);

require("dotenv").config({
  path: `.env.${activeEnv}`,
});
module.exports = {
  siteMetadata: {
    title: "O Bruno Germano - Meus Links",
    author: "Bruno Germano",
    imageUrl: "https://i.imgur.com/Vz81GEl.png", // TODO: fix image
    description:
      "O Bruno Germano é criador de conteúdo, maker e plaestrante. Aqui estão os links para você ver o trabalho do Bruno.",
    keywords: `Creator, Criador de Contúdo, Youtube, Instagram, Web developer, Web, Developer, CSS, HTML, JS, Javascript, Node.js`,
    twitter: "https://twitter.com/egermano",
    github: `https://github.com/egermano`,
    medium: "https://medium.com/@egermano",
	siteUrl: `https://egermano.com`,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Links - O Bruno Germano",
        short_name: "Links OBG",
        start_url: "/",
        background_color: "#aaaaaa",
        theme_color: "#333333",
        display: "standalone",
        icon: "src/images/bg-logo.png",
        orientation: "portrait",
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-159653657-1",
        // Setting this parameter is optional (requried for some countries such as Germany)
        anonymize: true,
      },
    },
    `gatsby-plugin-sitemap`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
    {
      resolve: "gatsby-plugin-htaccess",
      options: {
        RewriteBase: "/",
        https: true,
        www: false,
        SymLinksIfOwnerMatch: true,
        host: "me.egermano.com",
        ErrorDocument: `
				ErrorDocument 401 /error_pages/404.html
				ErrorDocument 404 /error_pages/404.html
				ErrorDocument 500 /error_pages/404.html
			  `,
      },
    },
    {
      resolve: "gatsby-plugin-sentry",
      options: {
        dsn: "https://65e2163cb5de4d0cbd45ec944a9185de@o395640.ingest.sentry.io/5247973",
        // Optional settings, see https://docs.sentry.io/clients/node/config/#optional-settings
        environment: process.env.NODE_ENV,
        enabled: (() => ["production", "stage"].indexOf(process.env.NODE_ENV) !== -1)(),
        tracesSampleRate: 1.0,
      }
    },
  ],
};
