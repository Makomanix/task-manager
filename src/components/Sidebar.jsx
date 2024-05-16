export default function Sidebar({ projectState, onStartNewProject, onSelectProject }) {


  console.log(projectState.selectedProject);

  const titles = 
      <ul className="flex flex-col w-[100%] gap-8">
        {projectState.projects.map(project => {

          let active = project.id === projectState.selectedProject ? 'bg-gray-500' : ''

          const title =  
            <li key={project.id}>
              <button className={`w-[100%] text-left text-xl px-2 py-1 rounded-md bg-gray-700 + ${active} hover:bg-gray-500`} onClick={() => onSelectProject(project.id)}>{project.title}</button>
            </li>

          return title;
          })
        }
      </ul>

  return (
      <div className="flex flex-col items-start w-[75%] mx-12 gap-8 mt-28">
        <h2 className="text-3xl mb-4 uppercase">
          Your Projects
        </h2>
        <button className="w-auto rounded-md px-4 text-xl h-14 mb-8 bg-gray-700 hover:bg-gray-500"
        onClick={onStartNewProject}>
          + Add Project
        </button>
        {titles}
      </div>
  )
}

