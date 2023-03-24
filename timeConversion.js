// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
// Example:
// s='12:01:00PM'
// return '12:01:00'

// s='12:01:00AM'
// return '00:01:00'

function timeConversion(s) {
  let ending = s.charAt(8).toLowerCase();
  let sec = s.charAt(6) + s.charAt(7);
  let min = s.charAt(3) + s.charAt(4);
  let hour = s.charAt(0) + s.charAt(1);

  if (ending == "a" && hour == "12") {
    hour = "00";
  } else if (ending == "p" && parseInt(hour) < 12) {
    hour = (parseInt(hour) + 12).toString();
  }
  console.log(`${hour}:${min}:${sec}`);
}

timeConversion("01:01:45PM");
