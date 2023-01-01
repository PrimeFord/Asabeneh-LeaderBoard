//querySelector

const firstname = document.querySelector(".firstname");
const lastname = document.querySelector(".lastname");
const country = document.querySelector(".country");
const score = document.querySelector(".score");
const add = document.querySelector(".add");
const req = document.querySelector(".req");
const contents = document.querySelector(".contents");
const names = document.querySelector(".names");
const time = document.querySelector(".time");
const ctry = document.querySelector(".ctry");
const scr = document.querySelector(".scr");
const action = document.querySelector(".action");
const del = document.querySelector(".del");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");

//syntax
const mon = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

let now = new Date();
let year = now.getFullYear();
let month = now.getMonth() + 1;
let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();

let hrs = hours < 10 ? `0${hours}` : hours;
let min = minutes < 10 ? `0${minutes}` : minutes;

let timeNow = `${mon[month - 1]} ${date}, ${year} ${hrs}:${min}`;
//event listeners
add.addEventListener("click", () => {
  if (
    firstname.value === "" ||
    lastname.value === "" ||
    country.value === "" ||
    score.value === ""
  ) {
    req.textContent = "All fields are required";
  }
  if (
    firstname.value !== "" &&
    lastname.value !== "" &&
    country.value !== "" &&
    score.value !== ""
  ) {
    req.textContent = "";
    contents.innerHTML += `<div class="one">
    <div class="name">
      <p class="names">${
        firstname.value.toLocaleUpperCase() +
        " " +
        lastname.value.toLocaleUpperCase()
      }</p>
      <p class="time">${timeNow}</p>
    </div>
    <p class="ctry">${country.value.toLocaleUpperCase()}</p>
    <p class="scr">${score.value}</p>
    <div class="action">
      <div class="del">
        <img src="./media/delete-bin-6-line.png" alt="delete" />
      </div>
      <div class="plus">+5</div>
      <div class="minus">-5</div>
    </div>
  </div>`;
  }
});
plus.addEventListener("click", () => {
  let sccr = parseInt(scr.textContent);
  sccr += 5;
  scr.textContent = sccr;
});

// req.textContent = "";
// names.textContent =
//   firstname.value.toLocaleUpperCase() +
//   " " +
//   lastname.value.toLocaleUpperCase();
// time.textContent = timeNow;
// ctry.textContent = country.value.toLocaleUpperCase();
// scr.textContent = score.value;

// minus.addEventListener("click", () => {
//   parseInt(score.value) - 5;
// });
