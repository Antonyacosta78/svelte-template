module.exports = {
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": 9,
    "sourceType": "module"
  },
  "env": {
    "es6": true,
    "browser": true
  },
  "plugins": [
    "svelte3"
  ],
  "overrides": [
    {
      "files": ["**/*.svelte"],
      "processor": "svelte3/svelte3"
    }
  ],
  "settings":{
    // currently, svelte cannot process scss, so we might just ignore it
    // if your style tag has an attribute lang or type with value "scss", "sass", "text/scss", or "text/sass" it will be ignored
    "svelte3/ignore-styles": (attr) => {
      const validSassExtensions = ['sass', 'scss', 'text/sass', 'text/scss'];
      const lang = attr.lang || attr.type;
      return lang && validSassExtensions.includes(lang);
    }
  }
}