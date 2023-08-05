import React from 'react'



export default function Form() {
  return (
    <div>
      <form>
        {/* This is where teachers will search for students, this needs JS to search our list of student seeds. */}
        <label htmlFor="searchInput">Search:</label>
        {/* I would like it to filter through and display names as they type, that might be too hard for us. */}
  <input type="search" id="searchInput" name="searchInput" placeholder="Search here..."></input>
 
<br></br>
{/* Ideally we'd have only the available dates but the calendar will do for now. */}
      <label htmlFor="dateInput">Choose a Date:</label>
      <input type="date" id="dateInput" name="dateInput"/>
<br></br>
{/* reason for requesting student, in reality would need a character limit */}
       <label htmlFor="searchInput">reason</label>
  <input type="search" id="searchInput" name="searchInput" placeholder="reason"></input>
<br></br>
<button type="submit">Submit</button>


</form>
    </div>
  )
}
