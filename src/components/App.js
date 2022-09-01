import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import TripPage from "./TripPage";

function App() {

  return (
    <div>
      <NavBar />
      <Switch>
        <Route  path="/" exact>
          <Home />
        </Route>
        <Route path="/trips">
           <TripPage />
        </Route>
        <Route path="/budget">
          {/* enter budget component here */}
        </Route>
      </Switch>
    </div>
  )

}

export default App; 


// - App
// --NavBar
// --Home
// --TripsPage
// ---New Trip Form
// ---Trip List
// ----Trip card
// -----Events page(unique to each individual trip)
// ------Event list 
// ------submit event
// ---budget page 
// ----budget list (each card with trip name on it and button to)
// ----budget pie graph



// want to be able to click on a trip and it take you to events related to that trip

// want to click on the budget tab and it takes you to a page where each event is 
// listed under each category