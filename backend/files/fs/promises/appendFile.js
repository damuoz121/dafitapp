const { appendFile} = require('fs/promises');

async function appendToFile(fileName, data) {
  try {
    await appendFile(fileName, data, { flag: 'w' });
    console.log(`Appended data to ${fileName}`);
  } catch (error) {
    console.error(`Got an error trying to append the file: {error.message}`);
  }
}

appendToFile('backend/files/log/activities.txt', 'Skiing');