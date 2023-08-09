
import React, { useState } from 'react';
import axios from 'axios';
//attempting to use graphQL query in utils.mutations
// import { CREATE_REQUEST } from '../utils/mutations'
// import { useMutation } from '@apollo/client'

export default function Form() {
  const [formState, setFormState] = useState({
    studentName: '',
    requestDate: '',
    requestReason: '',
    teacherIdOrName: 'teacherIdValue', // Replace with the actual teacher ID or name
  });

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form submission from reloading the page

    
//  const [createRequest, {error, data}] = useMutation(CREATE_REQUEST);
    // Sends the form data to the server using Axios
    axios.post('/api/createRequest', formState)
      .then((response) => {
        // Handles the response from the server if needed
        console.log('Form data successfully submitted:', response.data);
        // Performs any necessary actions, such as showing a success message or updating component state.
      })
      .catch((error) => {
        // Handles errors if any
        console.error('Error submitting form data:', error);
        // Performs error handling, such as showing an error message or updating component state.
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
     <div className="card">
      <header className="card-header">
        <p className="card-header-title">Make a Request</p>
        <button className="card-header-icon" aria-label="more options">
          <span className="icon">
            <i className="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
      </header>
      <div className="card-content">
        <div className="content">
          {/* This is where teachers will search for students, this needs JS to search our list of student seeds. */}
          <div className="field">
            <label className="label" htmlFor="studentSearchBar">Search</label>
            <div className="control">
              <input 
              className="input" 
              id="studentSearchBar" 
              type="text" 
              placeholder="Search for a student" 
              onChange={handleChange} />
            </div>
          </div>
          <br />
          {/* Ideally, we'd have only the available dates, but the calendar will do for now. */}
          <div className="field">
            <label className="label" htmlFor="requestDate">Choose a Date:</label>
            <div className="control">
              <input 
              className="input" 
              type="date" 
              id="requestDate" 
              name="requestDate"
              onChange={handleChange} />
            </div>
          </div>
          <br />
          {/* Reason for requesting student, in reality would need a character limit */}
          <div className="field">
            <label className="label" htmlFor="requestReason">Reason</label>
            <div className="control">
              <input 
              className="input" 
              type="text" 
              id="requestReason" 
              name="requestReason" 
              placeholder="Reason"
              onChange={handleChange} />
            </div>
          </div>
          <br />
          <time dateTime="2016-01-01">11:09 PM - 1 Jan 2016</time>
        </div>
      </div>
      <footer className="card-footer">
        <a href="#" className="card-footer-item"></a>
        <button type="submit" className="card-footer-item" onClick={handleSubmit} method="POST">
          Submit
        </button>
        <a href="#" className="card-footer-item"></a>
      </footer>
    </div>
    </form>
  );
}




/////////////////////




// import React from 'react';

// export default function Form() {
//   const handleSubmit = (event) => {
//     event.preventDefault(); // Prevent form submission from reloading the page

//     const formData = new FormData(event.target); // Convert form data to FormData object

//     // Convert FormData object to plain object
//     const requestObject = {};
//     formData.forEach((value, key) => {
//       requestObject[key] = value;
//     });

//     // Get the teacher's ID or name from the hidden input field
//     const teacherIdOrName = 'teacherIdValue'; // Replace with the actual teacher ID or name
//     requestObject.teacherIdOrName = teacherIdOrName;

//     // At this point, requestObject will contain the form data as an object, including the teacher's information
//     console.log('Form data as an object:', requestObject);

//     // You can use the requestObject to handle the form submission within the component
//     // For example, you can send the data to a server, update state, or perform other actions
//   };

//   return (
//     <div className="card">
//       <header className="card-header">
//         <p className="card-header-title">Make a Request</p>
//         <button className="card-header-icon" aria-label="more options">
//           <span className="icon">
//             <i className="fas fa-angle-down" aria-hidden="true"></i>
//           </span>
//         </button>
//       </header>
//       <div className="card-content">
//         <div className="content">
//           {/* This is where teachers will search for students, this needs JS to search our list of student seeds. */}
//           <div className="field">
//             <label className="label" htmlFor="studentSearchBar">Search</label>
//             <div className="control">
//               <input className="input" id="studentSearchBar" type="text" placeholder="Search for a student" />
//             </div>
//           </div>
//           <br />
//           {/* Ideally, we'd have only the available dates, but the calendar will do for now. */}
//           <div className="field">
//             <label className="label" htmlFor="requestDate">Choose a Date:</label>
//             <div className="control">
//               <input className="input" type="date" id="requestDate" name="requestDate" />
//             </div>
//           </div>
//           <br />
//           {/* Reason for requesting student, in reality would need a character limit */}
//           <div className="field">
//             <label className="label" htmlFor="requestReason">Reason</label>
//             <div className="control">
//               <input className="input" type="text" id="requestReason" name="requestReason" placeholder="Reason" />
//             </div>
//           </div>
//           <br />
//           <time dateTime="2016-01-01">11:09 PM - 1 Jan 2016</time>
//         </div>
//       </div>
//       <footer className="card-footer">
//         <a href="#" className="card-footer-item"></a>
//         <button type="submit" className="card-footer-item" onClick={handleSubmit}>
//           Submit
//         </button>
//         <a href="#" className="card-footer-item"></a>
//       </footer>
//     </div>
//   );
// }


//////////////////////

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
// <button className="button">Button</button>


// </form>
//     </div>
//   )
// }