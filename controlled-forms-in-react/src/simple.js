const person = {
  name: "Simon",
  age: 21,
};

for (const key in person) {
  console.log(key, person[key]);
}

const keys = Object.keys(person);
for (let i = 0; i < keys.length; i++) {
  const key = keys[i];
  console.log(key, person[key]);
}

for (const [key, value] of Object.entries(person)) {
  console.log(key, value);
}
