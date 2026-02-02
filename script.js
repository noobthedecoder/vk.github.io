const steps = [
  {
    type: "text",
    question: "So… do you remember the very first time we met? 😏",
    placeholder: "Date / place / both 😌"
  },
  {
    type: "text",
    question: "What was your first thought about me? Be honest 👀",
    placeholder: "No filters 😄"
  },
  {
    type: "slider",
    question: "On a scale of ‘hmm’ to ‘WOW’… how much do you like us? ❤️"
  },
  {
    type: "final",
    question: "Okay… serious question now 😌\nWill you be my Valentine? 💌"
  }
];

let current = 0;
let sliderTouched = false;

const card = document.getElementById("card");
const questionEl = document.getElementById("question");
const textInput = document.getElementById("textInput");
const sliderBox = document.getElementById("sliderBox");
const slider = document.getElementById("slider");
const sliderValue = document.getElementById("sliderValue");
const nextBtn = document.getElementById("nextBtn");
const errorEl = document.getElementById("error");

function render() {
  const step = steps[current];
  questionEl.innerText = step.question;
  errorEl.innerText = "";

  textInput.style.display = "none";
  sliderBox.style.display = "none";
  nextBtn.style.display = "block";

  if (step.type === "text") {
    textInput.style.display = "block";
    textInput.value = "";
    textInput.placeholder = step.placeholder;
  }

  if (step.type === "slider") {
    sliderBox.style.display = "block";
    sliderTouched = false;
    sliderValue.innerText = "Move me 😌";
  }

  if (step.type === "final") {
    card.innerHTML = `
      <h1>So… what do you say? 😌💖</h1>
      <button onclick="celebrate()">YES 💕</button>
      <button id="noBtn">No 😶</button>
    `;

    const noBtn = document.getElementById("noBtn");
    noBtn.addEventListener("mouseover", moveNo);
  }
}

function moveNo(e) {
  const btn = e.target;
  const x = Math.random() * 240 - 120;
  const y = Math.random() * 180 - 90;
  btn.style.transform = `translate(${x}px, ${y}px)`;
}

slider.addEventListener("input", () => {
  sliderTouched = true;
  const v = slider.value;
  sliderValue.innerText =
    v < 40 ? "hmm 🤔" : v < 70 ? "nice 😌" : "WOW 😍";
});

nextBtn.addEventListener("click", () => {
  const step = steps[current];

  if (step.type === "text" && textInput.value.trim() === "") {
    errorEl.innerText = "Answer first 😌";
    return;
  }

  if (step.type === "slider" && !sliderTouched) {
    errorEl.innerText = "Come on… move it 😏";
    return;
  }

  current++;
  if (current < steps.length) render();
});

function celebrate() {
  card.innerHTML = `
    <h1>YAYYYY 🥰</h1>
    <p>I knew it 💖</p>
    <p>Happy Valentine’s Day 😘</p>
  `;
}

render();
