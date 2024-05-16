import { useState, useRef } from "react"
import NewProject from "./NewProject";
import Modal from "./Modal";

export default function Project({currentProject, onDeleteProject, handleAddTask, onDeleteTask, onUpdateProject}) {

  const[ isEditing, setIsEditing ] = useState(false);

  const { tasks, id, title, dueDate, description } = currentProject 

  const newTask = useRef();
  const modal = useRef();

  let taskList;

  if (tasks[0] !== undefined) {
    taskList = 
      <ol>
        {tasks.map(task => {
          const taskItem = 
          <li key={task.id} className="flex justify-between">
            <p className="w-full h-8 my-2 mr-4 px-2 bg-gray-200 rounded-md text-lg">{task.content}</p>
            <button className="h-8 w-32 text-lg bg-black text-white rounded-md m-1 my-2 border-stone-300 focus: focus:ring focus:ring-gray-500 hover:ring hover:ring-gray-500 hover:bg-gray-500" onClick={() => onDeleteTask(task)}>Delete Task</button>
          </li>
          console.log(task)
          console.log(taskItem)

          return taskItem;
          })
        }
      </ol>
  }

  function onAddTask() {
    const enteredTask = newTask.current.value;

    if (enteredTask.trim() === '') {
      modal.current.open();
      return;
    }

    handleAddTask(enteredTask)
    newTask.current.value = ''
  }

  function handleEdit() {
    setIsEditing(prevEdit => !prevEdit)
  }

  return  (
    <>
    <Modal ref={modal} buttonLabel='Okay'>
      <h2 className="text-2xl text-gray-600 font-bold mb-4">Invalid Input</h2>
      <p className='text-xl mb-2 text-gray-500'>Please enter a value into the task input field</p>
    </Modal>
      {isEditing ? <NewProject onSaveProject={onUpdateProject} currentProject={currentProject} onCancel={handleEdit} tasks={tasks}/> :
      <div className="flex flex-col grow-[3] gap-6 mt-32 pr-52">
        <span className="flex flex-row justify-between">
          <h2 className="text-4xl font-semibold">{title}</h2>
          <p>
            <button className="h-16 w-32 text-xl rounded-md m-1 border-stone-600 hover:ring hover:ring-stone-600" onClick={handleEdit}>Edit</button>
            <button className="h-16 w-32 text-xl bg-black text-white rounded-md m-1 border-stone-300 focus: focus:ring focus:ring-gray-500 hover:ring hover:ring-gray-500 hover:bg-gray-500" onClick={() => onDeleteProject(id)}>Delete</button>
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
        {tasks[0] !== undefined ? taskList : <p className="text-xl">This project does not have any tasks yet.</p>}
      </div>
      }
    </>
  )
}