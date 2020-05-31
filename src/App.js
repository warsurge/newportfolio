import React from 'react';
import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Index from "../src/pages/index"
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
        <Route exact path={["/newportfolio", "newportfolio/index"]}>
          <Index />
        </Route>
        <Route exact path={["/newportfolio/portfolio"]}>
          <Portfolio />
        </Route>
        <Route exact path={["/newportfolio/contact"]}>
          <Contact />
        </Route>

      </Switch>
      <Footer />

    </BrowserRouter>
  );
}

export default App;
