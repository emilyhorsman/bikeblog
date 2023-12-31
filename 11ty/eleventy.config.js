import Sass from "sass";

export default (c) => {
  c.addFilter("css", function (value) {
    return Sass.compileString(value, { style: "compressed" }).css;
  });

  return {
    dir: {
      input: "src",
    },
  };
};
