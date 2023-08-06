import React from 'react';
import '../styles/Outgoing.css';

// this is just testing whether  the JS in the function below is working
const outgoingStudents = [
  { name: 'Abby', status: 'OUT/IN', reason: 'math help', teacher: 'Teacher1' },
  { name: 'Bernard', status: 'OUT/IN', reason: 'science help', teacher: 'Teacher2' },
  { name: 'Cathy', status: 'OUT/IN', reason: 'history help', teacher: 'Teacher3' },
  { name: 'Dennis', status: 'OUT/IN', reason: 'extracredit', teacher: 'Teacher4'},
  {name: 'Ethan', status: 'OUT/IN', reason: 'retake test', teacher: 'Teacher1'}
]




export default function Outgoing() {
  return (
    <>
      <div className="Outgoing panel">
        <h3 className="Outgoing title is-3">Outgoing</h3>
        <table className="Outgoing table is-narrow is-hoverable">
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
         {/* So this is where we are appending students into the incoming table */}
          {/* This needs to be changed to pull in actual students requested for today's date */}
          {/* This can be done once we have some student seeds linked to teachers */}
            {outgoingStudents.map((student, index) => (
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


// export default function Outgoing() {
//   return (
//     <>
//       <div className="Outgoing">
//         <h3 className="Outgoing">Outgoing</h3>
//         <table className="Outgoing">
//           <thead>
//             <tr>
//               <th>Student</th>
//               <th>Status</th>
//               <th>Reason</th>
//               <th>Teacher</th>
//             </tr>
//           </thead>
//           <tbody>
//         {/* React allows and encourages you to write JSX in the components themselves  */}
//          {/* So this is where we are appending students into the incoming table */}
//           {/* This needs to be changed to pull in actual students requested for today's date */}
//           {/* This can be done once we have some student seeds linked to teachers */}
//             {outgoingStudents.map((student, index) => (
//               <tr key={index}>
//                 <td>{student.name}</td>
//                 <td>{student.status}</td>
//                 <td>{student.reason}</td>
//                 <td>{student.teacher}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// }

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
