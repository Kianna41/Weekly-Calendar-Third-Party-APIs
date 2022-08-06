var presentTime = $(".present");
var pastTime = $(".past");
var futureTime = $(".future");
var timeblocks = $("#timeblocks");
var hour = $(".hour");
var saveButton = $(".saveBtn");
var eventInput = $(".input");

console.log(hour);

var currentDay = moment().format("MMM Do, YYYY");
$("#currentDay").text(currentDay);
console.log(currentDay);

//function is created to show current hour.
// this should trigger calendar to display current as red on planner.

function present() {
  var today = moment().format("HH");
  console.log(today);
  for (var i = 0; i < 9; i++) {
    console.log(hour[i]);
    console.log(hour[i].id);
    if (hour[i].id === today) {
      $(hour[i]).addClass("present");
    }
  }
  console.log(present);
}
present();
console.log(present);

// function is used to display the past class.
//Hours that are less than the current time will be colored grey.
function past() {
  var today = moment().format("HH");
  console.log(today);
  for (var i = 0; i < 9; i++) {
    console.log(hour[i]);
    console.log(hour[i].id);
    if (hour[i].id < today) {
      $(hour[i]).addClass("past");
    }
  }
  console.log(past);
}
past();
console.log(past);

// function is used to display the future class.
// Hours that are greater than the current time are colored green.
function future() {
  var today = moment().format("HH");
  console.log(today);
  for (var i = 0; i < 9; i++) {
    console.log(hour[i]);
    console.log(hour[i].id);
    if (hour[i].id > today) {
      $(hour[i]).addClass("future");
    }
  }
  console.log(future);
}
future();
console.log(future);

//for loop saves the input in local storage
for (var i = 9; i < 18; i++) {
  var savedInput = localStorage.getItem(`${i}`);
  $(`#${i}`).val(savedInput);
}

//for loop allows the click on the save button to place text input in local storage
for (var i = 0; i < saveButton.length; i++) {
  saveButton[i].addEventListener("click", function () {
    var textAreaInput = $(this).parent().find("textarea").eq(0).val();
    var textAreaId = $(this).parent().find("textarea").eq(0).attr("id");
    // save it to localStorage
    localStorage.setItem(textAreaId, textAreaInput);
  });
}
