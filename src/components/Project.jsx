export default function Project() {

  let task;

  return (
    <div className="flex flex-col grow-[3] gap-6 mt-28 pr-40">
      <span className="flex flex-row justify-between">
        <h2 className="text-3xl font-semibold">Project Name</h2>
        <button className="text-xl">Delete</button>
      </span>
      <p className="text-xl">Due Date</p>
      <p className="text-xl">Description <br></br> Description</p>
      <hr className="h-1 bg-gray-400 border"></hr>
      <h3 className="text-2xl font-semibold">Tasks</h3>
      <div>
        <input type="text" className="bg-gray-200 rounded-md h-8 w-[40%] mr-6 text-xl"></input>
        <button className="text-xl">Add Task</button>
      </div>
      {task ? <p>Tasks 1</p> : <p className="text-xl">This project does not have any tasks yet.</p>}
    </div>
  )
}