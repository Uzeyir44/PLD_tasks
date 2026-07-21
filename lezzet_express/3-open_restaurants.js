export function checkRestaurant(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (name === 'Nargiz') reject(new Error(`${name} is closed`));
      else resolve(`${name} is open`);
    }, 800);
  });
}

export default function openRestaurants() {
    return Promise.allSettled([
        checkRestaurant("Firuza"),
        checkRestaurant("Nargiz"),
        checkRestaurant("Khazar")
    ]).then((results) =>
        results
            .filter(result => result.status === 'fulfilled')
            .map(result => result.value)
    );
}