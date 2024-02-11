// Definir una estructura de datos para las preguntas y las respuestas usando objetos literales.
const questions = [
  {
    question: "¿Cuál es 3 + 4?",
    options: ["5", "6", "7"],
    correctAnswer: "7",
    userAnswer: "7" // Respuesta correcta
  },
  {
    question: "¿Cuál es 8 - 3?",
    options: ["3", "5", "6"],
    correctAnswer: "5",
    userAnswer: "5" // Respuesta correcta
  },
  // Agregar aquí más preguntas
];

// Definir una función que verifica si la respuesta del usuario es correcta.
function isCorrectAnswer(question, answer) {
  return answer === question.correctAnswer;
}

// Definir una función que obtiene la respuesta proporcionada por el usuario.
function getUserAnswer(question) {
  return question.userAnswer;
}

// Definir una función que pregunta una pregunta y muestra la retroalimentación.
function askQuestion(question) {
  console.log(question.question);
  const userAnswer = getUserAnswer(question);
  if (isCorrectAnswer(question, userAnswer)) {
    console.log("¡Correcto!");
    return 1; // Incrementar puntuación
  } else {
    console.log("Incorrecto. La respuesta correcta es " + question.correctAnswer);
    return 0; // No incrementar puntuación
  }
}

// Utilizar la función askQuestion para cada pregunta y calcular la puntuación total.
let totalScore = 0;
questions.forEach((question) => {
  totalScore += askQuestion(question);
});

console.log(`Puntuación final: ${totalScore}/${questions.length}`);
