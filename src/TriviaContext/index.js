import React, { useEffect, useState } from "react";
import { getData } from "../Actions/request";

const TriviaContext = React.createContext();

function TriviaProvider(props) {
  const [initialTrivia, setInitialTrivia] = React.useState(false);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [number, setNumber] = useState(0);
  const [requestReload, setRequestReload] = useState(false);
  const [scored, setScored] = useState(0);
  const [resultTrivia, setResulTrivia] = useState([]);

  useEffect(() => {
    getData().then((response) => {
      const { data } = response;
      setResulTrivia([])
      setQuestions(data.results);
      setScored(0)
    });
  }, [requestReload]);

  return (
    <TriviaContext.Provider
      value={{
        questions,
        initialTrivia,
        setInitialTrivia,
        loading,
        scored,
        setScored,
        setNumber,
        number,
        setRequestReload,
        requestReload,
        resultTrivia,
        setResulTrivia,
        setLoading
      }}
    >
      {props.children}
    </TriviaContext.Provider>
  );
}
export { TriviaContext, TriviaProvider };
