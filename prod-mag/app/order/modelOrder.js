export default class modelCart{
    #orders = [];

    loadFromLS(){
        this.#orders = JSON.parse(localStorage.getItem('orders') || "[]");
        if(this.#orders == [])
        return {order: "No orders", user : "", phone : ""}
        return this.order;
    }

    get order(){
        return JSON.parse(JSON.stringify(this.#orders));
    }

    addOrder(data){
        this.#orders.push(data);
        this.writeToLS();
        return this.order;
    }

    writeToLS(){
        localStorage.setItem('orders', JSON.stringify(this.#orders));
    }
    
}