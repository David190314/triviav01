import React from "react";
import { TriviaContext } from "../TriviaContext";
import { useHistory } from "react-router-dom";
import { generateQuez } from "../FuncionesReload/generateQuez";
import './ButtonResponseQuez.css'

const Button = ({ value }) => {
  let history = useHistory()
  return (
    <TriviaContext.Consumer>
      {({
        setNumber,
        number,
        questions,
        setResulTrivia,
        resultTrivia,
        setScored,
        scored,
        setLoading,
      }) => {
        return (
          <input
            className="Button-quez"
            type={"submit"}
            value={value}
            onClick={(event) =>
              generateQuez(
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
              )
            }
          />
        );
      }}
    </TriviaContext.Consumer>
  );
};

export { Button };
