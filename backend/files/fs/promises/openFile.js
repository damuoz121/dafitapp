const { open} = require('fs/promises');

async function openFile(fileName, data) {
  try {
    const file = await open(fileName, 'w');
    await file.write(data);
    console.log(`Opened file ${fileName}`);
  } catch (error) {
    console.error(`Got an error trying to open the file: {error.message}`);
  }
}

openFile('tasks.txt', 'Do homework');