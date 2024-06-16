function poki() {
    console.log("do the hoki")
}
poki()

const { getUsers } = require("./getUsersApi")

async function init() {
    const result = await getUsers()
    // call here to the getUserApi
    console.log(result)
    

}
init()

const fs = require('fs');

const filePath = 'json.json';

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading JSON file:', err);
    return;
  }

  try {
    const jsonData = JSON.parse(data);

    jsonData.forEach(joke => {
      console.log(`Type: ${joke.type}`);
      console.log(`Setup: ${joke.setup}`);
      console.log(`Punchline: ${joke.punchline}`);
      console.log(`ID: ${joke.id}`);
      console.log('-----------------------------');
    });
  } catch (error) {
    console.error('Error parsing JSON data:', error);
  }
});


const { monitor } = require("./monitor")