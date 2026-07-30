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

    // Add the passenger's name
    sectors[sector].push(name);
  }

  // Step 5: Print total number of tickets
  console.log(`Number of tickets: ${lines.length}`);

  // Step 6: Print statistics for each sector
  for (const [sector, names] of Object.entries(sectors)) {
    console.log(
      `Number of tickets in ${sector}: ${names.length}. List: ${names.join(', ')}`
    );
  }
}

module.exports = countTickets;