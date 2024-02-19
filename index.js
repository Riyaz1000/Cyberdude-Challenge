const fs = require("fs");

const data = require("./data/place.json");
console.log(data);

// fs.mkdir("data", (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("folder created");
// });

// fs.writeFile("firstFileName.txt", "testing message", (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("written successfull");
// });

fs.mkdir("place", (err) => {});

for (let i = 0; i < data.length; i++) {
  fs.writeFile(
    `place/${data[i].place}.txt`,
    `I love this place ${data[i].place} because of his traditional named food ${data[i].food}, `,
    () => {
      console.log("file created");
    }
  );
}
