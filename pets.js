var fs = require('fs');

var userCommands = process.argv.slice(2);
var type = userCommands[0];
var index = userCommands[1];


if(type === 'read') {
  // node pets.js
  if(!index) {
    fs.readFile('./pets.json', 'utf8', function(err, data) {
      console.log(data)
    })
  } else {
    // node pets.js 0
    fs.readFile('./pets.json', 'utf8', function(err, data) {
      let parsedData = JSON.parse(data);
      // if the index of parsedData is undefined, console.log the usage prompt
      if(!parsedData[index]) {
        console.log('Usage: node pets.js [read | create | update | destroy]');
      } else {
        console.log(parsedData[index])
      }
    })
  }
} else if (type === 'create') {
  let age = index;
  let kind = userCommands[2];
  let name = userCommands[3];
  fs.readFile('./pets.json', 'utf8', function(err, data) {
    let theData = JSON.parse(data);
    theData.push({
      age: age,
      kind: kind,
      name: name
    });
    let stringifiedData = JSON.stringify(theData);
    fs.writeFile('./pets.json', stringifiedData, 'utf8');
  })
  // if(!index) {
  //
  // } else {
  //   console.log('Usage: node pets.js create AGE KIND NAME');
  // }
} else {
  console.log('Usage: node pets.js [read | create | update | destroy]');
}
