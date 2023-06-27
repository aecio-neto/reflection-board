const express = require('express')
const router = express.Router()

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

// Pega todas as ideias
router.get('/', (request, response) => {
  response.json({ success: true, data: ideas})
})

// Busca as ideias por id
router.get('/:id', (request, response) => {
  const idea = ideas.find(idea => idea.id === +request.params.id)

  if(!idea) {
    return response
    .status(404)
    .json({ success: false, error: 'Referência não encontrada.'})
  }

  response.json({ success: true, data: idea })
})

// Adiciona ideias / post method
router.post('/', (request, respond) => {
  const idea = {
    id: ideas.length + 1,
    text: request.body.text,
    tag: request.body.tag,
    username: request.body.username,
    date: new Date().toISOString().slice(0, 10)
  }

  ideas.push(idea)

  respond.json({ success: true, data: idea })
})

// Update idea 
router.put('/:id', (request, response) => {
  const idea = ideas.find(idea => idea.id === +request.params.id)

  if(!idea) {
    return response
    .status(404)
    .json({ success: false, error: 'Referência não encontrada.'})
  }

  idea.text = request.body.text || idea.text
  idea.tag = request.body.tag || idea.tag

  response.json({ success: true, data: idea })
})

// Delete idea 
router.delete('/:id', (request, response) => {
  const idea = ideas.find(idea => idea.id === +request.params.id)

  if(!idea) {
    return response
    .status(404)
    .json({ success: false, error: 'Referência não encontrada.'})
  }

  const index = ideas.indexOf(idea)
  ideas.splice(index, 1)

  response.json({ success: true, data: {} })
})

/* Notas sobre o delete
A função find() é utilizada para percorrer o array ideas e encontrar o primeiro elemento que satisfaça a condição especificada na função de callback. Nesse caso, a condição é idea.id === +request.params.id, ou seja, busca-se o elemento cujo id seja igual ao valor do parâmetro id recebido na rota.

Caso nenhum elemento seja encontrado (ou seja, idea é undefined), isso significa que não há nenhuma ideia com o id especificado. Nesse caso, a resposta HTTP retorna um status 404 (Not Found) com uma mensagem de erro no formato JSON.

Se a ideia for encontrada, a constante index é definida usando o método indexOf(). Esse método retorna o índice do primeiro elemento encontrado no array ideas que seja igual ao elemento idea. Dessa forma, index receberá o valor do índice encontrado.

Em seguida, o método splice() é utilizado para remover o elemento encontrado do array ideas. O splice() modifica o array original, removendo ou substituindo elementos. Nesse caso, index é o índice do elemento a ser removido, e 1 indica que apenas um elemento será removido a partir desse índice.

Por fim, uma resposta HTTP com status 200 (OK) é enviada, indicando que a operação de exclusão foi bem-sucedida, juntamente com um objeto JSON contendo a propriedade success definida como true e a propriedade data definida como um objeto vazio {}.

Portanto, o código busca uma ideia com base no id recebido na rota, remove essa ideia do array ideas e retorna uma resposta JSON informando o sucesso da operação.

 */

module.exports = router

