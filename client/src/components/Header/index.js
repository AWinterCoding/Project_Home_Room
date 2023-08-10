import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="panel is-primary">
      <div className="container flex-column justify-space-between-lg justify-center align-center text-center panel-heading">
        <Link className="text-dark" to="/">
          <h1 className="m-0 has-text-centered" style={{ fontSize: '3rem' }}>
            Welcome to Homeroom
          </h1>
        </Link>
        <p className="m-0 has-text-centered" style={{ fontSize: '1.75rem', fontWeight: '700' }}>
        Schedule a Homeroom
        </p>
        <div className="has-text-centered">
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-primary m-2" to="/me">
                Profile
              </Link>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-primary m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
