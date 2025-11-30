module.exports = function (eleventyConfig) {
  // Copy everything in src/assets to /assets in the output
  eleventyConfig.addPassthroughCopy("src/assets");

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site",
    },
  };
};
