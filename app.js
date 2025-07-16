const questions = [
  {
    'que': 'Which of the following is markup language?',
    'a': 'HTML',
    'b': 'CSS',
    'c': 'JavaScript',
    'd': 'PHP',
    'correct': 'a',
  },
  {
    'que': 'What Year was JavaScript Launched?',
    'a': '1996',
    'b': '1995',
    'c': '1994',
    'd': 'none of the above',
    'correct': 'b',
  },
  {
    'que': 'Which language is used to style web pages?',
    'a': 'HTML',
    'b': 'jQuery',
    'c': 'CSS',
    'd': 'XML',
    'correct': 'c',
  }
]
let index = 0;
let total = questions.length;
let correct = 0, wrong = 0;
const quesBox = document.getElementById("quesBox");
const optionInputs = document.querySelectorAll(".options")
// question loading
const loadQuestion = () => {
  if (index == total){
       return endQuiz();
  }
  reset();
  const data = questions[index]
  // get question by index
  quesBox.innerText = ` ${index + 1}) ${data.que}`;

  //show your options
  optionInputs[0].nextElementSibling.innerText = data.a;
  optionInputs[1].nextElementSibling.innerText = data.b;
  optionInputs[2].nextElementSibling.innerText = data.c;
  optionInputs[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () => {
  const data = questions[index];
  const ans = getAnswer();
  if (ans === data.correct) {
    correct++;
  }
  else {
    wrong++;
  }
  index++; //going to next question
  loadQuestion();
  return;
}

// Targeting the input fields in html 
const getAnswer = () => {
  let answer;
  optionInputs.forEach(
    (input) => {
      if (input.checked) {
        answer = input.value;
      }
    }
  )
  return answer; 
}
const reset = () => {
  optionInputs.forEach(
    (input)=>{
        input.checked =false;
    }
  )
}
const endQuiz = () => {
  document.getElementById("box").innerHTML=`
  <div style="text-align:center">
  <h3> Thanks for playing the quiz </h3>
  <h3> Correct : ${correct} / ${total}</h3 >
  </div>
  `
}
loadQuestion();


