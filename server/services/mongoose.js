import mongoose from 'mongoose'

const url = 'mongodb+srv://Ivan:12345@cluster0.6jwug.mongodb.net/React-redux'

exports.myConnect = () => {
  mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true })
}

mongoose.connection.on('connect', () => {
  console.log('db is connected')
})

mongoose.connection.on('err', (err) => {
  console.log(err)
})
