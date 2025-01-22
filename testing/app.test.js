import { expect, test } from "@jest/globals";
import { addTwo } from "./app.js";

// console.log(addTwo(4, 2));

test("add 2 and 4 to be 6", () => {
  const x = 2;
  const y = 4;

  const result = addTwo(x, y);

  expect(result).toBe(6);
});
