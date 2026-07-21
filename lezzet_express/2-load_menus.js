export function getMenuFromRestaurant(name) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${name} menu is ready`);
    }, 1000);
  });
}

export default function loadAllMenus() {
    return Promise.all([
        getMenuFromRestaurant("Firuza"),
        getMenuFromRestaurant("Shirvanshah"),
        getMenuFromRestaurant("Khazar")
    ]);
}