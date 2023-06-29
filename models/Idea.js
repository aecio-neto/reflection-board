// o arquivo chama Idea. É uma convesão ter o nome com letra maiúscula e no singular. No banco de dados existe a collection ideas. Que é onde os objetos criados por essa classe serão armazenados. 

const mongoose = require('mongoose')

const IdeaSchema = new mongoose.Schema({
  text: {
    type: String,
    required: [true, 'Por favor, preencha o texto']
  },
  tag: {
    type: String,
  },
  username: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Idea', IdeaSchema)

/* Sobre o Model / Mongoose

No contexto do Mongoose, um Model é uma classe que fornece uma interface para interagir com os documentos do MongoDB. Ele permite criar, ler, atualizar e excluir (CRUD) registros no banco de dados MongoDB associado.

No código, o Model é definido usando o método mongoose.model('Idea', IdeaSchema). Esse método cria um Model chamado 'Idea' que será usado para interagir com os documentos na coleção 'ideas' do banco de dados. O Model 'Idea' é criado com base no IdeaSchema, que define a estrutura dos documentos que serão armazenados na coleção 'ideas'.

Através do Model 'Idea', você pode realizar diversas operações, como:

- Criar um novo documento (registro) na coleção 'ideas' usando new Idea({...}) e depois salvá-lo no banco de dados usando .save().
- Consultar documentos com base em critérios específicos usando métodos como .find(), .findOne(), .findById(), etc.
- Atualizar documentos existentes usando .updateOne(), .updateMany(), .findByIdAndUpdate(), etc.
- Excluir documentos usando .deleteOne(), .deleteMany(), .findByIdAndDelete(), etc.

Além disso, o Model também permite definir métodos personalizados, métodos estáticos, ganchos (hooks) e outras funcionalidades que facilitam a manipulação de dados e a lógica de negócio relacionada a esses documentos.
*/