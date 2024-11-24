import sum from "./sum";

test("toplama işlemi doğru mu?", () => {
  expect(sum(1, 2)).toBe(3);
});
