import { useRef } from "react"

export default function Project({currentProject, onDeleteProject, onEdit, handleAddTask, onUpdateProject}) {

  const { tasks, id, title, dueDate, description } = currentProject 

  const newTask = useRef();

  console.log(tasks);

  const taskList = 
    <ol>
      {tasks.map(task => {
        const taskItem = <li key={task.id} className="flex justify-between">
          <p>{task.content}</p>
          <button onClick={() => onUpdateProject(task)}>Delete Task</button>
        </li>

        return taskItem;
        })
      }
    </ol>

  function onAddTask() {
    const enteredTask = newTask.current.value;

    handleAddTask(enteredTask)
  }

  return (
    <div className="flex flex-col grow-[3] gap-6 mt-28 pr-40">
      <span className="flex flex-row justify-between">
        <h2 className="text-3xl font-semibold">{title}</h2>
        <p>
          <button className="text-xl" onClick={onEdit}>Edit</button>
          <button className="text-xl" onClick={() => onDeleteProject(id)}>Delete</button>
        </p>
      </span>
      <p className="text-xl">{dueDate}</p>
      <p className="text-xl">{description}</p>
      <hr className="h-1 bg-gray-400 border"></hr>
      <h3 className="text-2xl font-semibold">Tasks</h3>
      <div>
        <input ref={newTask} type="text" className="bg-gray-200 rounded-md h-8 w-[40%] mr-6 text-xl"></input>
        <button className="text-xl" onClick={onAddTask}>Add Task</button>
      </div>
      {tasks ? taskList : <p className="text-xl">This project does not have any tasks yet.</p>}
    </div>
  )
}