import ViewFinding from './viewFinidng.js';
import Publisher from '../helpers/publisherSingletone.js';

export default class ControllerFinding{
    constructor(){
        this.view = new ViewFinding(this.handleFindingNames);
        this.publisher = new Publisher;

    }

    handleFindingNames = () => {
        const names = this.view.getNames();
        this.publisher.notify('FINDING_BY_NAMES', names);
    }
}