export default class ViewSorting{
    dropdwPriceSorting = document.querySelectorAll('.prices');
    dropdownButton = document.querySelector('.btn-sorting');
    
    constructor(handleSortingPrice){
        this.nodeToArray().map(el => el.addEventListener('click', handleSortingPrice));
        this.getPrices();
    }

    nodeToArray(){
        let array = [];
        for (let i = 0, len = this.dropdwPriceSorting.length; i < len; i++) {
            array[i] = this.dropdwPriceSorting[i];
        }
        return array;
    }

    setActive(type, name){
        this.dropdwPriceSorting.forEach(el => {el.dataset.type != type ? el.classList.remove("active") : el.classList.add("active"); this.dropdownButton.innerHTML = name })
    }
}