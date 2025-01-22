import { expect, test } from "vitest";
import { addTwo } from "./sum.js";

test("adds 1 + 2 to equal 3", () => {
  const x = 1;
  const y = 2;

  const result = addTwo(x, y);

  //? result === 3
  expect(result).toBe(3);
});

test("adds 0 + 2 to equal 2", () => {
  const x = 0;
  const y = 2;

  const result = addTwo(x, y);

  expect(result).toBe(2);
});
