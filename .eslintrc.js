// https://eslint.org/docs/user-guide/configuring

module.exports = {
	"env": {
		"browser": true,
		"es6": true,
		"node": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:vue/essential"
	],
	"parserOptions": {
		"sourceType": "module",
	},
	"rules": {
		"no-console": [
			"off",
			"allow"
		],
		"no-unused-vars": [
			"warn", {
				"properties": "always"
			}
		],
		"indent": [
			"warn",
			"tab"
		],
		"linebreak-style": [
			"warn",
			"unix"
		],
		"quotes": [
			"warn",
			"single"
		],
		// "semi": [
		// 	"warn",
		// 	"always"
		// ],

		"camelcase": [
			"warn", {
				"properties": "always"
			}
		]
	}
};
