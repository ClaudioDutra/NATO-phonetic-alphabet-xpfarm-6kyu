const { contertoToNATOAlphabet } = require("../src/foneticAlphabet");

describe("Validate the contertoToNATOAlphabet function", () => {
  test("shoud return an empty input when no input has sent", () => {
    expect(contertoToNATOAlphabet()).toBe("");
  });

  test("shoud return an empty input when empty input has sent", () => {
    expect(contertoToNATOAlphabet("")).toBe("");
  });

  test.each([
    {
      input: "If, you  can read?",
      output:
        "India Foxtrot , Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta ?",
    },
    {
      input: "Did not see that coming.",
      output:
        "Delta India Delta November Oscar Tango Sierra Echo Echo Tango Hotel Alfa Tango Charlie Oscar Mike India November Golf .",
    },
    {
      input: "go for it!",
      output: "Golf Oscar Foxtrot Oscar Romeo India Tango !",
    },
  ])(
    'should return the input "$output" when the value "$input" is provided',
    ({ input, output }) => {
      const value = contertoToNATOAlphabet(input);
      expect(value).toBe(output);
    },
  );
});
