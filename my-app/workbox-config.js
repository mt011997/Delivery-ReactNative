module.exports = {
	globDirectory: 'dist/',
	globPatterns: [
		'**/*.{js,png,ico,json,html}'
	],
	swDest: 'dist/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};