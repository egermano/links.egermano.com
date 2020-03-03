module.exports = {
	siteMetadata: {
		title: 'O Bruno Germano - Meus Links',
		author: 'Bruno Germano',
		imageUrl: 'https://i.imgur.com/Vz81GEl.png', // TODO: fix image
		description: 'O Bruno Germano é criador de conteúdo, maker e plaestrante. Aqui estão os links para você ver o trabalho do Bruno.',
		keywords: `Creator, Criador de Contúdo, Youtube, Instagram, Web developer, Web, Developer, CSS, HTML, JS, Javascript, Node.js`,
		twitter: 'https://twitter.com/egermano',
		github: `https://github.com/egermano`,
		medium: 'https://medium.com/@egermano',
		siteUrl: `https://egermano.com`
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'Makefolio',
				short_name: 'Makefolio',
				start_url: '/',
				background_color: '#2980b9',
				theme_color: '#2980b9',
				display: 'standalone',
				icon: 'src/images/gatsby-icon.png',
				orientation: 'portrait'
			}
		},
		`gatsby-plugin-sass`,
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: 'UA-XXXXXXXX-X',
				// Setting this parameter is optional (requried for some countries such as Germany)
				anonymize: true
			}
		},
		`gatsby-plugin-sitemap`
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.app/offline
		// 'gatsby-plugin-offline',
	]
};
