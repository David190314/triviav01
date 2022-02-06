export const generateQuez = (
  setNumber,
  number,
  questions,
  event,
  setResulTrivia,
  resultTrivia,
  setScored,
  scored,
  setLoading,
  history
) => {
  if (questions[number].correct_answer === event.target.value) {
    setScored(scored + 1);
    let quezIterado = { ...questions[number], response: true };
    setResulTrivia([...resultTrivia, quezIterado]);
  } else {
    let quezIterado = { ...questions[number], response: false };
    setResulTrivia([...resultTrivia, quezIterado]);
  }

  if (number <= questions.length - 2) {
    setNumber(number + 1);
  }
  if (questions.length - 1 === number) {
    setLoading(true);
    history.push("/ResultadoTrivia");
    setNumber(0);
  }
};
