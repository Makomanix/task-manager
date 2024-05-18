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
      return {
        ...prevState,
        selectedProject: projectData.id,
        projects: [...prevState.projects, projectData]
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

  function handleDeleteTask(task) {
    const remainingTasks = currentProject.tasks.filter(currentTask => currentTask.id !== task.id)

    const updatedProject = {
      ...currentProject,
      tasks: remainingTasks
    }
    handleUpdateProject(updatedProject);
  }

  function handleAddTask(task) {
    const taskID = Math.random().toFixed(5);
    let updatedProject;

    if (currentProject.tasks[0] !== undefined) {
      updatedProject = {
        ...currentProject,
        tasks: [ ...currentProject.tasks, {id: taskID, content: task}]
      }      
    } else {
      updatedProject = {
        ...currentProject,
        tasks: [{id: taskID, content: task}]
      }
    }
    handleUpdateProject(updatedProject)
  }


  function handleUpdateProject(updatedProject) {
    setProjectState(prevState => {
      const filteredProjects =  prevState.projects.filter(project => project.id !== updatedProject.id)
      return {
        ...prevState,
        projects: [...filteredProjects, updatedProject]
      };
    });
  }

  function handleDeleteProject(e) {
    e.preventDefault();
    setProjectState(prevState => {
      const filteredProjects = prevState.projects.filter(project => project.id !== prevState.selectedProject)
      return {
        ...prevState,
        selectedProject: undefined,
        projects: filteredProjects
      };
    });
  }

  if (projectState.selectedProject === null) {
    content = <NewProject  onSaveProject={handleAddProject} onCancel={handleCancel} />

  } else if (projectState.selectedProject === undefined) {
    content = <LandingPage onStartNewProject={handleStartNewProject}/>

  } else {
    currentProject = projectState.projects.find(project => project.id === projectState.selectedProject)

    console.log(currentProject.tasks);

    content = <Project currentProject={currentProject} onDeleteProject={handleDeleteProject} 
    onDeleteTask={handleDeleteTask} handleAddTask={handleAddTask} onUpdateProject={handleUpdateProject}/>
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
        