// current time variables
var currentDay = moment().format("LL");
var currentHour = moment().format("k");
var currentHourInt = parseInt(currentHour);
// appends current day to header
$("#currentDay").append(currentDay);

// iterates through each input and assigns class based on INT current hour
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

// vars to write and save notes in local storage
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
