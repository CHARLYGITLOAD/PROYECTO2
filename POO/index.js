class Question {
  constructor(question, options, correctAnswer, userAnswer) {
    this.question = question;
    this.options = options;
    this.correctAnswer = correctAnswer;
    this.userAnswer = userAnswer;
  }

  isCorrectAnswer() {
    return this.userAnswer === this.correctAnswer;
  }
}

class Quiz {
  constructor(questions) {
    this.questions = questions;
    this.totalQuestions = questions.length;
    this.correctAnswers = 0;
    this.incorrectAnswers = 0;
  }

  askQuestions() {
    this.questions.forEach((question) => {
      console.log(question.question);
      const userAnswer = question.userAnswer;
      if (question.isCorrectAnswer()) {
        console.log("¡Correcto!");
        this.correctAnswers++;
      } else {
        console.log(`Incorrecto. La respuesta correcta es ${question.correctAnswer}`);
        this.incorrectAnswers++;
      }
    });
    this.displayScore();
  }

  displayScore() {
    console.log(`Puntuación final: ${this.correctAnswers}/${this.totalQuestions}`);
  }
}

const questions = [
  new Question("¿Cuál es 3 + 4?", ["5", "6", "7"], "7", "7"),
  new Question("¿Cuál es 8 - 3?", ["3", "5", "6"], "5", "5"),
  // Agregar aquí más preguntas
];

const quiz = new Quiz(questions);
quiz.askQuestions();
