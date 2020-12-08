import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Header } from "./components/Header";
import Artist from "./pages/Artist";
import FindYourTrack from "./pages/FindYourTrack";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <div className="app__container">
          <Switch>
            <Route exact component={Home} path="/" />
            <Route exact component={FindYourTrack} path="/find-track" />
            <Route exact component={Artist} path="/artist/:name" />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
