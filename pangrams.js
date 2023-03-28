// A pangram is a string that contains every letter of the alphabet. Given a sentence determine whether it is a pangram in the English alphabet. Ignore case. Return either pangram or not pangram as appropriate.
// The String.fromCharCode() method converts Unicode values to characters.

// The String.fromCharCode() is a static method of the String object.

// The syntax is always String.fromCharCode().

// You cannot use myString.fromCharCode().

// const s = "We promptly judged antique ivory buckles for the prize";
const s = "We promptly judged antique ivory buckles for the next prize";

function pangrams(s) {
  let input = s.toUpperCase();
  for (let i = 65; i <= 90; i++) {
    if (!input.includes(String.fromCharCode(i))) return "not pangram";
  }
  return "pangram";
}

const result = pangrams(s);

console.log(result);
