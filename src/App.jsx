import React from 'react';
import { useState } from 'react';
import Project from './components/Project';
import Sidebar from './components/Sidebar';
import LandingPage from './components/LandingPage';

function App() {

  const [ currentProject, setCurrentProject ] = useState(null);
  const projectArray = [];

  return (
    <>
      <div className='mx-40 h-screen flex flex-row items-end bg-stone-50'>
        <Sidebar projectArray={projectArray}/>
        {
        !currentProject ? 
        <LandingPage /> :
        <Project />
        }
      </div>
    </>
  );
}

export default App;
