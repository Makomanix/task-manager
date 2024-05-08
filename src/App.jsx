import React from 'react';
import { useState } from 'react';
import Project from './components/Project';
import Sidebar from './components/Sidebar';
import LandingPage from './components/LandingPage';
import CreateProject from './components/CreateProject';

function App() {

  const [ currentProject, setCurrentProject ] = useState(null);
  const projectArray = [];

  return (
    <>
      <main className='mx-40 h-screen flex flex-row items-end bg-stone-50'>
        <section 
          className="h-[95%] w-[30%] rounded-tr-2xl mr-16 bg-black text-white">
          <Sidebar projectArray={projectArray}/>
        </section>
        <section className='h-[95%] w-[70%]'>
          {
          !currentProject ? 
          <Project />
          // <CreateProject />
          :
          <LandingPage />  
          }
        </section>
      </main>
    </>
  );
}

export default App;
