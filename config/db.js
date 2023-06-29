const mongoose = require('mongoose')

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI)
  console.log(`MongoDB connected: ${conn.connection.host}`)
}

module.exports = connectDB


/* Sobre o Mongoose
o Mongoose, que é uma biblioteca do Node.js que facilita a interação com bancos de dados MongoDB. 
*/