Resumen del Proyecto Número 2: Sistema de Votación en JavaScript
El objetivo principal de este proyecto es desarrollar un programa en JavaScript que permita a los usuarios crear encuestas, votar y ver los resultados en tiempo real. Para lograr este objetivo, se aplicarán conceptos básicos de programación en JavaScript, como variables, constantes, operadores y estructuras de control. Además, se utilizarán estructuras de datos como objetos y arrays para almacenar la información de las encuestas y los votos.
Importancia del Proyecto:
Aplicación Práctica: Este proyecto proporciona una aplicación práctica de los conocimientos adquiridos en programación en JavaScript. Los estudiantes podrán aplicar lo aprendido para construir una herramienta funcional y útil.
Fortalecimiento de Habilidades: Al trabajar en este proyecto, los estudiantes fortalecerán sus habilidades en JavaScript, incluyendo el manejo de datos, la lógica de programación y la interacción con el usuario.
Entrenamiento en Programación Orientada a Objetos y Funcional: El proyecto ofrece la oportunidad de practicar tanto la programación orientada a objetos como la programación funcional. Esto permite a los estudiantes familiarizarse con dos enfoques diferentes de desarrollo de software y comprender cuándo y cómo aplicar cada uno.
Códigos Destacados:

1 clases en JavaScript (POO):
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

1. Funciones de Flecha (PF):
questions.forEach((question) => {
  askQuestion(question);
});

1. Uso de Arrays y Métodos de Iteración:
this.questions.forEach((question) => { ... });
