import React from 'react';
import { Card, CardHeader, CardBody, Heading } from '@chakra-ui/react';
import StudentList from './OutgoingStudentList';
import { Stack, StackDivider  } from '@chakra-ui/react';

import { Divider } from '@chakra-ui/react';
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
      <CardHeader> <Heading size='md'>Outgoing</Heading></CardHeader>
        <Divider />
        <CardBody>
        <Stack divider={<StackDivider />} spacing='4'>
          <StudentList/>
</Stack>
        </CardBody>
      </Card>

    </>
  );
}


