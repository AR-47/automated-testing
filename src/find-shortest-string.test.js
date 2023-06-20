const findShortestString = require("./find-shortest-string");

test("findShortestString returns the shortest string in an array", () => {
  expect(findShortestString(["it", "is", "a", "nice", "day"])).toBe("a");
  expect(findShortestString(["why", "hello", "to", "you"])).toBe("to");
  expect(findShortestString(["brave", "dance"])).toBe("brave");
});

test("findShortestString returns the earlier array in cases of joint shortest strings", () => {
  expect(findShortestString(["brave", "dance"])).toBe("brave");
  expect(findShortestString(["my", "name", "is", "Adil"])).toBe("my");
});
