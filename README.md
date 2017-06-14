# GitBook HTML minify Plugin

This is a HTML minifier for GitBook plugin.

Run HTML minify after build.

It is powered by the [html-minifier](https://github.com/kangax/html-minifier).

## Usage

### Installation

Add the plugin to your `book.json`:

```json
{
  "plugins": ["html-minifier"]
}
```

### Optional configuration

You can add the following [configuration params](https://github.com/kangax/html-minifier#options-quick-reference) to your `book.json`:

```json
{
  "plugins": ["html-minifier"],
  "pluginsConfig": {
    "html-minifier": {
      "caseSensitive": true,
      "collapseBooleanAttributes": true,
      "collapseInlineTagWhitespace": true,
      "collapseWhitespace": true,
      "conservativeCollapse": true,
      "customAttrAssign": [],
      "customAttrSurround": [],
      "decodeEntities": false,
      "html5": true,
      "includeAutoGeneratedTags": true,
      "keepClosingSlash": true,
      "minifyCSS": true,
      "minifyJS": true,
      "minifyURLs": false,
      "preserveLineBreaks": false,
      "preventAttributesEscaping": false,
      "processConditionalComments": false,
      "processScripts": [],
      "quoteCharacter": null,
      "removeAttributeQuotes": false,
      "removeComments": true,
      "removeEmptyAttributes": false,
      "removeEmptyElements": true,
      "removeOptionalTags": false,
      "removeRedundantAttributes": false,
      "removeScriptTypeAttributes": false,
      "removeStyleLinkTypeAttributes": false,
      "removeTagWhitespace": true,
      "sortAttributes": true,
      "sortClassName": true,
      "trimCustomFragments": false,
      "useShortDoctype": false,
    }
  }
}
```

## License

MIT License
