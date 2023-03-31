const { contertoToNATOAlphabet } = require("../src/foneticAlphabet");

describe("Validating the dummy", () => {
  test('should return "This is a dummy"', () => {
    expect(contertoToNATOAlphabet()).not.toBeNull();
  });
});
