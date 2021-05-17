import ModelDates from './modelDates.js';
import ViewDates from './viewDates.js';

export default class ControllerDates{
    constructor(Publisher){
        this.model = new ModelDates();
        this.view = new ViewDates(this.handleClickAddToCart, this.handleFindingByNames);

        this.load();
        this.publisher = Publisher;
        // this.publisher.subscribe('TO_RELOAD_DATES', this.handleReloadDates);
        this.publisher.subscribe('FILTER_BY_NAMES', this.handleFindingByNames);
        this.publisher.subscribe('SORTING_BY_PRICES', this.handleSortingByPrices);
    }

    load(){
        this.model.load()
            .then(d => {
                this.view.render(d);
            });

    }

    handleClickAddToCart = ev => {
        const date = this.getDateByEvent(ev);
        this.publisher.notify('ADD_TO_CART', date);
    }

    handleClickAddToForm = ev => {
        const date = this.getDateByEvent(ev);
        this.publisher.notify('ADD_TO_FORM', date);
    }

    getDateByEvent(ev){
        const id = ev.target.dataset.id;
        return this.model.getDateById(id);
    }

    handleReloadDates = () => {
        this.load();
    }

    handleFindingByNames = names => {
        const findingNames = this.model.findingByNames(names);
        this.view.render(findingNames);
    }

    handleSortingByPrices = type => {
        const sortedProducts = this.model.sortingByPrices(type);
        this.view.render(sortedProducts);
    }
}