import React from "react";
import { Redirect, Route } from "react-router-dom";
import { Trivia } from "../Trivia/Trivia";
import { TriviaContext } from "../TriviaContext";
import { ResultTrivia } from "../ResultTrivia/ResultTrivia";

const PrivateRoute = () => {
  return (
    <TriviaContext.Consumer>
      {({ initialTrivia, loading }) => {
        return (
          <React.Fragment>
            <Route path={"/Trivia"}>
              {initialTrivia ? <Trivia /> : <Redirect to={"/"} />}
            </Route>
            <Route path={"/ResultadoTrivia"}>
              {loading ? <ResultTrivia/> : <Redirect to={"/"} />}
            </Route>
          </React.Fragment>
        );
      }}
    </TriviaContext.Consumer>
  );
};

export { PrivateRoute };
