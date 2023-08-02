import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_SUBJECT } from '../../utils/mutations';

import Auth from '../../utils/auth';

const SubjectForm = ({ profileId }) => {
  const [subject, setSubject] = useState('');

  const [addSubject, { error }] = useMutation(ADD_SUBJECT);

  

  return (
    <div>
     
      {Auth.loggedIn() ? (
        <h4>Logged In</h4>
      ) : (
        <p>
          You need to be logged in {' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default SubjectForm;
