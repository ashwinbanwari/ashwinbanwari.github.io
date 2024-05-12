module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("somya/Build");
    eleventyConfig.addPassthroughCopy("somya/TemplateData");

};