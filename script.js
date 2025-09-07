const next = document.querySelector("#NextBtn");
let StartAgain = document.querySelector("#Again");
let question_container = document.querySelector(".question_container");
const quizData = [
  {
    question: "Which HTML tag is used for the largest heading?",
    answers: [
      { text: "<h4>", correct: false },
      { text: "<h1>", correct: true },
      { text: "<head>", correct: false },
      { text: "<header>", correct: false },
    ],
  },
  {
    question: "What is the result of 3 + 2 * 2 in JavaScript?",
    answers: [
      { text: "10", correct: false },
      { text: "7", correct: true },
      { text: "8", correct: false },
      { text: "5", correct: false },
    ],
  },
  {
    question: "Which CSS property controls the space between lines of text?",
    answers: [
      { text: "letter-spacing", correct: false },
      { text: "word-spacing", correct: false },
      { text: "line-height", correct: true },
      { text: "text-indent", correct: false },
    ],
  },
  {
    question:
      "Which method adds a new element at the end of an array in JavaScript?",
    answers: [
      { text: "pop()", correct: false },
      { text: "push()", correct: true },
      { text: "shift()", correct: false },
      { text: "unshift()", correct: false },
    ],
  },
  {
    question: "Which of the following is NOT a JavaScript data type?",
    answers: [
      { text: "Number", correct: false },
      { text: "Boolean", correct: false },
      { text: "Character", correct: true },
      { text: "String", correct: false },
    ],
  },
  {
    question: "Which is the smallest continent in the world?",
    answers: [
      { text: "Asia", correct: false },
      { text: "Australia", correct: true },
      { text: "Arctic", correct: false },
      { text: "Africa", correct: false },
    ],
  },
];

let index = 0;
let score = 0;
let answered = false;
function PrintQuestion() {
  answered = false;
  question_container.innerHTML = "";
  if (index >= quizData.length) {
    next.style.visibility = "hidden";

    question_container.innerHTML = `<h2>Quiz is finished</h2> 
    <p> Your Score ${score} out of ${quizData.length}</p>
           <button id="Again">Start Again</button>
    `;
    document.querySelector("#Again").addEventListener("click", () => {
      index = 0;
      score = 0;
      PrintQuestion();
    });
  }
  // if (index < quizData.length) {
  let currentQuestion = quizData[index];

  let h2 = document.createElement("h2");
  h2.textContent = `${currentQuestion.question}`;
  question_container.appendChild(h2);

  let OptionDiv = document.createElement("div");
  question_container.appendChild(OptionDiv);

  currentQuestion.answers.forEach((answers) => {
    let Btn = document.createElement("button");
    Btn.type = "button";
    Btn.id = "Btn";
    Btn.textContent = `${answers.text}`;
    // Btn.dataset.correct = answers.correct === true ? "true" : "false";
    Btn.dataset.correct = answers.correct;
    OptionDiv.appendChild(Btn);
  });
  next.style.visibility = "hidden";
  return;
}
// }

question_container.addEventListener("click", (e) => {
  let TargetElem = e.target.closest("#Btn");
  if (TargetElem) {
    next.style.visibility = "visible";
  }
  if (answered) return;
  answered = true;
  TargetElem.style.scale = 1.1;
  let AllOption = TargetElem.parentElement.querySelectorAll("#Btn");

  AllOption.forEach((ans) => {
    ans.classList.add("disabled");
    if (ans.dataset.correct === "true") {
      ans.style.background = "lightgreen";
    } else {
      ans.style.background = "red";
    }
  });
  if (TargetElem.dataset.correct == "true") {
    score++;
  }
  if (TargetElem)
    setTimeout(() => {
      if (!next) return;
      next.classList.add("show");
    }, 1000);

  if (TargetElem) {
    next.classList.add("show");
  }
});

PrintQuestion();

