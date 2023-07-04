# Mural de Ideias

Esta é uma aplicação fullstack para compartilhar ideias e reflexões. O backend foi desenvolvido utilizando Node.js/Express REST API e utiliza o MongoDB como banco de dados. A estrutura de desenvolvimento foi criada com Webpack.

Este é o meu primeiro contato com uma aplicação fullstack e meu objetivo era obter uma visão geral de como esse tipo de aplicação é construída e como as diferentes partes se encaixam, incluindo o frontend, o backend e as ferramentas de build.

[Clique para ver ao vivo](https://mural-de-ideias.onrender.com/) (O carregamento vai demorar um pouco, devido ao plano gratuito da render.com)

<img src="mural%20de%20ideias%20screenshot.png">


## Meu processo e aprendizado

Comecei pelo backend, utilizando o framework Express e o  MongoDB. Foi a minha primeira experiência em criar um CRUD (Create, Read, Update, Delete) do zero.

A interface foi estruturada tendo como base a utilização de componentes. Agora, o que estudei sobre POO e módulos em javascript começou a fazer ainda mais sentido. Cada componente é tratado como uma classe independente que possui seus próprios métodos e propriedades. 

Lembro de ter sofrido com os event listeners em classes, mas agora consigo compreender melhor como fazê-los funcionar corretamente, utilizando técnicas como `.bind(this)` e `dispatchEvent`. Algo que também me chama a atenção é a estrutura do projeto e arquivos em várias pastas como routes, models, client e components, com o webpack fazendo todo o processo funcionar. 

No geral, fico contente em perceber que as peças estão se encaixando. Embora tenha construído a aplicação através de um tutorial, sinto que estou mais confortável com os conceitos e tecnologias envolvidas. Agora, consigo compreender melhor como as partes se comunicam dentro de um ambiente de desenvolvimento moderno.

Esse era o último projeto do curso [Modern JS From Beginning](https://www.traversymedia.com/products/modern-javascript-from-the-beginning-2-0), oferecido pela Traversy Media. Aprendi muito com esse curso, pude revisar conceitos e me aprofundar em temas como programação orientada a objetos, módulos, JavaScript assíncrono e ferramentas de build.

## Uso

### Instalar Dependências

Instale as dependências no front-end e back-end

```bash
npm install
cd client
npm install
```

### Servidor Back-end/Express

```bash
npm start
```

ou

```bash
npm run dev (Nodemon)
```

Acesse http://localhost:8000

### Servidor Front-end/Webpack Dev

```bash
cd client
npm run dev
```

Acesse http://localhost:3000

Para gerar os arquivos de produção do front-end

```bash
cd client
npm run build
```

A compilação de produção será colocada na pasta public, que é a pasta estática do Express.

Variáveis de Ambiente
Renomeie .env-example para .env e adicione a URI do MongoDB ao arquivo .env.

```
MONGO_URI=your_mongodb_uri
```

## REST Endpoints

### Ideas

| Endpoint       | Descrição    | Método | Body                    |
| -------------- | -------------- | ------ | ----------------------- |
| /api/ideas     | Obter todas as ideias  | GET    | Nenhum                    |
| /api/ideas/:id | Obter ideia por id | GET    | Nenhum                    |
| /api/ideas     | Adicionar ideia      | POST   | { text, tag, username } |
| /api/ideas/:id | Atualizar ideia    | PUT    | { text, tag, username } |
| /api/ideas/:id | Deletar ideia    | DELETE | username                |

Ao atualizar ou excluir, o nome de usuário deve corresponder ao nome de usuário do criador da ideia.


## Agradecimentos

I know many people worked to make this happen. So, I want to extend my heartfelt thanks to the Traversy Media team.

Thank you very much!