// // Server API makes it possible to hook into various parts of Gridsome
// // on server-side and add custom data to the GraphQL data layer.
// // Learn more: https://gridsome.org/docs/server-api

// // Changes here require a server restart.
// // To restart press CTRL + C in terminal and run `gridsome develop`

// module.exports = function (api, options) {
//   api.loadSource(store => {
//   })
// }

// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

// module.exports = function (api) {
//   api.loadSource(({ addCollection }) => {
//     // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
//   })

//   api.createPages(({ createPage }) => {
//     // Use the Pages API here: https://gridsome.org/docs/pages-api/
//   })
// }

const axios = require('axios')


module.exports = function (api) {
  api.loadSource(async actions => {
    const { data } = await axios.get('https://api.quran.sutanlab.id/surah')

    // const collection = actions.addCollection('Post')

    const posts = actions.addCollection({
      typeName: 'QuranPost'
    })

    for (const item of data.data) {
      posts.addNode({
        id: item.number,
        surah_name: item.name.short,
        transliteration_id : item.name.transliteration.id,
        translation: item.name.translation.id,
        relevation: item.revelation.id,
        tafsir : item.tafsir.id
      })
    }
  })
}

