import React from 'react';
// Here I will import all the components that make up the home page:
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Divider } from '@chakra-ui/react'
import Incoming from '../components/Incoming'
import Outgoing from '../components/Outgoing'
import Announcements from '../components/Announcements'
import Form from '../components/Form'
import { ArrowRightIcon, ArrowLeftIcon, CalendarIcon, BellIcon } from '@chakra-ui/icons'
import Auth from '../utils/auth';


const Home = () => {


  return (



    <>
      {Auth.loggedIn() ? (

        <div className="main">
          <Tabs variant='soft-rounded' colorScheme='green'>
            <TabList>
              <Tab><ArrowRightIcon w={5} h={5} color="green.500" /> <span className='ml-2'>Incoming</span></Tab>
              <Tab><ArrowLeftIcon w={5} h={5} color="orange.500" /><span className='ml-2'>Outgoing</span></Tab>
              <Tab><CalendarIcon w={5} h={5} color="blue.500" /><span className='ml-2'>Schedule HomeRoom</span></Tab>
              <Tab><BellIcon w={6} h={6} color="red.500" /><span className='ml-2'>Announcements</span></Tab>
            </TabList>
            <TabPanels>

              <TabPanel>
                <p><Incoming /></p>
              </TabPanel>

              <TabPanel>
                <p><Outgoing /></p>
              </TabPanel>

              <TabPanel>
                <p><Form /></p>
              </TabPanel>

              <TabPanel>
                <p><Announcements /></p>
              </TabPanel>

            </TabPanels>
          </Tabs>
        </div>
      ) : (<div>You need to be logged in</div>)}
    </>

  );
};

export default Home;
