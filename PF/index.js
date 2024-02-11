const questions = [
  {
    question: "¿Cuál es la capital de Francia?",
    options: ["París", "Londres", "Roma"],
    correctAnswer: "París",
    userAnswer: "París"
  },
  {
    question: "¿Cuál es la capital de Inglaterra?",
    options: ["Madrid", "Londres", "Berlín"],
    correctAnswer: "Londres",
    userAnswer: "Berlín"
  },
  {
    question: "¿Cuál es la capital de España?",
    options: ["Madrid", "Barcelona", "Sevilla"],
    correctAnswer: "Madrid",
    userAnswer: "Madrid"
  },
  {
    question: "¿Cuál es la capital de Italia?",
    options: ["Milán", "Roma", "Nápoles"],
    correctAnswer: "Roma",
    userAnswer: "Milán"
  },
  {
    question: "¿Cuál es la capital de Alemania?",
    options: ["Hamburgo", "Berlín", "Múnich"],
    correctAnswer: "Berlín",
    userAnswer: "Berlín"
  },
  {
    question: "¿Cuál es la capital de Rusia?",
    options: ["Moscú", "San Petersburgo", "Sochi"],
    correctAnswer: "Moscú",
    userAnswer: "San Petersburgo"
  },
  {
    question: "¿Cuál es la capital de Japón?",
    options: ["Osaka", "Tokio", "Yokohama"],
    correctAnswer: "Tokio",
    userAnswer: "Tokio"
  },
  {
    question: "¿Cuál es la capital de Australia?",
    options: ["Sydney", "Melbourne", "Canberra"],
    correctAnswer: "Canberra",
    userAnswer: "Sydney"
  }
];

function isCorrectAnswer(question, answer) {
  return answer === question.correctAnswer;
}

function getUserAnswer(question) {
  return question.userAnswer;
}

function askQuestion(question) {
  console.log(question.question);
  const userAnswer = getUserAnswer(question);
  if (isCorrectAnswer(question, userAnswer)) {
    console.log("¡Correcto!");
  } else {
    console.log("Incorrecto. La respuesta correcta es " + question.correctAnswer);
  }
}

questions.forEach((question) => {
  askQuestion(question);
});
