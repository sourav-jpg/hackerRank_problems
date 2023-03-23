// Camel Case is a naming style common in many programming languages. In Java, method and variable names typically start with a lowercase letter, with all subsequent words starting with a capital letter (example: startThread). Names of classes follow the same pattern, except that they start with a capital letter (example: BlueCar).

// Your task is to write a program that creates or splits Camel Case variable, method, and class names.

// Input Format

// Each line of the input file will begin with an operation (S or C) followed by a semi-colon followed by M, C, or V followed by a semi-colon followed by the words you'll need to operate on.
// The operation will either be S (split) or C (combine)
// M indicates method, C indicates class, and V indicates variable
// In the case of a split operation, the words will be a camel case method, class or variable name that you need to split into a space-delimited list of words starting with a lowercase letter.
// In the case of a combine operation, the words will be a space-delimited list of words starting with lowercase letters that you need to combine into the appropriate camel case String. Methods should end with an empty set of parentheses to differentiate them from variable names.
// Output Format

// For each input line, your program should print either the space-delimited list of words (in the case of a split operation) or the appropriate camel case string (in the case of a combine operation).

// =====Sample Input=======
// S;M;plasticCup()
// C;V;mobile phone
// C;C;coffee machine
// S;C;LargeSoftwareBook
// C;M;white sheet of paper
// S;V;pictureFrame

//-------------------------

//==== Sample Output=====
// plastic cup
// mobilePhone
// CoffeeMachine
// large software book
// whiteSheetOfPaper()
// picture frame

let input = "C;M;white sheet of paper";
function processData(input) {
  //Enter your code here
  let outputs = [];
  let text = input.slice(4);
  if (input[0] === "S") {
    switch (input[2]) {
      case "M":
        text = text.replace("()", "").trim();
        text = text
          .split(/(?=[A-Z])/)
          .join(" ")
          .toLowerCase();
        console.log(text);
        break;
      case "C":
        text = text.split(/(?=[A-Z])/);
        text = text.map((el) => el.trim().toLowerCase());
        text = text.join(" ");
        console.log(text);
        break;
      case "V":
        let originalText = text;
        text = text.split(/(?=[A-Z])/);
        text = text.map((el) => el.trim().toLowerCase());
        text = text.join(" ");
        console.log(text);
        break;
    }
    outputs.push(text);
  }
  if (input[0] === "C") {
    switch (input[2]) {
      case "M":
        // text is C;M;white sheet of paper
        // must be whiteSheetOfPaper()
        text = text.split(/(?=[" "])/);
        text = text.map((el, index) => {
          if (index === 0) return el.trim();
          else return el.trim().charAt(0).toUpperCase() + el.trim().slice(1);
        });
        text = text.join("").concat("()");
        console.log(text);
        break;
      case "C":
        // text is C;C;coffee machine
        // must be: CoffeMachine
        text = text.split(/(?=[" "])/);
        text = text.map(
          (el, index) => el.trim().charAt(0).toUpperCase() + el.trim().slice(1)
        );
        text = text.join("");
        console.log(text);
        break;
      case "V":
        // text is C;V;mobile phone
        // must be mobilePhone
        text = text.split(/(?=[" "])/);
        text = text.map((el, index) => {
          if (index === 0) return el.trim();
          else return el.trim().charAt(0).toUpperCase() + el.trim().slice(1);
        });
        text = text.join("");
        console.log(text);
        break;
    }
    outputs.push(text);
  }

  return outputs.forEach((output) => console.log);
}

processData(input);
