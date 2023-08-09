import React from 'react';
import '../styles/Outgoing.css';
import { Card, CardHeader, CardBody, CardFooter, Text } from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';
// this is just testing whether  the JS in the function below is working
const outgoingStudents = [
  { name: 'Abby', status: true, reason: 'Math help', teacher: 'Teacher1' },
  { name: 'Bernard', status: true, reason: 'Science help', teacher: 'Teacher2' },
  { name: 'Cathy', status: false, reason: 'History help', teacher: 'Teacher3' },
  { name: 'Dennis', status: true, reason: 'Extracredit', teacher: 'Teacher4' },
  { name: 'Ethan', status: false, reason: 'Retake test', teacher: 'Teacher1' }
]




export default function Outgoing() {
  return (
    <>

      <Card>
        <CardHeader>Outgoing</CardHeader>
        <CardBody>

          <TableContainer>
            <Table variant='striped' colorScheme='teal'>
              <TableCaption>Outgoing to other teachers</TableCaption>
              <Thead>
                <Tr>
                  <Th>Student</Th>
                  <Th>Status</Th>
                  <Th>Reason</Th>
                  <Th>Teacher Name</Th>
                </Tr>
              </Thead>
              <Tbody>
                {outgoingStudents.map((student, index) => (
                  <Tr key={index}>
                    <Td>{student.name}</Td>


                    <Td>
                      {student.status ? <Button size='sm'
                        height='30px'
                        width='80px'
                        border='1px' colorScheme='green'> IN</Button> : <Button size='sm'
                          height='30px'
                          width='80px'
                          border='1px' colorScheme='red'>OUT</Button>}

                    </Td>
                    <Td>{student.reason}</Td>
                    <Td>{student.teacher}</Td>
                  </Tr>
                ))}
              </Tbody>

            </Table>
          </TableContainer>

        </CardBody>
      </Card>

    </>
  );
}


