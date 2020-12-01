const fs = require('fs');

let db;

const loadItems = fs.readFile('data.json', 'utf-8', function (err, data) {
  if (err) {
    return 'Error writing file: ' + err;
  } 
  return data;
});

//if (loadItems && loadItems.length > 0) 
db = JSON.parse(loadItems);
//else db = { items: [] };

// setInterval(() => {
//   let data = JSON.stringify(db);
//   fs.writeFile('./data.json', data, function (err) {
//     if (err) {
//       return 'Error writing file: ' + err;
//     }
//   });
// }, 5000);

module.exports = db;