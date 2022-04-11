import './App.css'
import { useState } from 'react'
import axios from "axios"

const API_URL = "api"

const initialFormData = {
  name: 'Max Mustermann',
  email: 'Max_Mustermann@gmx.de',
  hours: 2,
  date: 1649687861,
  court: '1',
  available_Court: true,
  favourite_Court: false,
  notification_mail: true,
  message: 'Bitte die/den/die Spielpartner*in/nen eintragen.',
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
          email{' '}
          <input
            type="string"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Date{' '}
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          DateTime{' '}
          <input
            type="time"
            name="time"
            value={formData.date}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Court{' '}
          <select value={formData.color} onChange={handleChange} name="color">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </label>
        <fieldset>
          <legend>Options</legend>
          <label>
            available Court{' '}
            <input
              type="checkbox"
              name="available Court"
              checked={formData.available_Court}
              onChange={handleCheckboxChange}
            />
          </label>
          <label>
            favourite Court {' '}
            <input
              type="checkbox"
              name="bites"
              checked={formData.favourite_Court}
              onChange={handleCheckboxChange}
            />
          </label>
          <label>
            notification mail{' '}
            <input
              type="checkbox"
              name="any Court"
              checked={formData.notification_mail}
              onChange={handleCheckboxChange}
            />
          </label>
        </fieldset>
        <br />
        <label>
          Partner
          <textarea
            value={formData.message}
            onChange={handleChange}
            name="Partner"
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
