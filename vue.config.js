module.exports = {
	publicPath: "/perros-guia/",
	outputDir: "docs",
	assetsDir: "assets",
	devServer: {
		port: 2005
	},
	pages: {
		index: {
			entry: "src/main.js",
			template: "public/index.html",
			title: "Escuela de Perros Guía de México"
		}
	}
}
