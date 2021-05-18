export default class viewCart{
    modalClassToggle = 'is-active';
    modalFreezeBack = 'is-clipped';
    constructor(handleSubmitOrder){
        this.orderButton = document.querySelector('btn_submit_order')
        this.dom = document.querySelector('.list-group-orders');
        this.DOMModal = document.querySelector('.modal-order');
        this.DOMFormWrapper = document.querySelector('.orders');
        this.handleSubmitOrder = handleSubmitOrder;
    }
    
    render(data, products){
      this.dom.innerHTML = data.map(el => this.renderPastOrder(el)).join('');
      this.DOMFormWrapper.innerHTML = this.renderForm();
      this.addListeners(products);
      this.DOMModal.classList.add(this.modalClassToggle);
      document.documentElement.classList.add(this.modalFreezeBack);
  }

    addListeners(products){
        document.querySelector('.orderForm').addEventListener('submit', this.handleSubmitOrder, false);
        [...document.querySelectorAll('.btn_close_modal_form')].forEach(el => el.addEventListener('click', this.closeModal));
        this.inputName = document.querySelector('.user');
        this.inputEmail = document.querySelector('.email');
        this.inputPhone = document.querySelector('.phone');
        this.products = products;
  }
    renderPastOrder({ Name, Email, Phone }){
        return `
                    <li class="list-group-item">Username: ${ Name }, Email: ${ Email } Phone: ${ Phone } </li>
  `;
    }
    renderForm(){
      return `
      <form class="row g-3 needs-validation orderForm novalidate">
            <div class="col-md-4">
              <label for="validationCustomUsername" class="form-label"> Username </label>
              <input type="text" class="form-control user" id="validationCustomUsername" maxlength="25" value="NoTaBoT" required>
              <div class="valid-feedback">
                Looks good!
              </div>
              <div class="invalid-feedback">
                  Please choose a username.
                </div>
            </div>
            <div class="col-md-4">
              <label for="validationCustomEmail" class="form-label">E-mail</label>
              <input type="email" class="form-control email" id="validationCustomEmail" maxlength="25" value="example@exmpl.com" required>
              <div class="valid-feedback">
                Looks good!
              </div>
            </div>
            <div class="col-md-4">
              <label for="validationCustomPhone" class="form-label">Phone number</label>
              <div class="input-group has-validation">
                <span class="input-group-text" id="inputGroupPrepend">+38</span>
                <input type="tel" class="form-control phone" id="validationCustomPhone" aria-describedby="inputGroupPrepend name="phone" pattern="[0-9]{3}[0-9]{3}[0-9]{4}"required> 
                <div class="invalid-feedback">
                  Bad phone number.
                </div>
              </div>
            </div>
            <div class="col-12">
              <button class="btn form-submit btn-primary" type="submit">Submit form</button>
            </div>
      </form>`
    }

    getForm(){
      return {
        Name : this.inputName.value,
        Email : this.inputEmail.value,
        Phone : this.inputPhone.value,
        Products : this.products.flat(),
        form : this.form
      }
    }

    closeModal = () => {
      this.DOMModal.classList.remove(this.modalClassToggle);
      document.documentElement.classList.remove(this.modalFreezeBack);
  }

}