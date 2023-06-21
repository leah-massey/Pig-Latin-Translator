# Simple Pig Latin

A Codewars 5kyu kata solved using TDD

# The Problem

Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

# Examples

```

Single word lowercase:
pigIt ('hello'); => ellohay

Single word multicasecase:
pigIt ('Hello'); => elloHay

Single word with punctuation:
pigIt ('My!'); => yMay!

Multi word:
pigIt('Hello world'); => elloHay orldway

Multi word with punctuation:
pigIt('Hello, world!'); => elloHay, orldway!

Multi word:
pigIt('Pig latin is cool'); =>  igPay atinlay siay oolcay

single letter:
pigIt ('A'); => Aay

empty string:
pigIt (''); => string must not be empty.

not a string:
pigIt (7); => throw error: argument must be a string.
```
