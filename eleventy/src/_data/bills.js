// var contentful = require('contentful')
require('dotenv').config()

// var client = contentful.createClient({
//     space: process.env.CONTENTFUL_SPACE_ID,
//     accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
// })

// module.exports = () => {
//     return client
//         .getEntries({
//             content_type: "bill",
//         })
//         // .then(response => response.items.map(item => console.log(item.fields)))
//         .then(response => response.items.map(item => item.fields))
//         .catch(console.error)
// }



const sanityClient = require('@sanity/client')
const client = sanityClient({
    projectId: 'jbo3owna',
    dataset: 'production',
    apiVersion: '2022-02-20',
    token: process.env.SANITY_ACCESS_TOKEN,
    useCdn: false
})


const query = '*[_type=="bill"]{date, paid, recipient, receiptId, items, discount}'
const params = {}


const getBills = async () => {
    const bills = await client.fetch(query, params)
    return bills

}

module.exports = getBills