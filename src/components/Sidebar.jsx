export default function Sidebar() {

  return (
    <div 
    className="flex flex-col grow-[1.25] h-[95%] rounded-tr-2xl items-center bg-black text-white"
    >
      <div 
      className="flex flex-col w-[75%] gap-8 mt-28 outline"
      >
        <h2 
        className="w-[80%] text-3xl mb-4"
        >
          Your Projects
        </h2>
        <button 
        className="w-auto rounded-md px-4 self-start text-xl h-12 mb-4 bg-gray-700"
        >
          + Add Project
        </button>
        <p 
        className="flex flex-col w-[100%] gap-8"
        >
          <button 
          className="pl-2 text-left text-xl bg-red-500">Project 1
          </button>
          <button 
          className="pl-2 text-left text-xl bg-red-500">Project 2
          </button>
          <button 
          className="pl-2 text-left text-xl bg-red-500">Project 3
          </button>
          <button 
          className="pl-2 text-left text-xl bg-red-500">Project 4
          </button>
        </p>
      </div>
    </div>
  )
}

