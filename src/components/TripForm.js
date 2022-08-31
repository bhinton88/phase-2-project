import React, { useEffect, useState } from "react";
import Select from "react-select";

function TripForm() {
  const [countriesData, setCountriesData] = useState([]) // for our select element
  const [formData, setFormData] = useState({
    tripName: "",
    countries:[],
    start_date: "",
    end_date: ""
  })

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
    .then(response => response.json())
    .then(data => {
      let countryArray = data.sort((a,b)=>a.name.common.localeCompare(b.name.common)).map(value => {
        return {value: value.name.common, label: value.name.common}
      })
      setCountriesData(countryArray)
    })
  }, [])

  function handleAddingCountries(selectedOptions) {
    const updatedArray = selectedOptions.map(value => value.value)
    setFormData({
      ...formData,
      countries: [...updatedArray]
    })
  }

  function handleChange(event){
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    fetch("http://localhost:3000/trips",{
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => console.log(data))

    // will need to add this to our trip list page once we have that component up and running

    event.target.reset()
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
      >
        <label>
          Trip Name:
          <input 
            type="text"
            name="tripName"
            onChange={handleChange}
          />
        </label>
        <label>
          Countries:
          <Select 
            isMulti
            name="countries"
            options={countriesData}
            onChange={handleAddingCountries}
          />
        </label>
        <label>
          Start date:
          <input 
            type="date"
            id="start"
            name="start_date"
            onChange={handleChange}
          />
        </label>
        <label>
          End date:
          <input
            type="date"
            id="end"
            name="end_date"
            onChange={handleChange}
          />
        </label>
        <button type="submit">Add New Trip</button>
      </form>
    </div>
  )
}

export default TripForm;