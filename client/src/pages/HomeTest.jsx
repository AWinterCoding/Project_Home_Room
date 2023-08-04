import React from 'react';
// Here I will import all the components that make up the home page:
import Nav from '../components/Nav'
import Incoming from '../components/Incoming'
import Outgoing from '../components/Outgoing'
import Announcements from '../components/Announcements'
import Form from '../components/Form'

// import ProfileList from '../components/ProfileList';

// import { QUERY_PROFILES } from '../utils/queries';

const Home = () => {
 
    // I've commented out what was on the original...
    // const { loading, data } = useQuery(QUERY_PROFILES);
    // const profiles = data?.profiles || [];
  
    return (
        // These are wrapper tags required by React if you want to render many HTML elements in a row
        <>

    {/* This is rendering the navbar */}
        <Nav/>
    
    {/* This is the main div */}
    <div className="main">
    
    {/* This is the top-half div containing the Incoming / Form */}

      <div className="top">
        <div className="table"><Incoming/></div>
        <div className="formDiv"><Form/></div>
      </div>
    
{/* This is the bottom-half div containing the Outgoing / Announcements */}

      <div className="bottom">
       <div className="table"><Outgoing/></div>
       <div className="announcementsDiv"><Announcements/></div>
      </div>
    
    {/* End of main div and closing required empty tags */}
    </div>
        </>
    
    );
  };
  
  export default Home;
  