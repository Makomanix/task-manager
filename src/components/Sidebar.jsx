import Button from "./Button";

export default function Sidebar({ projectState, onStartNewProject, onSelectProject }) {

  const titles = 
      <ul className="flex flex-col w-[100%] gap-8">
        {projectState.projects.map(project => {
          let active = false; 

          if (project.id === projectState.selectedProject) {
            active = true;
          }

          const title =  
            <li key={project.id}>
              <Button active={active} onClick={() => onSelectProject(project.id)}>{project.title}</Button>
            </li>

          return title;
          })
        }
      </ul>

  return (
      <div className="flex flex-col items-start mx-12 gap-8 mt-28">
        <h2 className="text-3xl mb-4 uppercase">
          Your Projects
        </h2>
        <Button onClick={onStartNewProject}>+ Add Project</Button>
        {titles}
      </div>
  )
}

