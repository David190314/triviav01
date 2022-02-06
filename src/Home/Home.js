import React from "react";
import { ButtonRedirectPages } from "../Buttons/ButtonsRedirect";
import { TriviaContext } from "../TriviaContext";
import { Titles } from "../Titles/TitlesDescriptios";
import { IntroParagraphs } from "../Titles/IntroParagraphs";
import { functionsButtons } from "../FuncionesReload/reload";
import "./Home.css";

const HomeApp = () => {
  return (
    <TriviaContext.Consumer>
      {({setInitialTrivia, initialTrivia }) => {
        return (
          <div className="home">
            <Titles descriptionTitle={"Welcome to the Trivia Challenge!"} />
            <IntroParagraphs
              description={
                "You will be presented with 10 true or false questions."
              }
            />
            <IntroParagraphs description={"Can you score 100%?"} />
            <ButtonRedirectPages
              value={"BEGIN"}
              path={"/Trivia"}
              functionsButtons={() =>
                functionsButtons(setInitialTrivia, initialTrivia)
              }
            />
          </div>
        );
      }}
    </TriviaContext.Consumer>
  );
};

export { HomeApp };
