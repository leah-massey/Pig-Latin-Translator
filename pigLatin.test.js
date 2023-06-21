const pigLatin = require("./pigLatin");

describe("pigLatin", () => {
  it("transforms a word into pig latin", () => {
    expect(pigLatin("hello")).toEqual("ellohay");
  });

  it("transforms a word into pig latin", () => {
    expect(pigLatin("swim")).toEqual("wimsay");
  });
});
