const express = require('express')
const port = 3000
const app = express()

const ideas = [
  {
    id: 1,
    text: 'Não perca tempo discutindo sobre o que um bom homem deve ser. Seja.',
    tag: 'Virtude',
    username: 'Marco Aurélio',
    date: '17-03-174',
  },
  {
    id: 2,
    text: 'Enquanto você viver, continue aprendendo a viver.',
    tag: 'Vida',
    username: 'Seneca',
    date: '22-01-58',
  },
  {
    id: 3,
    text: 'É impossível para um homem aprender aquilo que ele acha que já sabe.',
    tag: 'Sabedoria',
    username: 'Epicteto',
    date: '07-10-128',
  },
];


// Routes:  define os endpoits e o que é possível a partir daí.

// Cria uma rota simples
app.get('/', (request, response) => {
  response.json({ message: 'Bem vindo ao mural dos estoicos'})
})

// Pega todas as ideias
app.get('/api/ideas', (request, response) => {
  response.json({ success: true, data: ideas})
})

// Busca as ideias por id
app.get('/api/ideas/:id', (request, response) => {
  const idea = ideas.find(idea => idea.id === +request.params.id)

  if(!idea) {
    return response
    .status(404)
    .json({ success: false, error: 'Referência não encontrada.'})
  }

  response.json({ success: true, data: idea })
})

app.listen(port, () => {console.log(`Server funcionando na porta: ${port}`)})