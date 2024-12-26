export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("bundle.css");
  eleventyConfig.addPassthroughCopy("visitor-counter.js")
};