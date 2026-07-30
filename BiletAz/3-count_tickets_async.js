const fs = require('fs').promises;

function countTickets(path) {
  return fs.readFile(path, 'utf-8')
    .then((data) => {
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

      const report = [];

      console.log(`Number of tickets: ${lines.length}`);
      report.push(`Number of tickets: ${lines.length}`);

      for (const [sector, names] of Object.entries(sectors)) {
        const message =
          `Number of tickets in ${sector}: ${names.length}. List: ${names.join(', ')}`;

        console.log(message);
        report.push(message);
      }

      // Whatever you return here becomes the resolved value
      return report.join('\n');
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

module.exports = countTickets;