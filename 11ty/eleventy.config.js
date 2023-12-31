import * as Sass from "sass";
import * as htmlmin from "html-minifier";
import Image, * as EleventyImg from "@11ty/eleventy-img";
import * as path from "path";

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

  c.addShortcode("image", async function (naiveSrc, alt, width = 768) {
    const src = path.join(
      naiveSrc[0] === "/"
        ? this.eleventy.directories.input
        : path.dirname(this.page.inputPath),
      naiveSrc,
    );
    const outputDir = path.join(this.eleventy.directories.output, "img");
    const metadata = await Image(src, {
      widths: [1, 1.5, 2].map((scale) => width * scale),
      formats: ["avif", "webp"],
      outputDir,
    });
    const reference = await Image(src, {
      widths: ["auto"],
      formats: ["webp"],
      outputDir,
    });

    const pictureElement = EleventyImg.generateHTML(metadata, {
      alt,
      sizes: "auto",
    });

    return `<div class="image-container"><a href="${reference.webp[0].url}" class="image" target="_blank" style="max-width:${metadata.webp[0].width}px">${pictureElement}</a></div>`;
  });

  return {
    dir: {
      input: "src",
    },
  };
};
