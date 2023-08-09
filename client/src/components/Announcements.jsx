import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Text } from '@chakra-ui/react';
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'
export default function Announcements() {
  return (

    <Card>
      <CardBody>
        <Alert status='error'>
          <AlertIcon />
          <AlertTitle>Last date to schedule homeroom is tomorrow</AlertTitle>
          <AlertDescription>Please request your student in Homeroom</AlertDescription>
        </Alert>
      </CardBody>
    </Card>
  );
}
