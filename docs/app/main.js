import ControllerChange from './change/controllerChange.js';
import ControllerDates from './dates/controllerDates.js';
import ControllerCart from './cart/controllerCart.js';
import ControllerFilter from './filter/controllerFilter.js';
import ControllerFinding from './finding/controllerFinding.js';
import ControllerSorting from './sorting/controllerSorting.js';
import Publisher from './helpers/publisher.js';

const publisher = new Publisher();
const dates = new ControllerDates(publisher);
const cart = new ControllerCart(publisher);
const change = new ControllerChange(publisher);
const filter = new ControllerFilter(publisher);
const finding = new ControllerFinding(publisher);
const sorting = new ControllerSorting(publisher);