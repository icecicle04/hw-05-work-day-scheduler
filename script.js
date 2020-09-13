// current time variables
var currentDay = moment().format("LL");
// var currentHour = moment().format("k");
// console.log(currentHour);
var currentHour = "12";

var classColorArr = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];

for (i = 0; i < classColorArr.length; i++) {
  if (currentHour < classColorArr[i]) {
    $("currentHourText").addClass("past");
  }
}
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
console.log(currentHour);

var nineAmNote = $(".nineAm-Note");
var tenAmNote = $(".tenAm-Note");
var elevenAmNote = $(".elevenAm-Note");
var twelvePmNote = $(".twelvePm-Note");
var onePmNote = $(".onePm-Note");
var twoPmNote = $(".twoPm-Note");
var threePmNote = $(".threePm-Note");
var fourPmNote = $(".fourPm-Note");
var fivePmNote = $(".fivePm-Note");

// vars to sense clicks
// var nineAmNote = document.getElementById(".nineAm-Note");
// nineAmNote.onclick = function () {
//   append(button);
// };

// $(document).ready(function () {
//   var newNineText = "userInput";
//   $("#.nineAm-Note").prop("value", newNineText);
//   $("#nine-Am-Note").append(newNineText);
// });

// $(".nineAm-Note").on("click")console.log("ive been clicked dawg");
//   function () {
//     var nineAmNote = jQuery("#nineAmText input[type=string]");
//   };

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
