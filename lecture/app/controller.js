import Model from "./model"

import View from "./view"

export default class Controller{
    constructor(){
        this.model = new Model(this.handleLoadData)
        this.view = new View(this.handleClickGenerate)
    }

    handleClickGenerate = () => {
        this.model.load()
    }

    handleLoadData = (data) => {
        this.view.renderUser(data)
    }



}