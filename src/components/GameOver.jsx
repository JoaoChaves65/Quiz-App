import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import WellDone from "../img/welldone.svg";

import "./GameOver.css";

export const GameOver = () => {
  return (
    <div id="gameover">
        <h2>Fim de Jogo!</h2>
        <p>Pontuação: X</p>
        <p>Você acertou y de z perguntas.</p>
        <img src={WellDone} alt="Fim do Quiz" />
        <button>Reiniciar</button>
    </div>
  )
}