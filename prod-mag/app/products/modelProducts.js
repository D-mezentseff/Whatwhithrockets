export default class ModelDates{
    #apiUrl = 'https://spreadsheets.google.com/feeds/cells/1PXorfz2O2NqH-FcW0nA-HhmtZMmSSwgHheifWc0e1tU/1/public/full?alt=json';
    #products = [];
    #data = [];
    #categories = [];

    load(){
        return fetch(this.#apiUrl)
            .then(r =>  r.json() )
            .then(d => {
                const voc = {
                    A: "idp",
                    B: "pname",
                    C: "manufacture",
                    D: "category",
                    E: "ingridients",
                    F: "amount",
                    G: "units",
                    H: "price",
                    I: "img"
                };
                let result = {};
                 this.#data = d;
                for (var key in this.#data.feed.entry) {
                    const product = this.#data.feed.entry[key];
                    const letter = product.title.$t[0];
                    result[voc[letter]] = product.content.$t;
                    if(letter == 'I'){
                        this.#products.push(result);
                        result = {};
                    }
                }
                this.#products.shift();
                return this.#products;    
            });
    }

    getProductsById(find_id){
        return this.copy(this.#products.find(({ idp }) => idp === find_id));
    }

    copy(d){
        return JSON.parse(JSON.stringify(d));
    }

    findingByNames(name){
        if(name != "") {
        const findingNames = this.#products.filter(el => el.pname.indexOf(name) != -1  || el.manufacture.indexOf(name) != -1
        );
        return findingNames;
        }
        else return this.#products;
    }

    sortingByPrices(type){
        const newProducts = this.copy(this.#products);
        if(type != "Normal") {
            const sortedProducts = newProducts.sort((a, b) => type == "Up" ? a.price - b.price : b.price - a.price);
        return sortedProducts;
        }
        else return this.#products;
    }

    filterProducts(category){
        this.#categories.find(el => el == category) === undefined ? this.#categories.push(category) : this.#categories = this.#categories.filter(el => el != category)
        if(this.#categories.length > 0) {
            const filtredProducts = this.#categories.map(el => this.#products.filter(eli => eli.category == el)
            );
            
            return filtredProducts.flat();
            
            }
            else return this.#products;
    }

}