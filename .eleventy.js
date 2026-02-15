import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default function (eleventyConfig) {
    eleventyConfig.addPlugin(eleventyImageTransformPlugin);

    eleventyConfig.addPassthroughCopy("./src/assets/fonts");
    eleventyConfig.addPassthroughCopy("./src/assets/images");
    eleventyConfig.addPassthroughCopy("./src/assets/main.js");

    eleventyConfig.addLayoutAlias("base", "layout/base");

    eleventyConfig.addCollection("pages", function (collectionsApi) {
        return collectionsApi
            .getAll()
            .filter(function (item) {
                return "listed" in item.data;
            })
            .sort((a, b) => (a.data.order || 0) - (b.data.order || 0));
    });
}

export const config = {
    dir: {
        input: "src",
        output: "_site",
        includes: "_templates",
        data: "_data",
    },
};
