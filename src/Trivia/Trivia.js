import React from "react";
import { Button } from "../Buttons/ButtonsTrivia";
import { CounterQuez } from "../CounterArrayQuez/Counter";
import { Quez } from "../Quez/Quez";
import { Titles } from "../Titles/TitlesDescriptios";
import { TriviaContext } from "../TriviaContext";
import './Trivia.css'

const Trivia = () => {
  
  return (
    <TriviaContext.Consumer>
      {({questions}) => {
        return (
          <div className="trivia__app-quez">
            <Titles descriptionTitle={"Entertainment: Video Games"} />
            <Quez />
            <Button value={"True"} />
            <Button value={"False"} />
            <CounterQuez />
          </div>
        );
      }}
    </TriviaContext.Consumer>
  );
};

export { Trivia };
