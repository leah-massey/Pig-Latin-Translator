const pigLatin = function (string) {
  let extraLetters = "ay";

  if (string.includes(" ")) {
    //ie. does the string contain more than one word?

    let translatedArray = [];
    let extraLetters = "ay";
    let translatedString;

    let multipleWordArray = string.split(" ");

    multipleWordArray.forEach((word) => {
      // loop through each word in the array, applying pig latin logic

      let wordArray = word.split(""); // reduce to individual letters
      let wordFirstLetter = wordArray.shift(); // remove the first letter

      wordArray.push(wordFirstLetter, extraLetters); // add first letter and pig latin letters to the end of the word array

      translatedArray.push(wordArray.join("")); // turn back into string and push to translatedArray
      translatedString = translatedArray.join(" "); // join array of strings into one string
    });
    return translatedString;
  } else {
    const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;

    let punctuation;

    let stringArray = string.split("");
    let firstLetter = stringArray.shift();

    if (regex.test(stringArray[stringArray.length - 1])) {
      punctuation = stringArray[stringArray.length - 1];
      stringArray.pop();
      console.log(stringArray);
      stringArray.push(firstLetter, extraLetters, punctuation);
      return stringArray.join("");
    } else {
      stringArray.push(firstLetter, extraLetters);
      return stringArray.join("");
    }
  }
};

module.exports = pigLatin;
