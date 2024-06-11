import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


export default [
  { languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      quotes: ['error', 'double'],
      indent: ['error', 2],
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    }
  }
];
