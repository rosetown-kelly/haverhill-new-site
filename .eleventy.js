module.exports = function (eleventyConfig) {
  // Copy everything inside src/assets to _site/assets
  eleventyConfig.addPassthroughCopy("src/assets");

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site",
    },
  };
};
