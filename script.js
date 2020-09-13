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
