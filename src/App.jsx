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
  
  let content;
  let currentProject;

  function handleStartNewProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProject: null
      }
    })
  }

  function handleSelectedProject(id) {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProject: id
      }
    })
  }

  function handleAddProject(projectData) {
    setProjectState(prevState => {
      const newProject = {
        ...projectData, 
        id: Math.random()
      }
      return {
        ...prevState,
        selectedProject: newProject.id,
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

  function handleAddTask(task) {
    const updatedProject = {
      ...currentProject,
      tasks: [ ...currentProject.tasks, task]
    }

    setProjectState(prevState => {
      const filteredProjects =  prevState.projects.filter(project => project.id !== updatedProject.id)
      return {
        ...prevState,
        projects: [...filteredProjects, updatedProject]
      }
    })
  }

function handleUpdateProject(bool, ...args) {
  for (let arg of args) {
    console.log(arg);
  }
}

  function handleDeleteProject(id) {
    setProjectState(prevState => {
      const filteredProjects = prevState.projects.filter(project => project.id !== id)
      return {
        ...prevState,
        selectedProject: undefined,
        projects: filteredProjects
      }
    })
  }


  if (projectState.selectedProject === null) {
    content = <NewProject  onAddProject={handleAddProject} onCancel={handleCancel} />
  } else if (projectState.selectedProject === undefined) {
    content = <LandingPage onStartNewProject={handleStartNewProject}/>
  } else {
    currentProject = projectState.projects.find(project => project.id === projectState.selectedProject)
    content = <Project currentProject={currentProject} onDeleteProject={handleDeleteProject} 
    onUpdateProject={handleUpdateProject} handleAddTask={handleAddTask}/>
  }

  return (
      <main className='mx-40 h-screen flex flex-row items-end bg-stone-50'>
        <section 
          className="h-[95%] w-[30%] rounded-tr-2xl mr-16 bg-black text-white">
          <Sidebar projectState={projectState} onStartNewProject={handleStartNewProject} onSelectProject={handleSelectedProject} />
        </section>
        <section className='h-[95%] w-[70%]'>
          {content}
        </section>
      </main>
          );
        }
        
        export default App;
        