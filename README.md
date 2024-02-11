Resumen del Proyecto
Objetivo del Proyecto:
El proyecto consiste en desarrollar un sistema de votación en JavaScript que permite a los usuarios crear encuestas, votar y ver los resultados en tiempo real. Se aplicarán conceptos de programación en JavaScript, estructuras de datos y control de flujo, así como el uso de Git y GitHub.

Importancia del Proyecto:
Este proyecto fortalecerá habilidades fundamentales en programación, como el uso de variables, constantes, operadores aritméticos y de comparación, así como la manipulación de estructuras de datos como objetos y arrays. Además, permitirá entender y aplicar conceptos de programación orientada a objetos (POO) y programación funcional (PF), lo que ampliará la comprensión de diferentes paradigmas de programación.

Ejemplo de Código:

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

// Crear preguntas
const questions = [
  new Question("¿Cuál es 3 + 4?", ["5", "6", "7"], "7", "7"),
  new Question("¿Cuál es 8 - 3?", ["3", "5", "6"], "5", "5"),
  // Agregar más preguntas aquí
];

// Crear cuestionario y preguntar
const quiz = new Quiz(questions);
quiz.askQuestions();
