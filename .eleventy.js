module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/somya/Build");
    eleventyConfig.addPassthroughCopy("src/somya/TemplateData");
    eleventyConfig.addPassthroughCopy("src/index.css")
    eleventyConfig.addPassthroughCopy("src/ip.js")
    return {
        dir: {
            input: 'src',
        },
    };
};