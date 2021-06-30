import React, { useState } from "react"
import * as styles from "../styles/home.module.css"

export default function Form() {
  const [number, setNumber] = useState("")

  const handleChange = event => {
    setNumber(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    console.log(number)
    setNumber("")
  }

  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="ref">Enter your reference number</label>
        <input
          value={number}
          type="text"
          placeholder=" e.g. HBFGEBH78678648"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
