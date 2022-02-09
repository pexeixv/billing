const subTotal = array => array.reduce((a, b) => a + parseInt(b.value), 0)

module.exports = eleventyConfig => {
    eleventyConfig.addPassthroughCopy('./src/css')
    eleventyConfig.addPassthroughCopy('./src/js')
    eleventyConfig.addPassthroughCopy('./src/img')
    eleventyConfig.addPassthroughCopy('./_redirects')
    eleventyConfig.addPassthroughCopy('./src/robots.txt')
    eleventyConfig.addFilter('subTotal', subTotal)
    return {
        dir: {
            input: "src",
            output: "dist"
        }
    }
}