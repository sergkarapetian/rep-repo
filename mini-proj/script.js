const input = document.querySelector(".typeInput");
const info = document.querySelector(".info");
const button = document.querySelector(".colorBtn");

function counter(string) {
  let words = string.split(" ");
  let wordCount = 0;
  let letterCount = 0;

  for (let word of words) {
    if (word.toUpperCase() !== word.toLowerCase()) {
      wordCount += 1;
      for (let letter of word) {
        if (letter.toUpperCase() !== word.toLowerCase()) {
          letterCount += 1;
        }
      }
    }
  }
  return `Letters: ${letterCount}, words: ${wordCount}`;
}

function sent(string) {
  let sent = string.split(" ");
  let lastChar = sent[sent.length - 1].slice(-1);
  let count = 0;

  for (let i = 0; i < sent.length; i++) {
    let current = sent[i].slice(-1);

    if (
      (current === "!" || current === "?" || current === ".") &&
      sent[i + 1].charAt(0) === sent[i + 1].charAt(0).toUpperCase()
    ) {
      count++;
    }
  }
  if (lastChar === "." || lastChar === "!" || lastChar === "?") {
    count++;
  }
  return count;
}

input.addEventListener("input", () => {
  info.innerText = counter(input.value) + " Sentences " + sent(input.value);
});

// Changeing background color

button.addEventListener("click", () => {
  const randomColor = Math.floor(Math.random() * 16777216).toString(16);
  document.querySelector(".main").style.backgroundColor = "#" + randomColor;
});
button.addEventListener("click", function () {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const a = 0.5;

  document.querySelector(
    ".main"
  ).style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${a})`;
});
