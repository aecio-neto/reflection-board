const express = require('express')
require('dotenv').config()
const port = process.env.PORT || 5000 
const connectDB = require('./config/db')

connectDB()

const app = express()

// Body parser middleware
// isso nos permite acessar algumas partes através dos requests. Exxemplo: request.body.text = ''
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routes:  define os endpoits e o que é possível a partir daí.

// Cria uma rota simples
app.get('/', (request, response) => {
  response.json({ message: 'Bem vindo ao mural dos estoicos'})
})

const ideasRouter = require('./routes/ideas')
app.use('/api/ideas', ideasRouter)

app.listen(port, () => {console.log(`Server funcionando na porta: ${port}`)})