import React from 'react';
// import '../styles/Incoming.css';
import { Card, CardHeader, CardBody, Heading } from '@chakra-ui/react';
import { Stack, StackDivider } from '@chakra-ui/react';
import { Divider } from '@chakra-ui/react';
import StudentList from './IncomingStudentList';

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
            <StudentList />
          </Stack>
        </CardBody>
      </Card>


    </>
  );
}


