import Sass from "sass";
import EleventyWebC from "@11ty/eleventy-plugin-webc";

export default (c) => {
  c.addPlugin(EleventyWebC, {
    components: "src/_components/**/*.webc",
  });

  c.addFilter("css", function (value) {
    return Sass.compileString(value, { style: "compressed" }).css;
  });

  return {
    dir: {
      input: "src",
    },
  };
};
