var date = new Date();
clock = document.getElementById("clock");
dateHTML = document.getElementById("date");
background = document.getElementById("background");
settingButton = document.getElementById("openDialogButton");
const dialog = document.querySelector("dialog");
/* document.body.style.backgroundImage = `url(${background.value})`; */
const searchbar = document.getElementById("searchbar");
const optionMenu = document.querySelector(".select-menu"),
  selectBtn = optionMenu.querySelector(".select-btn"),
  options = optionMenu.querySelectorAll(".option"),
  sBtn_text = optionMenu.querySelector(".sBtn-text");

selectBtn.addEventListener("click", () =>
  optionMenu.classList.toggle("active")
);

options.forEach((option) => {
  option.addEventListener("click", () => {
    let selectedOption = option.querySelector(".option-text").innerText;
    sBtn_text.innerText = selectedOption;

    optionMenu.classList.remove("active");
  });
});

(function (document) {
  var div = document.getElementById("addbookmark-dropdown");
  var arrow = document.getElementById("arrow");
  var open = false;
  div.addEventListener("click", function () {
    if (arrow.className == "arrow arrow-down") {
      arrow.className = "arrow arrow-up";
    } else if (arrow.className == "arrow arrow-up") {
      arrow.className = "arrow arrow-down";
    }
    open = true;
  });
})(document);

searchbar.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    window.location = "https://www.google.com/search?q=" + searchbar.value;
  }
});
background.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    localStorage.setItem("background", `${background.value}`);
  }
});

if (background.value) {
  localStorage.setItem("background", `${background.value}`);
}
/* if (localStorage) {
  document.body.style.backgroundImage = `url(${localStorage.getItem(
    "background"
  )})`;
  console.log("Set background from local storage");
} */

function openDialog() {
  dialog.showModal();
}
function closeDialog() {
  dialog.close();
}
dialog.addEventListener("click", (e) => {
  const dialogDimensions = dialog.getBoundingClientRect();
  if (
    e.clientX < dialogDimensions.left ||
    e.clientX > dialogDimensions.right ||
    e.clientY < dialogDimensions.top ||
    e.clientY > dialogDimensions.bottom
  ) {
    dialog.close();
  }
});

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
var day;
var month;

setInterval(() => {
  var time = new Date();
  var currentTime24 = time.toTimeString().split(" ")[0];
  var hours = time.getHours();
  var ampm = hours >= 12 ? "PM" : "AM";
  clock.innerHTML = currentTime24;
}, 1000);
days.forEach((days, index) => {
  if (index == new Date().getDay()) {
    day = days;
  }
});
months.forEach((months, index) => {
  if (index == new Date().getMonth()) {
    month = months;
  }
});

dateHTML.innerHTML = day + " " + date.getDate() + " " + month;
