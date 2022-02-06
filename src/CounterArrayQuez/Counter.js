import React from "react";
import { TriviaContext } from "../TriviaContext";
import './Counter.css'

const CounterQuez = () => {
  return (
    <TriviaContext.Consumer>
      {({ questions, number }) => {
        return <h1 className="counter-quez">{`${number+1} of ${questions.length}`}</h1>;
      }}
    </TriviaContext.Consumer>
  );
};

export { CounterQuez };
