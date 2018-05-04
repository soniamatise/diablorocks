module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    // 'plugin:vue/essential'
    'eslint:recommended',
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/recommended',
    'plugin:prettier/recommended'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    "semi": [2, "never"],
    "no-console": [
      "off",
      "allow"
    ],
    "vue/max-attributes-per-line": "off",
    "prettier/prettier": ["error", { "semi": false }],
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
}
