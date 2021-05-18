import ModelDates from './modelProducts.js';
import ViewDates from './viewProducts.js';
import Publisher from '../helpers/publisherSingletone.js';

export default class ControllerDates{
    constructor(){
        this.model = new ModelDates();
        this.view = new ViewDates(this.handleClickAddToCart, this.handleClickDetails);
        this.publisher = new Publisher();
        this.load();
        this.publisher.subscribe('FINDING_BY_NAMES', this.handleFindingByNames);
        this.publisher.subscribe('SORTING_BY_PRICES', this.handleSortingByPrices);
        this.publisher.subscribe('FILTERING_BY_CATEGORIES', this.handleFilteringByCategories);
    }

    load(){
        this.model.load()
            .then(d => {
                this.view.render(d);
            });

    }

    handleClickAddToCart = ev => {
        const date = this.getProductsByEvent(ev);
        this.publisher.notify('ADD_TO_CART', date);
    }

    handleClickDetails = ev => {
        const data = {prod : this.getProductsByEvent(ev), handle : this.handleClickAddToCart};
        this.publisher.notify('DETAILS_INFO', data);
    }

    getProductsByEvent(ev){
        const id = ev.target.dataset.id;
        return this.model.getProductsById(id);
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
    handleFilteringByCategories = category => {
        const filtredProducts = this.model.filterProducts(category);
        this.view.render(filtredProducts);
    }
}