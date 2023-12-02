async function copyAll(fromDir, toDir, filePaths) {
    return Promise.all(filePaths.map(filePath => {
     return copyAFile(join(fromDir, filePath), join(toDir, filePath));
    }));
  }

  copyFiles('from', 'to', ['copyA.txt', 'copyB.txt']);