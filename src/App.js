import React from 'react';
import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from "../src/pages/home"
import Contact from "../src/pages/contact"
import Portfolio from "../src/pages/portfolio"
import "bootswatch/dist/lux/bootstrap.min.css";
import Nav from "../src/components/Nav"
import Footer from "../src/components/Footer"

function App() {
  return (
    <BrowserRouter>
      <Nav />

      <Switch>
        <Route exact path={["/reactportfolio", "reactportfolio/home"]}>
          <Home />
        </Route>
        <Route exact path={["/reactportfolio/portfolio"]}>
          <Portfolio />
        </Route>
        <Route exact path={["/reactportfolio/contact"]}>
          <Contact />
        </Route>

      </Switch>
      <Footer />

    </BrowserRouter>
  );
}

export default App;
