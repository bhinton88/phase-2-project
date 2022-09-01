import React from "react";
import TripCard from "./TripCard";


function TripList({ tripData }) {

  return(
    <div>
      {tripData.map(value => 
      <TripCard value={value} key={value.id} /> 
      )}
    </div>
  )

}


export default TripList;