const express = require('express')
const router = express.Router()
const Idea = require('../models/Idea')

// Pega todas as ideias
// o async é por que a busca de dados é assíncrona
router.get('/', async (request, response) => {
  try {
    const ideas = await Idea.find()
    response.json({ success: true, data: ideas })
  } catch (error) {
    console.log(error);
    response.status(500).json({ success: false, error: 'Algo deu errado'})
  }
})

// Busca as ideias por id
router.get('/:id', async (request, response) => {
  try {
    const idea = await Idea.findById(request.params.id)
    response.json({ success: true, data: idea })
  } catch(erro) {
    console.log(erro);
    response.status(500).json({ success: false, error: 'Algo deu errado'})
  }
})

// Adiciona ideias / post method
// Instanciando uma nova idea
// id ficou de fora, pois o banco de dados adiciona uma id automaticamente
// a data já está default no modelo, então, não precisa ser definida aqui.
router.post('/', async (request, response) => {
  const idea = new Idea ({
    // id: ideas.length + 1,
    text: request.body.text,
    tag: request.body.tag,
    username: request.body.username,
    // date: new Date().toISOString().slice(0, 10)
  })

  try {
    const savedIdea = await idea.save()
    response.json({ success: true, data: savedIdea })
  } catch (error) {
    console.log(error);
    response.status(500).json({ success: false, error: 'Algo deu errado'})
    
  }
  response.json({ success: true, data: idea })
})

// Update idea 
router.put('/:id', async (request, response) => {
  try {
    const updatedIdea = await Idea.findByIdAndUpdate(
      request.params.id,
      {
        $set: {
          text: request.body.text,
          tag: request.body.tag
        }
      },
      { new: true }
      )
      response.json({ success: true, data: updatedIdea })
  } catch (error) {
    console.log(error)
    response.status(500).json({ success: false, message: 'Algo deu errado'})
  }
})

// Delete idea 
router.delete('/:id', async (request, response) => {
  try {
    await Idea.findByIdAndDelete(request.params.id)
    response.json({ success: true, data: {} })
  } catch (error) {
    console.log(error)
    response.status(500).json({ success: false, message: 'Algo deu errado'})
    
  }
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

