import React from 'react';
import { useState } from 'react';
import Project from './components/Project';
import Sidebar from './components/Sidebar';
import LandingPage from './components/LandingPage';
import NewProject from './components/NewProject';

function App() {

  const [ projectState, setProjectState ] = useState({
    selectedProject: undefined,
    projects: []
  })

  const [ currentProject, setCurrentProject ] = useState({});
  const [ projectArray, setProjectArray ] = useState([]);


  console.log(projectState);

  function getProject(e) {
    const project = e.target.innerText;
    const selectedProject = projectState.projects.find(item => item.title === project);

    selectedProject ? setCurrentProject(selectedProject) : setCurrentProject({title: '', description: '', dueDate: ''})
  }

  function handleAddProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProject: null
      }
    })
  }

  function handleNewProject(projectData) {
    setProjectState(prevState => {
      const newProject = {
        ...projectData, 
        id: Math.random()
      }
      return {
        ...prevState,
        projects: [...prevState.projects, newProject]
      }
    })
  }

  function handleCancel() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProject: undefined
      }
    })
  }

  let content;

  if (projectState.selectedProject === null) {
    content = <NewProject  onNewProject={handleNewProject} onCancel={handleCancel} />
  } else if (projectState.selectedProject === undefined) {
    content = <LandingPage onAddProject={handleAddProject}/>
  } else {
    content = <Project currentProject={currentProject}/>
  }

  return (
      <main className='mx-40 h-screen flex flex-row items-end bg-stone-50'>
        <section 
          className="h-[95%] w-[30%] rounded-tr-2xl mr-16 bg-black text-white">
          <Sidebar onAddProject={handleAddProject} selectProject={getProject}/>
        </section>
        <section className='h-[95%] w-[70%]'>
          {content}
        </section>
      </main>
          );
        }
        
        export default App;
        