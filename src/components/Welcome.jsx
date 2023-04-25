import { useContext } from 'react';
import { QuizContext } from '../context/quiz';

import Quiz from '../img/quiz.svg';

import './Welcome.css'

export const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="welcome">
      <h1>Seja bem-vindo</h1>
      <p>Clique no botão abaixo para começar:</p>
      <button onClick={() => dispatch({ type: "CHANGE_STATE" })}>Iniciar</button>
      <img src={Quiz} alt="Início do Quiz" />
    </div>
  );
};
