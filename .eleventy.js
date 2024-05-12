module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/somya/Build");
    eleventyConfig.addPassthroughCopy("src/somya/TemplateData");
    return {
        dir: {
            input: 'src',
        },
    };
};