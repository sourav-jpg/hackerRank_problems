// You will be given a list of 32 bit unsigned integers. Flip all the bits (1->0 and 0->1 ) and return the result as an unsigned integer.
// The padStart() method pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of the current string.

let n1 = 10;

function flippingBits(n) {
  const decToBin32 = (num) => num.toString(2).padStart(32, "0");
  const flippedBits = (num) => {
    return num
      .split("")
      .map((i) => (i == 0 ? 1 : 0))
      .join("");
  };
  const compose = (a, b) => (num) => a(b(num));
  const result = compose(flippedBits, decToBin32)(n);
  console.log(parseInt(result, 2));
}

flippingBits(n1);
