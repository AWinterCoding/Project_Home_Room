import React from 'react'



// export default function Form() {
//   return (
//     <div>
//       <form>
//         {/* This is where teachers will search for students, this needs JS to search our list of student seeds. */}
//         <label htmlFor="searchInput">Search:</label>
//         {/* I would like it to filter through and display names as they type, that might be too hard for us. */}
//   <input type="search" id="searchInput" name="searchInput" placeholder="Search here..."></input>
 
// <br></br>
// {/* Ideally we'd have only the available dates but the calendar will do for now. */}
//       <label htmlFor="dateInput">Choose a Date:</label>
//       <input type="date" id="dateInput" name="dateInput"/>
// <br></br>
// {/* reason for requesting student, in reality would need a character limit */}
//        <label htmlFor="searchInput">reason</label>
//   <input type="search" id="searchInput" name="searchInput" placeholder="reason"></input>
// <br></br>
// <button type="submit">Submit</button>
// <button class="button">Button</button>


// </form>
//     </div>
//   )
// }

export default function Form() {
    return (
      <div class="card">
  <header class="card-header">
    <p class="card-header-title">
      Make a Request
    </p>
    <button class="card-header-icon" aria-label="more options">
      <span class="icon">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </button>
  </header>
  <div class="card-content">
    <div class="content">
    <form>
        {/* This is where teachers will search for students, this needs JS to search our list of student seeds. */}
        <div class="field">
  <label class="label" id='studentSearchBarLabel'>Search</label>
  <div class="control">
    <input class="input" id="studentSearchBar" type="text" placeholder="Search for a student"/>
  </div>

</div>
<br></br>
{/* Ideally we'd have only the available dates but the calendar will do for now. */}
      <label htmlFor="dateInput">Choose a Date:</label>
      <input type="date" id="dateInput" name="dateInput"/>
<br></br>
{/* reason for requesting student, in reality would need a character limit */}
       <label htmlFor="searchInput">reason</label>
  <input type="search" id="searchInput" name="searchInput" placeholder="reason"></input>
      <br></br>
      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
      </form>
    </div>
  </div>
  <footer class="card-footer">
    <a href="#" class="card-footer-item"></a>
    <a href="#" class="card-footer-item">Submit</a>
    <a href="#" class="card-footer-item"></a>
  </footer>
</div>
    )
  }



