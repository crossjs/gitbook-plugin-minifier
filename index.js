"use strict";

var fs = require("fs"),
  path = require("path"),
  htmlMinifier = require("html-minifier").minify,
  CleanCSS = require("clean-css"),
  UglifyJS = require("uglify-js");

var dirFilesMinify = function(dirPath, book) {
  var config = book.config.get("pluginsConfig")["minifier"];

  var htmlConfig = Object.assign(
    {
      collapseWhitespace: true,
      minifyCSS: true,
      minifyCSS: true,
      removeComments: true
    },
    config.html
  );
  var cssMinifier = new CleanCSS(
    Object.assign({ returnPromise: false }, config.css)
  );

  function doFilesMinify(filePath) {
    // read
    var input = fs.readFileSync(filePath, "utf8");

    // minify
    var compressed = (function() {
      if (filePath.match(/\.html$/) !== null) {
        return htmlMinifier(input, htmlConfig);
      } else if (filePath.match(/\.css$/) !== null) {
        return cssMinifier.minify(input).styles;
      } else if (filePath.match(/\.js$/) !== null) {
        return UglifyJS.minify(input, config.js).code;
      }
    })();

    // overwrite minified
    fs.writeFileSync(filePath, compressed);

    book.log.info.ln('minifier "' + filePath + '"');
  }

  fs.readdir(dirPath, function(err, files) {
    if (err) throw err;
    files
      .map(function(fileName) {
        // fileName to filePath
        return path.join(dirPath, fileName);
      })
      .forEach(function(filePath) {
        if (fs.statSync(filePath).isDirectory()) {
          // recursive
          dirFilesMinify(filePath, book);
        } else if (fs.statSync(filePath).isFile()) {
          if (filePath.match(/\.(html|css|js)$/) !== null) {
            doFilesMinify(filePath);
          }
        }
      });
  });
};

module.exports = {
  hooks: {
    finish: function() {
      dirFilesMinify(this.output.root(), this);
    }
  }
};
