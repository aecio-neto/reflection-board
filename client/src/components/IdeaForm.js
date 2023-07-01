/* PONTOS IMPORTANTES
- O ideaForm está sendo selecionado após o render(). Pois o html é gerado através do componente. Por isso, não é possível pegá-lo antes de inserí-lo no html. 
- Os eventListenners também estão sendo disparados depois disso. 
- dispatchEvent é uma forma de fazer os componentes interagirem entre sim. 

O dispatchEvent é usado para despachar (disparar) um evento personalizado chamado "closemodal" quando o formulário é submetido com sucesso.

Ao despachar o evento "closemodal", o componente Modal, ou qualquer outro componente que esteja ouvindo esse evento, pode executar as ações apropriadas para fechar o modal. Isso geralmente é feito adicionando um event listener para o evento "closemodal" no componente Modal ou em outro componente que esteja interessado em fechar o modal quando o formulário é enviado.

Portanto, o dispatchEvent é usado para sinalizar e comunicar entre componentes diferentes que estão relacionados, permitindo que eles respondam a eventos específicos. Nesse caso, o evento "closemodal" é usado para notificar o componente Modal que o formulário foi submetido e que o modal deve ser fechado.

*/

class IdeaForm {
  constructor() {
    this._formModal = document.querySelector('#form-modal')
  }

  addEventListenners() {
    this._ideaForm.addEventListener('submit', this.handleSubmit.bind(this))
  }

  handleSubmit(e) {
    e.preventDefault()

    const idea = {
      // text, tag e username estão inseridos como valor do name no form
      // assim, é possível selecionados sem ter que atribuílos a varíaveis. Ex. const text = document.query...etc. 
      text: this._ideaForm.elements.text.value,
      tag: this._ideaForm.elements.tag.value,
      username: this._ideaForm.elements.username.value
    }

    console.log(idea);

    // Limpar o form
    this._ideaForm.reset()

    // Fechar o modal
    document.dispatchEvent(new Event('closemodal'))
  }
  
  render() {
    this._formModal.innerHTML = 
    `
      <form id="idea-form">
        <div class="form-control">
            <label for="idea-text">Nome</label>
            <input type="text" name="username" id="username" />
        </div>
        <div class="form-control">
          <label for="idea-text">Qual a sua reflexão?</label>
          <textarea name="text" id="idea-text"></textarea>
        </div>
        <div class="form-control">
          <label for="tag">Tag</label>
          <input type="text" name="tag" id="tag" />
        </div>
        <button class="btn" type="submit" id="submit">Enviar</button>
      </form>
    `
      this._ideaForm = document.querySelector('#idea-form')
      this.addEventListenners()
    }
}

export default IdeaForm