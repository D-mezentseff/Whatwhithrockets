export default class viewCart{
  modalClassToggle = 'is-active';
    modalFreezeBack = 'is-clipped';
    constructor(handleRemoveFromCart, handleOpenCart){
        this.dom = document.querySelector('.cart');
        this.kol = document.querySelector('.cartel');
        this.footer = document.querySelector('.footer');
        this.dom.addEventListener('click', handleRemoveFromCart);
        this.kol.addEventListener('click', handleOpenCart);
        this.DOMModal = document.querySelector('.modal');
        this.DOMFormWrapper = document.querySelector('.cart');
    }
    
    render(date, sum){
      this.dom.innerHTML = date.map(el => this.renderCart(el)).join('');
      this.footer.innerHTML = this.renderFooter(sum);
      this.addListeners();
      this.DOMModal.classList.add(this.modalClassToggle);
      document.documentElement.classList.add(this.modalFreezeBack);
  }
    count(kol){
    this.kol.innerHTML = `<i class="fas fa-shopping-cart"></i><p class="badge bg-secondary"> ${ kol }</p>`;
  }
    addListeners(){
      //  document.querySelector('.btn_del_from_cart').addEventListener('click', this.handleSubmitChangeName);
      [...document.querySelectorAll('.btn_close_modal_form')].forEach(el => el.addEventListener('click', this.closeModal));
  }
    renderCart({ img, manufacture, pname, price, category, idp, amount }){
        return `
                  
                    <label class="label">Product</label>
                      <div class="modal-card-image ">
                        <figure class="image is-48x48 is-small">
                        <img src="${ img }" alt=""${ pname }"">
                        </figure>
                      </div>
                      <div class="modal-card-content">
                              <p class="title is-4">${ pname } </p>
                              <p class="subtitle is-6">Manufacture: ${ manufacture } </p>
                              <p>Category: ${ category }</p>
                              <p class="price tag is-success is-medium is-right">Price: ${ price*amount }₴</p>
                              <p class="price tag is-medium is-right">Selected: ${ amount }</p>
                              <button class="button  is-success is-light btn_del_from_cart" data-id="${ idp }">Delete from cart</button>   
                      </div>
                  </div>
  `;
    }
    renderFooter(sum){
      return `
      <p class="price tag is-medium is-right">All-price: ${ sum } ₴</p>
      <button class="submit button is-danger is-light btn_submit_change_name">Submit order</button>`
    }
    closeModal = () => {
      this.DOMModal.classList.remove(this.modalClassToggle);
      document.documentElement.classList.remove(this.modalFreezeBack);
  }

}