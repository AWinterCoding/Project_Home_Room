import React from 'react';
import { useQuery } from '@apollo/client';
import { gql } from 'graphql-tag';
import {
  Button,
  Table,
  Thead,
  Tbody, 
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';
const GET_STUDENTS = gql`
  query GetStudents {
    students {
      studentID
      studentName
      onTheWay
      arrived
      requested
      reason
      teacherName
    }
  }
`;

const StudentList = () => {
  const { loading, error, data } = useQuery(GET_STUDENTS);
 

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
          <TableContainer>
              <Table variant='striped' colorScheme='teal'>
                <TableCaption>Incoming for this teacher</TableCaption>
                <Thead>
                  <Tr>
                    <Th fontSize={15}>Student</Th>
                    <Th fontSize={15}>Status</Th>
                    <Th fontSize={15}>Reason</Th>
                    <Th fontSize={15}>Teacher Name</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data.students.map((student, index) => (
                    <Tr key={index}>
                      <Td>{student.studentName}</Td>


                      <Td>
                        {student.onTheWay ? <Button size='sm'
                          height='30px'
                          width='80px'
                          border='1px' colorScheme='green'> IN</Button> : <Button size='sm'
                            height='30px'
                            width='80px'
                            border='1px' colorScheme='red'>OUT</Button>}

                      </Td>
                      <Td>{student.reason}</Td>
                      <Td>{student.teacherName}</Td>
                    </Tr>
                  ))}
                </Tbody>

              </Table>
            </TableContainer>
    
    
    </>
  );
};

export default StudentList;
