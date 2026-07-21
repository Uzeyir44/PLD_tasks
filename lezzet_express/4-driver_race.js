export function driver(name, ms) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(name), ms);
  });
}

export default function fastestDriver() {
    return Promise.race([
        driver('Aydin', 1200),
        driver('Kamran', 600),
        driver('Elvin', 900)
    ])
}