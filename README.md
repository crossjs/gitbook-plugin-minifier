# GitBook minify Plugin

This is an minifier for GitBook plugin.

Run minify after the build.

It is powered by the [html-minifier](https://github.com/jakubpawlowicz/clean-css), [clean-css](https://github.com/jakubpawlowicz/clean-css) and [UglifyJS](https://github.com/mishoo/UglifyJS2).

## Usage

### Installation

Add the plugin to your `book.json`:

```json
{
  "plugins": ["minifier"]
}
```

and run install command

```bash
$ gitbook install
```

### Optional configuration

You can add the following configuration params to your `book.json`:

```json
{
  "plugins": ["minifier"],
  "pluginsConfig": {
    "minifier": {
      "html": {},
      "css": {},
      "js": {}
    }
  }
}
```

## License

MIT License
