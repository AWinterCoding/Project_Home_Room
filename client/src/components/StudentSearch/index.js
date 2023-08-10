import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { gql } from 'graphql-tag';
import { FormErrorMessage, HStack } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { GridItem, FormLabel, Input, IconButton, Spinner } from '@chakra-ui/react'
const SEARCH_STUDENTS = gql`
  query SearchStudents($query: String!) {
    searchStudents(query: $query) {
      studentID
      studentName
    }
  }
`;

const StudentSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchStudents, { loading, error, data }] = useLazyQuery(SEARCH_STUDENTS);

  const handleSearch = () => {
    searchStudents({ variables: { query: searchTerm } });
  };

  return (
    <>
      <GridItem colSpan={1}>
        <FormLabel className='mt-4'>Search: </FormLabel>
        <HStack><Input type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} placeholder='Search Student Name' />
          <IconButton
            colorScheme='blue'
            aria-label='Search Students'
            onClick={handleSearch}
            icon={<SearchIcon />}
          /></HStack>
      </GridItem>
      <GridItem>
        {loading && <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />}
        {error && <FormErrorMessage> {error.message}</FormErrorMessage>}
        {data && (
          <ul>
            {data.searchStudents.map((student) => (
              <li key={student.studentID}>{student.studentName}</li>
            ))}
          </ul>
        )}
      </GridItem>

    </>

  );
};

export default StudentSearch;
