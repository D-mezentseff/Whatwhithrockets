export default class Publisher{
    static #events = {};
    static #instanse = null;

    constructor(){
        if(!Publisher.#instanse){
            Publisher.#instanse = this;
        }
        return this.methods;
    }

    #subscribe = (event, listener) => {
        if(!Publisher.#events[event]) Publisher.#events[event] = [];
        Publisher.#events[event].push(listener);
    }

    #notify = (event, data) => {
        if(!Publisher.#events[event]) Publisher.#events[event] = [];
        Publisher.#events[event].forEach(func => func(data));
    }

    get methods(){
        return {
            subscribe : this.#subscribe,
            notify : this.#notify
        };
    }
}
