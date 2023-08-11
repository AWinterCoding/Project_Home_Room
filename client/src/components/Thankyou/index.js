import React from 'react';
import { Card, CardHeader, CardBody, Heading, Stack, StackDivider, Divider } from '@chakra-ui/react';

const Thankyou = () => {

  return (
    <Card>
    <CardHeader> <Heading size='md'>Thank You</Heading></CardHeader>
    <Divider />
    <CardBody>
      <Stack divider={<StackDivider />} spacing='4'>
      <Heading> Your request has been successfully scheduled in Homeroom</Heading>
      </Stack>
    </CardBody>
  </Card>
   
  );
};

export default Thankyou;
