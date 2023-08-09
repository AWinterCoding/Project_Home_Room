
import React, { useState } from 'react';
import axios from 'axios';
import { Card, CardHeader, CardBody, CardFooter, Text, Input, Button, Center } from '@chakra-ui/react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react';
export default function Form() {
  const [formData, setFormData] = useState({
    studentName: '',
    requestDate: '',
    requestReason: '',
    teacherIdOrName: 'teacherIdValue', // Replace with the actual teacher ID or name
  });

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form submission from reloading the page

    // Sends the form data to the server using Axios
    axios.post('/api/createRequest', formData)
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
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const [input, setInput] = useState('')

  const handleInputChange = (e) => setInput(e.target.value)

  const isError = input === ''
  return (
    <>
      <Card>
        <CardHeader>Schedule a HomeRoom</CardHeader>
        <CardBody>
          <FormControl isInvalid={isError} onSubmit={handleSubmit}>
            <FormLabel className='mt-4'>Search</FormLabel>
            <Input placeholder='Search Student Name' />

            <FormLabel className='mt-4'>Choose a Date & Time</FormLabel>
            <input className="input" type="datetime-local" id="requestDate" name="requestDate" />
            <FormLabel className='mt-4'>Reason</FormLabel>
            <Input placeholder='Any Reason e.g: Cannot Make it' />
            <div className='mt-4'>
              <FormLabel className='mt-4'>Selected Date</FormLabel>
              <time dateTime="2023-08-09">11:09 PM - 1 Jan 2016</time>
            </div>
          </FormControl>

          <Center>
            <Button
              loadingText='Submitting'
              colorScheme='teal'
              variant='outline'
              onClick={handleSubmit} method="POST"
            >
              Submit
            </Button>
            </Center>
        </CardBody>
      </Card>


    </>
  );
}


