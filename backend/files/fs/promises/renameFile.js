const { rename } = require('fs/promises');

async function renameFile(from, to) {
  try {
    await rename(from, to);
    console.log(`Renamed ${from} to ${to}`);
  } catch (error) {
    console.error(`Got an error trying to rename the file: ${error.message}`);
  }
}

const oldName = "tasks.txt";
const newName = "tareas.txt";
renameFile(oldName, newName);