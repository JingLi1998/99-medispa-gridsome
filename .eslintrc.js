module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  globals: {
    page: true,
  },
  parserOptions: {
    parser: "babel-eslint",
  },
  extends: [
    "eslint:recommended",
    "plugin:jest/recommended",

    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    "plugin:vue/recommended",
    // "plugin:prettier/recommended"
  ],
  // required to lint *.vue files
  plugins: ["vue", "jest"],
  // add your custom rules here
  rules: {
    "no-console": "off",
    "scss(css-semicolonexpected)": "off",
    "vue/no-v-html": "off",
    "vue/max-attributes-per-line": "off",
    "vue/html-self-closing": "off",
    "vue/multiline-html-element-content-newline": "off",
    "vue/singleline-html-element-content-newline": "off",
    "vue/component-tags-order": [
      "error",
      { order: ["template", "script", "style"] },
    ],
  },
};
