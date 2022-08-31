import React from "react";
import TripForm from "./TripForm"
import TripList from "./TripList";

function TripsPage() {
  return (
    <div>
      Check out my trips!
      <TripForm />
      <TripList /> 
    </div>
  )
}

export default TripsPage;