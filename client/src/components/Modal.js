/* 
O método constructor() é executado quando uma instância do componente é criada. Ele inicializa as propriedades do componente e configura os event listeners.

O this é uma referência ao próprio objeto que está sendo criado a partir da classe. Em outras palavras, ele se refere à instância do componente que está sendo manipulada em um determinado momento. No contexto desse código, o this é usado para acessar as propriedades e métodos do componente.

Ao utilizar o bind(this) nos event listeners, garante-se que o this dentro dessas funções de callback seja vinculado ao objeto do componente. Isso é necessário porque, por padrão, o this dentro de uma função de callback é alterado para o objeto que acionou o evento (o elemento do DOM). Ao utilizar bind(this), garantimos que o this se refira à instância do componente, permitindo o acesso às suas propriedades e métodos dentro das funções de callback.

Essa é uma abordagem comum para garantir que o this esteja corretamente vinculado ao objeto do componente em funções de callback, evitando problemas de escopo e permitindo o acesso adequado às propriedades e métodos do componente.

*/

class Modal {
  constructor() {
    this._modal = document.querySelector('#modal')
    this._modalBtn = document.querySelector('#modal-btn')
    this.addEventListener()
  }

  addEventListener () {
    this._modalBtn.addEventListener('click', this.openModal.bind(this))
    window.addEventListener('click', this.clickOutsideModal.bind(this))
    document.addEventListener('closemodal', () => { this.closeModal()})
  }

  openModal(e) {
    this._modal.style.display = 'block'
  }

  closeModal(e) {
    this._modal.style.display = 'none'
  }

  clickOutsideModal(e) {
    if (e.target === this._modal) {
      this.closeModal()
    }
  }
}

export default Modal