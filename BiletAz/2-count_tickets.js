const fs = require('fs');

function countTickets(path) {
  let data;

  try {
    data = fs.readFileSync(path, 'utf-8');
  }
  catch (err) {
    throw new Error('Cannot load the database');
  }

  const lines = data
    .split('\n')
    .slice(1)
    .filter(line => line.trim() !== '');

  const sectors = {};

  for (const line of lines) {
    const [name, sector] = line.split(',');

    if (!sectors[sector]) {
      sectors[sector] = [];
    }

    sectors[sector].push(name);
  }

  console.log(`Number of tickets: ${lines.length}`);

  for (const [sector, names] of Object.entries(sectors)) {
    console.log(
      `Number of tickets in ${sector}: ${names.length}. List: ${names.join(', ')}`
    );
  }
}

module.exports = countTickets;