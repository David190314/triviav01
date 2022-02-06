import React from "react";
import { ButtonRedirectPages } from "../Buttons/ButtonsRedirect";
import { Titles } from "../Titles/TitlesDescriptios";
import { TriviaContext } from "../TriviaContext";
import { ItemsTrivia } from "../ListResultTrivia/ListResultTrivia";
import { functionsButtons } from "../FuncionesReload/reload";
import "./Result.css";

const ResultTrivia = () => {
  return (
    <TriviaContext.Consumer>
      {({ scored, questions, setRequestReload, requestReload }) => {
        return (
          <div className="container__result-quez">
            <div className="container__titles-score">
              <Titles descriptionTitle={"You Scored"} />
              <Titles descriptionTitle={`${scored} / ${questions.length}`} />
            </div>
            <div className="container__result-trivia">
              <ItemsTrivia />
            </div>
            <div className="button__result__trivia-redirect">
              <ButtonRedirectPages
                value={"PLAY AGAIN?"}
                path={"/Trivia"}
                functionsButtons={() =>
                  functionsButtons(setRequestReload, requestReload)
                }
              />
            </div>
          </div>
        );
      }}
    </TriviaContext.Consumer>
  );
};

export { ResultTrivia };
