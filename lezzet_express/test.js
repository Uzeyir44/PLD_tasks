//Test 1

/*
import confirmOrder from './0-confirm_order.js';
 
confirmOrder(101)
  .then((data) => console.log(data));
 
confirmOrder(-5)
  .catch((err) => console.log(err.message));
*/

//Test 2

/*
import handleOperation from './1-handle_operation.js';
 
handleOperation(202);
*/

//Test 3

/*
import loadAllMenus from './2-load_menus.js';
 
loadAllMenus().then((result) => console.log(result));
*/

//Test 4

/*
import openRestaurants from './3-open_restaurants.js';
 
openRestaurants().then((list) => console.log(list));
*/

//Test 5

/*
import fastestDriver from './4-driver_race.js';
 
fastestDriver().then((name) => console.log(`Order assigned to ${name}`));
*/

//Test 6

/*
import readFromCache from './5-cache.js';
 
readFromCache('home').then((a) => console.log(a));
readFromCache('park').catch((e) => console.log(e.message));
*/

//Test 7

import validateAddress from './6-validate_address.js';
 
const addresses = ['Baku, Nizami street 25', 'home', ''];
 
addresses.forEach((a) => {
  try {
    console.log(validateAddress(a));
  } catch (err) {
    console.log(`Validation error: ${err.message}`);
  } finally {
    console.log('---');
  }
});
