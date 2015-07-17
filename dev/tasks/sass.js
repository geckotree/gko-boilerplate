'use strict';
module.exports = {
	all: {
		options: {
			style: 'expanded',
			sourcemap: true
		},
		files: {
			'<%= assetsBuildFolder %>/css/fonts-woff.css': '<%= assetsFolder %>/sass/fonts-woff.scss',
			'<%= assetsBuildFolder %>/css/fonts-woff2.css': '<%= assetsFolder %>/sass/fonts-woff2.scss',
			'<%= assetsBuildFolder %>/css/style.css': '<%= assetsFolder %>/sass/style.scss',
			'<%= assetsBuildFolder %>/css/ie.css': '<%= assetsFolder %>/sass/ie.scss'
		}
	},
	emails: {
		files: {
			'<%= emailsBuildFolder %>/css/style.css': '<%= emailsFolder %>/sass/style.scss'
		}
	}
};
