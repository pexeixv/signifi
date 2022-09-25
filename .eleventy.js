module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy("./sass/styles.css");
  eleventyConfig.addPassthroughCopy("./src/img");
  eleventyConfig.addPassthroughCopy("./src/script.js");
  eleventyConfig.addPassthroughCopy("./.htaccess");
  eleventyConfig.addFilter("lowerAndHyphen", (string) =>
    string.toLowerCase().replace(/\s/g, "-")
  );
  return {
    dir: {
      input: "src",
      output: "public_html",
    },
  };
};
