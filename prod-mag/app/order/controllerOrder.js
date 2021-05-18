import modelOrder from "./modelOrder.js";
import viewOrder from "./viewOrder.js";
import Publisher from '../helpers/publisherSingletone.js';

export default class controllerOrder{
    constructor(){
        this.model = new modelOrder();
        this.view = new viewOrder(this.handleSubmitOrder);
        this.publisher = new Publisher();
        this.publisher.subscribe('MAKING_ORDER', this.handleMakeOrder);
        this.load();
    }

    load(){
        const orderList = this.model.loadFromLS();
        return orderList
    }

    handleMakeOrder = data => {
        let order = this.load();
        this.view.render(order, data);
    }

    handleSubmitOrder = () => {
        const orders = this.view.getForm();
        this.model.addOrder(orders);
        this.view.closeModal();
        this.publisher.notify('CLEAR_CART');
    }
}