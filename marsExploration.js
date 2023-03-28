// Letters in some of the SOS messages are altered by cosmic radiation during transmission. Given the signal received by Earth as a string,s , determine how many letters of the SOS message have been changed by radiation.

let s = "SOSSOT";

function marsExploration(s) {
  //   let count = 0;
  //   let msg = s.split("");
  //  console.log(msg.length);
  //  let sami =parseInt(msg.length/3);
  // console.log("sami",sami);
  // //   for (let i = 0; i < msg.length; i++) {
  // //     if (msg[i] !== "S" && msg[i] !== "O") count++;
  // //   }
  // //   return count;

  let output;

  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] == "S" && ((i + 3) % 3 === 0 || (i + 3) % 3 === 2)) {
      count++;
    } else if (s[i] == "O" && (i + 3) % 3 == 1) {
      count++;
    }
  }

  output = s.length - count;

  return output;
}
marsExploration(s);

const result = marsExploration(s);
console.log(result);
