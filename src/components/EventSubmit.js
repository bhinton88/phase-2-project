import React from "react";

function EventSubmit({ tripid }) {

  return(
    <div>
      <form id="eventSubmit">
        <label>Trip Description:</label>
        <input
          type="text"
          name="event"
          placeholder="Brief event Description"
        />
        <br/>
        <label>Trip Cost:</label>
        <input 
          type="number"
          name="cost"
          placeholder="Enter trip cost"
        />
        <br/>
        <label>Event Date</label>
        <input 
          type="date"
          name="date"
        />
        <br/>
        <label>Choose an event Category</label>
        <select name="category">
          <option value="Tourism">Tourism</option>
          <option value="Food">Food</option>
          <option value="Transportation">Transportation</option>
          <option value="Lodging">Lodging</option>
        </select>

      </form>
    </div>
  )

}

export default EventSubmit;