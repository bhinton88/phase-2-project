import React from "react";


<<<<<<< HEAD
function TripList({ tripData, eventsData }) {

  return(
    <div>
      {tripData.map(value => 
      <TripCard 
        trip={value} 
        key={value.id} 
        eventsData={eventsData}
      /> 
      )}
    </div>
  )
=======
function TripList() {

>>>>>>> parent of f61ab75 (major compontent updates)

}


export default TripList;