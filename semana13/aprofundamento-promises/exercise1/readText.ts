import { readdir, readFile, readFileSync } from "fs";

const handleFileRead = (err: Error, data: Buffer) => {
  const fileContent: string = data.toString();
  console.log(fileContent);
};

readdir("./textos", (err, files) => {
  if (err) {
    console.log(err);
    return;
  }
  files.map((text) => {
    return readFile("./textos/" + text, handleFileRead);
  });
});

// const hendleFileRead = (err, data: Buffer) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   const fileContent = data;
//   console.log(fileContent);
// };

// readFile(fileData, hendleFileRead);
