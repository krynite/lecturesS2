const fs = require("node:fs/promises");

const myReadFile = (x, y, z) => {
  //? we do something -> open and read the file called x
  //! takes some time -> order of seconds vs milliseconds
  const data = "...";
  z(null, data);
};

//? how many parameters -> 3
//*          source(str) encoding(str), callback
const a = "test.txt";
const b = "utf8";
//? pass function as parameter -> callback
const c = (err, data) => {
  console.log(data);
};
// fs.readFile("test.text", b, c);
// fs.readFile("test1text", b, c);
// fs.readFile("test2.text", b, c);

//? async is just a marker for a function -> allows the async keyword
const readDataFiles = async () => {
  console.log("testing");
  // const data = await fs.readFile("test.txt", "utf8");
  // console.log(data);
  // const data2 = await fs.readFile("test2.txt", "utf8");
  // console.log(data2);
  // const data3 = await fs.readFile("test3.txt", "utf8");
  // console.log(data3);
};

async function normal() {
  const data = await fs.readFile("test.txt", "utf8");
  console.log(data);
}

console.log(readDataFiles());
normal();
console.log("Run this as soon as possible.");
