import React from "react";
import { TriviaContext } from "../TriviaContext";
import './Quez.css'

const Quez = () => {
  return (
    <TriviaContext.Consumer>
      {({ questions, number }) => {
        return <div className="container-quez">
          <p className="quez">{questions[number].question}</p>
        </div>;
      }}
    </TriviaContext.Consumer>
  );
};

export { Quez };
