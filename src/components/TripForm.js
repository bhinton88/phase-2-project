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
    <div id="tripsubmit">
      <div id="form_input_container">
        <Form
        onSubmit={handleSubmit}
        >
          <Form.Group widths='equal'>
            <Form.Input 
              fluid 
              name='tripName' 
              value={formData.tripName}
              label="Trip Description"
              placeholder='Trip Description'
              onChange={handleChange} 
            />
            <Form.Input 
              fluid
              type="date"
              name="start_date"
              value={formData.start_date}
              label='Trip Start' 
              placeholder='Trip Start Date'
              onChange={handleChange}  
            />
            <Form.Input 
              fluid 
              type="date"
              name="end_date"
              value={formData.end_date}
              label='Trip End' 
              placeholder='Trip End Date'
              onChange={handleChange}  
            />
          </Form.Group>
          <Form.Group>
            <Dropdown 
              placeholder='Select counties you plan to visit' 
              multiple 
              fluid
              search
              selection
              value={formData.countries}
              options={countriesData}
              onChange={handleCountryAdd}
            />
          </Form.Group>
          <Button type="submit">Add Trip</Button>
        </Form> 
      </div>
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
>>>>>>> parent of f61ab75 (major compontent updates)
    </div>
  )
}

export default TripForm;