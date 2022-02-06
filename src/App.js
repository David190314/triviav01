import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { TriviaProvider } from "./TriviaContext/index.js";
import { HomeApp } from "./Home/Home";
import { PrivateRoute } from "./Routes/PrivateRouter";

function App() {
  // const [initialTrivia, setInitialTrivia] = React.useState(false);
  return (
    <TriviaProvider>
      <BrowserRouter>
        <Route
          path="/"
          exact={true}
          component={HomeApp}
          // render={() => <HomeApp  />}
        />
        <PrivateRoute />
      </BrowserRouter>
    </TriviaProvider>
  );
}

export { App };
