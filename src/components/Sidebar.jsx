export default function Sidebar() {

  return (
    <div 
    className="flex flex-col grow h-[95%] rounded-tr-xl items-center bg-black text-white "
    >
      <div 
      className="flex flex-col w-[75%] gap-8 mt-16"
      >
        <h2 
        className="w-[80%] text-3xl"
        >
          Your Projects
        </h2>
        <button 
        className="w-auto rounded-md px-4 self-start h-12 bg-gray-700"
        >
          + Add Project
        </button>
        <p 
        className="flex flex-col w-[100%] gap-8"
        >
          <button 
          className="pl-2 text-left bg-red-500">Project 1
          </button>
          <button 
          className="pl-2 text-left bg-red-500">Project 2
          </button>
          <button 
          className="pl-2 text-left bg-red-500">Project 3
          </button>
        </p>
      </div>
    </div>
  )
}

