console.log("helloworld");

var currentDay = moment().format("LL");
var currentHour = moment().format("k");
// console.log(currentHour);

// IFs to format colors rows
if (currentHour > 9) {
  $("#nineAmText").addClass("past");
} else if (currentHour == 9) {
  $("nineAmText").addClass("present");
} else if (currentHour < 9) {
  $("nineAmText").addClass("future");
}
if (currentHour > 10) {
  $("#tenAmText").addClass("past");
  console.log("chode");
} else if (currentHour == 10) {
  $("tenAmText").addClass("present");
} else if (currentHour < 10) {
  $("tenAmText").addClass("future");
}
if (currentHour > 11) {
  $("#elevenAmText").addClass("past");
} else if (currentHour == 11) {
  $("elevenAmText").addClass("present");
} else if (currentHour < 11) {
  $("elevenAmText").addClass("future");
}
if (currentHour > 12) {
  $("#twelvePmText").addClass("past");
} else if (currentHour == 12) {
  $("twelvePmText").addClass("present");
} else if (currentHour < 12) {
  $("twelvePmText").addClass("future");
}
if (currentHour > 13) {
  $("#onePmText").addClass("past");
} else if (currentHour == 13) {
  $("onePmText").addClass("present");
} else if (currentHour < 13) {
  $("onePmText").addClass("future");
}
if (currentHour > 14) {
  $("#twoPmText").addClass("past");
  console.log("chode");
} else if (currentHour == 14) {
  $("twoPmText").addClass("present");
} else if (currentHour < 14) {
  $("twoPmText").addClass("future");
}
if (currentHour > 15) {
  $("#threePmText").addClass("past");
} else if (currentHour == 15) {
  $("threePmText").addClass("present");
} else if (currentHour < 15) {
  $("threePmText").addClass("future");
}
if (currentHour > 16) {
  $("#fourPmText").addClass("past");
} else if (currentHour == 16) {
  $("fourPmText").addClass("present");
} else if (currentHour < 16) {
  $("fourPmText").addClass("future");
}
if (currentHour > 17) {
  $("#fivePmText").addClass("past");
} else if (currentHour == 17) {
  $("fivePmText").addClass("present");
} else if (currentHour < 17) {
  $("fivePmText").addClass("future");
}
// id="nineAmText"
// color present

var nineAmNote = $("#onepm");
var tenAmNote = "";
var elevenAmNote = "";
var twelvePmNote = "";
var onePmNote = "";
var twoPmNote = "";
var threePmNote = "";
var fourPmNote = "";
var fivePmNote = "";

$("#currentDay").append(currentDay);

// $(document).ready(function () {
//   var currentHour = moment();
//   var nineAm = "";
//   var tenAM = "";
//   var elevenAM = "";
//   var twelvePM = "";
//   var onePM = "";
//   var twoPM = "";
//   var threePM = "";
//   var fourPM = "";
//   var fivePM = "";
// });
