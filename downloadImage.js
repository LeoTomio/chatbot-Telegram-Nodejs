//downloadImage.js

const Axios = require ('axios')
const FS = require ('fs')
const Path = require ('path')

module.exports = async function downloadImage (url,file_id){
    const path= Path.resolve(__dirname, 'img', `${file_id}.jpg`)
    const writer = Fs.createWriteStream(path)
    const reponse = await Axios({
        url,
        method:'GET',
        reponseType: 'stream'

    })
    reponse.data.pipe(writer)

    return new Promise((resolve, reject) =>  {
        writer.on('finish', resolve)
        writer.on('error', reject)
    })
}