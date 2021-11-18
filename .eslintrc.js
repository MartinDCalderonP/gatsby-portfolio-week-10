module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: `react-app`,
  rules: {
    "no-console": ["error", { allow: ["warn", "error"] }],
    "react/prop-types": "off",
    quotes: ["error", "single", { allowTemplateLiterals: true }],
    semi: ["error", "always"],
  },
}
