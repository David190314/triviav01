import React from "react";
import { TriviaContext } from "../TriviaContext";
import "./ListResultQuez.css";

const ItemsTrivia = () => {
  return (
    <TriviaContext.Consumer>
      {({ resultTrivia }) => {
        return resultTrivia.map((element, idx) => {
          return (
            <div key={idx} className="quez__result-trivia">{`${
              element.response
                ? `+ ${element.question}`
                : `-  ${element.question}`
            }`}</div>
          );
        });
      }}
    </TriviaContext.Consumer>
  );
};

export { ItemsTrivia };
