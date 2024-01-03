const qustionData = [
  {
    question: "What is 10 x 6 ?",
    correct: 60,
  },
  {
    question: "What is 5 + 30 ?",
    correct: 35,
  },
  {
    question: "What is 90 - 50 ?",
    correct: 40,
  },
  {
    question: "What is 20 + 70 ?",
    correct: 90,
  },
  {
    question: "What is 5 x 10 ?",
    correct: 50,
  },
  {
    question: "What is 50 - 22 ?",
    correct: 28,
  },
];

const container = document.querySelector(".container");
const score = document.getElementById("score");
const questionEl = document.getElementById("question");
const input = document.getElementById("input");
const subbtn = document.getElementById("subbtn");

let currentQuestion = 0;
let scoreCount = 0;

function loadQuestion() {
  const load = qustionData[currentQuestion];
  questionEl.innerHTML = load.question;
}
loadQuestion();

subbtn.addEventListener("click", () => {
  if (input.value === "") {
    alert("enter value");
    console.log("111");
  }

  // console.log(+input.value, qustionData[currentQuestion].correct);
  if (+input.value === qustionData[currentQuestion].correct) {
    score.innerHTML = `Score: ${++scoreCount}`;
    console.log("222");
  }

  if (input.value !== "") {
    currentQuestion++;
    console.log("33");
  }

  input.value = "";
  input.focus();
  if (currentQuestion < qustionData.length) {
    loadQuestion();
  } else {
    container.innerHTML = `<h2>You answered correctly at ${scoreCount}/${qustionData.length} questions.</h2>

            <button onclick="location.reload()">Reload</button>`;
  }
});
