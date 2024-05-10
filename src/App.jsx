import React from 'react';
import { useState } from 'react';
import Project from './components/Project';
import Sidebar from './components/Sidebar';
import LandingPage from './components/LandingPage';
import NewProject from './components/NewProject';

function App() {

  const [ currentProject, setCurrentProject ] = useState(null);
  const [ projectArray, setProjectArray ] = useState([
    {id: 1, title: "Project 1"}, {id: 2, title: "Project 2"}
  ]);

  function getProject(e) {
    console.log(e);
    const project = e.target.innerText;
    const selectedProject = projectArray.find(item => item.title === project);

    
    selectedProject ? setCurrentProject(selectedProject) : setCurrentProject({})
    // setCurrentProject(selectedProject)
    console.log(projectArray)
    console.log(project);
    console.log(selectedProject);
  }
  
  function deleteOpenedProject(){
    setProjectArray(prevArray => {
      return prevArray.filter(item => item.title !== currentProject.title)
    })
    setCurrentProject(null)
  }

  return (
    <>
      <main className='mx-40 h-screen flex flex-row items-end bg-stone-50'>
        <section 
          className="h-[95%] w-[30%] rounded-tr-2xl mr-16 bg-black text-white">
          <Sidebar projectArray={projectArray} selectProject={getProject}/>
        </section>
        <section className='h-[95%] w-[70%]'>
          {
            !currentProject ? 
              <LandingPage createNewProject={getProject}/>  
              :
              currentProject.title ? 
                <Project currentProject={currentProject} onDelete={deleteOpenedProject}/>
              :
                <NewProject onCancel={deleteOpenedProject}/>
          }
        </section>
      </main>
    </>
  );
}

export default App;
