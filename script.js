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
  // gets text from textarea and puts it in local storage
  $(".saveBtn").on("click", function () {
    var noteStored = $(this).siblings(".textarea").val();
    var fivePmStored = $(this).attr("dataStore");
    localStorage.setItem(fivePmStored, noteStored);
    // retreives text from local storage
    // localStorage.getItem(fivePmNote);
    $("#fivePmText").text(localStorage.getItem(fivePmStored));
    console.log(JSON.stringify(localStorage));
    // loads previous notes on refresh
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
