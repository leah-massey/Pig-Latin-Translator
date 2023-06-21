const pigLatin = function (string) {
  const extraLetters = "ay";
  let stringArray = string.split("");
  let firstLetter = stringArray.shift();

  stringArray.push(firstLetter, extraLetters);

  return stringArray.join("");
};

module.exports = pigLatin;
