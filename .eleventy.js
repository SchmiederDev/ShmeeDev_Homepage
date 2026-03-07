import eleventyNavigationPlugin from "@11ty/eleventy-navigation";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import { imageShortcode } from "./src/_11ty/imageShortcode.js";

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyImageTransformPlugin);
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.addPassthroughCopy("./src/assets/fonts");
  eleventyConfig.addPassthroughCopy("./src/assets/images");
  eleventyConfig.addPassthroughCopy("./src/assets/main.js");
  eleventyConfig.addPassthroughCopy("./src/assets/vendor/**/*.js");
  eleventyConfig.addPassthroughCopy("./src/assets/vendor/**/*.css");

  eleventyConfig.addLayoutAlias("base", "layout/base");

  imageShortcode(eleventyConfig);
}

export const config = {
  dir: {
    input: "src",
    output: "_site",
    includes: "_templates",
    data: "_data",
  },
};
