// module.exports = {
//   root: true,
//   env: {
//     browser: true,
//     node: true
//   },
//   parserOptions: {
//     parser: 'babel-eslint'
//   },
//   extends: [
//     // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
//     // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
//     // 'plugin:vue/essential'
//     'eslint:recommended',
//     // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
//     // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
//     'plugin:vue/recommended'
//   ],
//   // required to lint *.vue files
//   plugins: [
//     'vue'
//   ],
//   // add your custom rules here
//   rules: {
//     "semi": [2, "never"],
//     "indent": ["warn", "tab"],
//     "no-console": "off",
//     "vue/max-attributes-per-line": "off"
//   }
// }
module.exports = {
    "root": true,
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/recommended",
    ],
    "parserOptions": {
        "parser": 'babel-eslint'
    },
    "plugins": [
        'vue'
    ],
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
        "vue/html-indent": [
            "warn",
            "tab",
            {
                "alignAttributesVertically": true
            }
        ],
        "vue/max-attributes-per-line": [0, {
            "singleline": 5,
            "multiline": {
                "max": 5,
                "allowFirstLine": false
            }
        }],
        "vue/require-v-for-key": "off",
        "vue/no-confusing-v-for-v-if": "off",
        "vue/require-prop-types": "off",
        "vue/attributes-order": "off",
        "vue/html-self-closing": "off",
        "no-unused-labels": "off",
        "indent": [
            "warn",
            "tab"
        ],
        "linebreak-style": [
            "warn", "unix"
        ],
        "quotes": [
            "warn",
            "single"
        ],
        "semi": [
            "warn",
            "always"
        ],
        "camelcase": [
            "warn", {
                "properties": "always"
            }
        ],
    }
};