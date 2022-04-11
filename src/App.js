import './App.css'
import { useState } from 'react'
import axios from "axios"

const API_URL = "api"

const initialFormData = {
  name: 'Gwen Doe',
  hours: 2,
  fluffiness: 50,
  color: 'red',
  spits: true,
  bites: false,
  extraMean: true,
  message: 'This is a very important message',
}

function App() {
  const [formData, setFormData] = useState(initialFormData)

  const handleChange = event => {
    const value = event.target.value
    const name = event.target.name
    const newFormData = { ...formData, [name]: value }
    setFormData(newFormData)
  }

  const handleCheckboxChange = event => {
    const checked = event.target.checked
    const name = event.target.name
    const newFormData = { ...formData, [name]: checked }
    setFormData(newFormData)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    axios.post(API_URL,formData)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name{' '}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Hours{' '}
          <input
            type="number"
            name="hours"
            value={formData.hours}
            onChange={handleChange}
            min="2"
            max="12"
          />
        </label>
        <br />
        <label>
          Fluffiness{' '}
          <input
            type="range"
            name="fluffiness"
            value={formData.fluffiness}
            onChange={handleChange}
            min="1"
            max="100"
          />
        </label>
        <br />
        <label>
          Color{' '}
          <select value={formData.color} onChange={handleChange} name="color">
            <option value="white">White</option>
            <option value="brown">Brown</option>
            <option value="red">Rot</option>
            <option value="black">Schwarz</option>
          </select>
        </label>
        <fieldset>
          <legend>Extras</legend>
          <label>
            spits{' '}
            <input
              type="checkbox"
              name="spits"
              checked={formData.spits}
              onChange={handleCheckboxChange}
            />
          </label>
          <label>
            bites{' '}
            <input
              type="checkbox"
              name="bites"
              checked={formData.bites}
              onChange={handleCheckboxChange}
            />
          </label>
          <label>
            extra eman{' '}
            <input
              type="checkbox"
              name="extraMean"
              checked={formData.extraMean}
              onChange={handleCheckboxChange}
            />
          </label>
        </fieldset>
        <br />
        <label>
          Message
          <textarea
            value={formData.message}
            onChange={handleChange}
            name="message"
          />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default App
