// debugger
let button = document.querySelector(".btnt");
let table = document.querySelector(".table");
let input = document.querySelector(".input");
let number_words = document.querySelector("#number_words");
let number_letters = document.querySelector("#number_letters");
let number_sentences = document.querySelector("#number_sentences");

function count_words(word) {
  let count = 0;
  let arr = word.split(" ");
  for (let words of arr) {
    if (words.toUpperCase() !== words.toLowerCase()) {
      count++;
    }
  }
  return count;
}

function count_letters(letters) {
  let count = 0;
  let arr = letters.split(" ");
  for (let words of arr) {
    for (let letters of words) {
      if (letters.toUpperCase() !== letters.toLowerCase()) {
        count++;
      }
    }
    return count;
  }
}

function count_sentences(sentences) {
  let count = 0;
  let arr = sentences.split(".");
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] === " " + arr[i + 1].charAt(1).toUpperCase() + arr[i+1].slice(2)) {
      count++;
    }
  }
  return count;
}

function fun() {
  table.style.display = "block";
  let text = input.value;

  number_words.innerHTML = count_words(text);
  number_letters.innerHTML = count_letters(text);
  number_sentences.innerHTML = count_sentences(text);
}

input.addEventListener("input", () => {
  fun();
});

let colorArr = [
  { backGroundColor: "red", sideBarColor: "black" },
  { backGroundColor: "blue", sideBarColor: "white" },
  { backGroundColor: "green", sideBarColor: "yellow" },
  { backGroundColor: "pink", sideBarColor: "black" },
  { backGroundColor: "red", sideBarColor: "black" },
  { backGroundColor: "blue", sideBarColor: "white" },
  { backGroundColor: "green", sideBarColor: "yellow" },
  { backGroundColor: "pink", sideBarColor: "black" },
  { backGroundColor: "red", sideBarColor: "black" },
  { backGroundColor: "blue", sideBarColor: "white" },
];

input.addEventListener("input", () => {
  fun();
});

button.addEventListener("click", () => {
  let i = Math.round(Math.random() * 10);
  document.body.style.backgroundColor = colorArr[i].backGroundColor;
  button.style.backgroundColor = colorArr[i].sideBarColor;
});
