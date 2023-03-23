// HackerLand University has the following grading policy:

// Every student receives a grade  in the inclusive range from 0 to 100 .
// Any grade less than 40 is a failing grade.
// Sam is a professor at the university and likes to round each student's grade according to these rules:

// If the difference between the grade and the next multiple of 5 is less than 3, round grade up to the next multiple of 5 .
// If the value of grade is less than 38 , no rounding occurs as the result will still be a failing grade.

let grades = [12, 45, 66, 87, 45, 81, 84];
let result = [];

function gradingStudents(grades) {
  grades.map((grade) => {
    if (grade < 38) {
      result.push(grade);
    } else {
      let compare = 5 - (grade % 5);
      compare < 3 ? result.push(grade + compare) : result.push(grade);
    }
  });
  console.log(result);
}

gradingStudents(grades);
