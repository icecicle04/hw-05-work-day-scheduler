// current time variables
var currentDay = moment().format("LL");
var currentHour = moment().format("k");
var currentHourInt = parseInt(currentHour);
// console.log(currentHour);
// var currentHour = 22;
// $.type(currentHour) === "number";
// $.type("input") === "number";
// var classColorArr = [
//   "#9",
//   "#10",
//   "#11",
//   "#12",
//   "#13",
//   "#14",
//   "#15",
//   "#16",
//   "#17",
// ];

$(document.body).ready(function () {
  $("input").each(function (i) {
    if (this.id < currentHourInt) {
      $(this).addClass("past");
    }
    if (this.id > currentHourInt) {
      $(this).addClass("future");
    }
    if (this.id == currentHourInt) {
      $(this).addClass("present");
    }
  });
});

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
