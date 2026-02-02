const steps = [
  {
    type: "text",
    question: "So… do you remember the very first time we met? 😏",
    placeholder: "Date / place / both 😌"
  },
  {
    type: "text",
    question: "What was your first thought about me? Be honest 👀",
    placeholder: "I can handle it… I think 😄"
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

let currentStep = 0;

const questionEl = document.getElementById("question");
const textInput = document.getElementById("textInput");
const sliderBox = document.getElementById("sliderBox");
const slider = document.getElementById("slider");
const sliderValue = document.getElementById("sliderValue");
const nextBtn = document.getElementById("nextBtn");
const card = document.getElementById("card");

function renderStep() {
  const step = steps[currentStep];
  questionEl.innerText = step.question;

  textInput.style.display = "none";
  sliderBox.style.display = "none";
  nextBtn.style.display = "inline-block";

  if (step.type === "text") {
    textInput.style.display = "block";
    textInput.value = "";
    textInput.placeholder = step.placeholder;
  }

  if (step.type === "slider") {
    sliderBox.style.display = "block";
    updateSliderText();
  }

  if (step.type === "final") {
    card.innerHTML = `
      <h1>So… what do you say? 😌💖</h1>
      <button onclick="celebrate()">YES 💕</button>
      <br/><br/>
      <button onclick="celebrate()">obviously YES 🙄</button>
    `;
  }
}

function updateSliderText() {
  const value = slider.value;
  if (value < 40) sliderValue.innerText = "hmm 🤔";
  else if (value < 70) sliderValue.innerText = "nice 😌";
  else sliderValue.innerText = "WOW 😍";
}

slider.addEventListener("input", updateSliderText);

nextBtn.addEventListener("click", () => {
  currentStep++;
  if (currentStep < steps.length) {
    renderStep();
  }
});

function celebrate() {
  card.innerHTML = `
    <h1>YAYYYY 🥰</h1>
    <p>I knew it 💖</p>
    <p>Happy Valentine’s Day 😘</p>
  `;
}

renderStep();
