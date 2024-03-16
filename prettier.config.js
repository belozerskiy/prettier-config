const config = {
  trailingComma: "all",
  semi: false,
  singleAttrubutePerLine: false,
  vueIndentScriptAndStyle: false,
  htmlWhitespaceSensitivity: "css",
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: "always",
  quoteProps: "as-needed",
  jsxSingleQuote: false,
  singleQuote: true,
  printWidth: 80,
  proseWrap: "always",
  useTabs: false,
  tabWidth: 4,
  endOfLine: "lf",
  override: [
    {
      files: "*.json",
      options: {
        traillingComma: "es5",
      },
    },
  ],
};

export default config;
