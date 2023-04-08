import fs from 'fs';

const createDocument = (data: object) => {
  const name = Date.now();

  fs.writeFile(`./${name}.json`, JSON.stringify(data, null, 2), (error) => {
    if (error) console.error(error);
  });
};

export { createDocument };
