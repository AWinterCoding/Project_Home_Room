import React from 'react';
import '../styles/Incoming.css';

// this is just testing whether  the JS in the function below is working
const incomingStudents = [
  { name: 'Shelly', status: 'OUT/IN', reason: 'math help', teacher: 'Snape' },
  { name: 'Marcus', status: 'OUT/IN', reason: 'science help', teacher: 'McGonagall' },
  { name: 'Michael', status: 'OUT/IN', reason: 'history help', teacher: 'Dumbledore' },
  { name: 'Russell', status: 'OUT/IN', reason: 'extracredit', teacher: 'Johnson'},
  {name: 'Jenny', status: 'OUT/IN', reason: 'retake test', teacher: 'Childers'}
]

export default function Incoming() {
  return (
    <>
      <div className="Incoming">
        <h3 className="Incoming">Incoming</h3>
        <table className="Incoming">
          <thead>
            <tr>
              <th>Student</th>
              <th>Status</th>
              <th>Reason</th>
              <th>Teacher</th>
            </tr>
          </thead>
          <tbody>
             {/* React allows and encourages you to write JSX in the components themselves  */}
//             {/* So this is where we are appending students into the incoming table */}
//             {/* This needs to be changed to pull in actual students requested for today's date */}
//             {/* This can be done once we have some student seeds linked to teachers */}
            {incomingStudents.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.status}</td>
                <td>{student.reason}</td>
                <td>{student.teacher}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

// export default function Incoming() {
//   return (
//     <>
//       <div className="Incoming">
//         <h3 className="Incoming">Incoming</h3>
//         <table className="Incoming">
//           <thead>
//             <tr>
//               <th>Student</th>
//               <th>Status</th>
//               <th>Reason</th>
//               <th>Teacher</th>
//             </tr>
//           </thead>
//           <tbody>
//             {/* React allows and encourages you to write JSX in the components themselves  */}
//             {/* So this is where we are appending students into the incoming table */}
//             {/* This needs to be changed to pull in actual students requested for today's date */}
//             {/* This can be done once we have some student seeds linked to teachers */}
//             {incomingStudents.map((student, index) => (
//               <tr key={index}>
//                 <td>{student}</td>
//                 <td></td>
//                 <td>math help</td>
//                 <td>Snape</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// }



// import React from 'react'
// import '../styles/Incoming.css'
// const incomingStudents = [Shelly, Marcus, Michael, Russell, Jenny, Jack];
// export default function Incoming() {
//   return (
//     <>
//     <div className="Incoming">

//     <h3 className="Incoming">Incoming</h3>

// <table className="Incoming">
//   <thead>
//     <tr>
//     <th>Student</th>
//       <th>Status</th>
//       <th>Reason</th>
//       <th>Teacher</th>
//     </tr>
      
//   </thead>
//   <tbody>
//       <tr>
//           <td>Placeholder</td> 
//           <td>OUT/IN</td> 
//           <td>math help</td> 
//           <td>Snape</td> 
//       </tr>
//   </tbody>
// </table>




//     </div>
     
    
//     </>
    
//   )
// }
