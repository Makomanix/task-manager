export default function Sidebar({ projectArray, onAddProject }) {

  // const titles = 
  //     <ol className="flex flex-col items-start w-[100%] gap-8">
  //       {projectArray.map(project => {
  //         const title = <li key={project.title}
  //           className="pl-2 w-[100%] h-10 text-left text-xl bg-gray-700 rounded-md">
  //           <button onClick={selectProject}>{project.title}</button>
  //         </li>

  //         return title;
  //         })
  //       }
  //     </ol>

  return (
      <div className="flex flex-col items-start w-[75%] mx-12 gap-8 mt-28">
        <h2 className="text-3xl mb-4 uppercase">
          Your Projects
        </h2>
        <button className="w-auto rounded-md px-4 text-xl h-14 mb-8 bg-gray-700"
        onClick={onAddProject}>
          + Add Project
        </button>
        {/* {titles} */}
      </div>
  )
}

