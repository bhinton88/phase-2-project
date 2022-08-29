import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";

function App() {


  return (
    <div>
      <NavBar />
      <Switch>
      <Route path="/">
          <Home />
        </Route>
        <Route path="/trips">
          {/* enter our trips component here */}
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
// --Events
// ---submit event
// ---budget
// ----budget list
// ----budget pie graph



// want to be able to click on a trip and it take you to events related to that trip

// want to click on the budget tab and it takes you to a page where each event is 
// listed under each category