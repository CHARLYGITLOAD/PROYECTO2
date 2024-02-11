// Clase Question para representar una pregunta
class Question {
  constructor(question, options, correctAnswer, userAnswer) {
    this.question = question;
    this.options = options;
    this.correctAnswer = correctAnswer;
    this.userAnswer = userAnswer;
  }

  // Método para verificar si la respuesta del usuario es correcta
  isCorrectAnswer() {
    return this.userAnswer === this.correctAnswer;
  }
}

// Clase Quiz para representar el cuestionario completo
class Quiz {
  constructor(questions) {
    this.questions = questions;
  }

  // Método para hacer las preguntas y mostrar los resultados
  askQuestions() {
    this.questions.forEach((question) => {
      console.log(question.question);
      const userAnswer = question.userAnswer;
      if (question.isCorrectAnswer()) {
        console.log("¡Correcto!");
      } else {
        console.log(`Incorrecto. La respuesta correcta es ${question.correctAnswer}`);
      }
    });
  }
}

// Definición de las preguntas
const questions = [
  new Question("¿Cuál es la capital de Francia?", ["París", "Londres", "Roma"], "París", "París"),
  // Agrega más preguntas aquí según sea necesario
];

// Crear una instancia del cuestionario y hacer las preguntas
const quiz = new Quiz(questions);
quiz.askQuestions();
