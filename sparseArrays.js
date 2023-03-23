// There is a collection of input strings and a collection of query strings. For each query string, determine how many times it occurs in the list of input strings. Return an array of the results.

const strings = ["abc", "ababa", "ab", "bc"];
const queries = ["abc", "ababa"];
const result = [];

function matchingStrings(strings, queries) {
  let results = [];

  queries.map((query) => {
    let instances = 0;
    strings.map((string) => {
      if (query === string) {
        instances++;
      }
    });
    results.push(instances);
  });
  console.log(results);
}
matchingStrings(strings, queries);
