import React from 'react';
import { useMutation } from '@apollo/client';


import { QUERY_ME } from '../../utils/queries';

const SubjectList = ({ subject, isLoggedInUser = false }) => {
  

  if (!subject.length) {
    return <h3>No Skills Yet</h3>;
  }

  return (
   <h4>List of subjects here</h4>
  );
};

export default SubjectList;
