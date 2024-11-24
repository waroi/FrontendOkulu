import sayHello from "./sayHello";
test("parametre doğru şekilde büyük harfli geliyor mu?", () => {
  expect(sayHello("hello")).toBe("HELLO");
});
