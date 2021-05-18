import ControllerProducts from './products/controllerProducts.js';
import ControllerCart from './cart/controllerCart.js';
import ControllerFilter from './filter/controllerFilter.js';
import ControllerFinding from './finding/controllerFinding.js';
import ControllerSorting from './sorting/controllerSorting.js';
import ControllerDetails from './details/controllerDetails.js';
import ControllerOrder from './order/controllerOrder.js';
import Publisher from './helpers/publisherSingletone.js';

const publisher = new Publisher();
const products = new ControllerProducts();
const cart = new ControllerCart();
const filter = new ControllerFilter();
const finding = new ControllerFinding();
const sorting = new ControllerSorting();
const details = new ControllerDetails();
const orders = new ControllerOrder();