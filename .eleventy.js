const particularsToJson = array => {
    let newArray = []
    array.forEach(string => {
        const splitString = string.split('|')
        const object = {}
        object.particular = splitString[0]
        object.price = splitString[1]
        newArray.push(object)
    })
    return newArray
}

const subTotal = array => {
    let sum = 0
    array.forEach(string => {
        const splitString = string.split('|')
        const price = splitString[1].trim()
        sum += parseInt(price)
    })
    return sum
}

module.exports = eleventyConfig => {
    eleventyConfig.addPassthroughCopy('./src/css')
    eleventyConfig.addPassthroughCopy('./src/js')
    eleventyConfig.addPassthroughCopy('./src/img')
    eleventyConfig.addPassthroughCopy('./_redirects')
    eleventyConfig.addFilter('particularsToJson', particularsToJson)
    eleventyConfig.addFilter('subTotal', subTotal)
    return {
        dir: {
            input: "src",
            output: "dist"
        }
    }
}