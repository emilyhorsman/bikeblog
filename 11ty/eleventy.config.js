import * as Sass from "sass";
import * as htmlmin from "html-minifier";

export default (c) => {
  c.addFilter("css", function (value) {
    return Sass.compileString(value, {
      style: "compressed",
    }).css;
  });

  c.addTransform("htmlmin", function (content, outputPath) {
    if (!outputPath.endsWith(".html")) {
      return content;
    }

    return htmlmin.minify(content, {
      useShortDoctype: true,
      removeComments: true,
      collapseWhitespace: true,
      collapseInlineTagWhitespace: true,
    });
  });

  return {
    dir: {
      input: "src",
    },
  };
};
