import React from 'react';
// import '../styles/Incoming.css';
import { Card, CardHeader, CardBody, CardFooter, Text, Heading } from '@chakra-ui/react';
import { Button, ButtonGroup, Stack, StackDivider } from '@chakra-ui/react';
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
import { Divider } from '@chakra-ui/react';
// this is just testing whether  the JS in the function below is working
const incomingStudents = [
  { name: 'Shelly', status: false, reason: 'Math help', teacher: 'Snape' },
  { name: 'Marcus', status: true, reason: 'Science help', teacher: 'McGonagall' },
  { name: 'Michael', status: true, reason: 'History help', teacher: 'Dumbledore' },
  { name: 'Russell', status: false, reason: 'Extracredit', teacher: 'Johnson' },
  { name: 'Jenny', status: true, reason: 'Retake test', teacher: 'Childers' }
]



export default function Incoming() {
  return (
    <>

      <Card>
        <CardHeader> <Heading size='md'>Incoming</Heading></CardHeader>
        <Divider />
        <CardBody>
          <Stack divider={<StackDivider />} spacing='4'>
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
                  {incomingStudents.map((student, index) => (
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
          </Stack>
        </CardBody>
      </Card>


    </>
  );
}


