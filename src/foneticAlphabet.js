const NATOAlphabet = {
  A: "Alfa",
  B: "Bravo",
  C: "Charlie",
  D: "Delta",
  E: "Echo",
  F: "Foxtrot",
  G: "Golf",
  H: "Hotel",
  I: "India",
  J: "Juliett",
  K: "Kilo",
  L: "Lima",
  M: "Mike",
  N: "November",
  O: "Oscar",
  P: "Papa",
  Q: "Quebec",
  R: "Romeo",
  S: "Sierra",
  T: "Tango",
  U: "Uniform",
  V: "Victor",
  W: "Whiskey",
  X: "X-ray",
  Y: "Yankee",
  Z: "Zulu",
};

function contertoToNATOAlphabet(phrase) {
  if (!phrase) return "";

  const characters = phrase.split("").filter((char) => char !== " ");
  const convertedCharacteres = characters.map(
    (char) => NATOAlphabet[char.toUpperCase()] || char,
  );
  return convertedCharacteres.join(" ");
}

module.exports = {
  contertoToNATOAlphabet,
};
