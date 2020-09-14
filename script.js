// current time variables
var currentDay = moment().format("LL");
var currentHour = moment().format("k");
var currentHourInt = parseInt(currentHour);
// appends current day to header
$("#currentDay").append(currentDay);

$("#17saveButton").on("click", function () {
  var fivePmNote = $("#17").val();
  localStorage.setItem("fivePmNote", $("#17").val());
  //   localStorage.setItem(inputEl.attr(".textarea"), inputEl.val());
  console.log(fivePmNote);
  // loads previous notes on refresh
});

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

// local storage function
