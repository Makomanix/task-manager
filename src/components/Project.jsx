import { useState, useRef } from "react";
import NewProject from "./NewProject";
import Modal from "./Modal";
import Button from './Button';

export default function Project({currentProject, onDeleteProject, handleAddTask, onDeleteTask, onUpdateProject}) {

  const [ isEditing, setIsEditing ] = useState(false);

  const { tasks, id, title, dueDate, description } = currentProject ;

  const newTask = useRef();
  const modal = useRef();
  const modalDelete = useRef();

  let taskList;

  if (tasks[0] !== undefined) {
    taskList = 
    <ol>
        {tasks.map(task => {
          const taskItem = 
          <li key={task.id} className="flex justify-between text-lg rounded-md">
            <p className="w-full h-8 my-2 mr-4 px-2 bg-gray-200 ">{task.content}</p>
            <Button onClick={() => onDeleteTask(task)}>Delete Task</Button>
          </li>

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

  function handleModalDeleteProject() {
    modalDelete.current.open()
  }

  return  (
    <>
    <Modal ref={modal}>
      <h2 className="text-2xl text-gray-600 font-bold mb-4">Invalid Input</h2>
      <p className='text-xl mb-2 text-gray-500'>Please enter a value into the task input field</p>
    </Modal>
    <Modal ref={modalDelete} confirmDelete={onDeleteProject}>
      <h2 className="text-2xl text-gray-600 font-bold mb-4">Delete Project</h2>
      <p className='text-xl mb-2 text-gray-500'>To delete this project click confirm.</p>
    </Modal>
      {isEditing ? <NewProject onSaveProject={onUpdateProject} currentProject={currentProject} onCancel={handleEdit} tasks={tasks}/> :
      <div className="flex flex-col grow-[3] gap-6 mt-32 pr-52 text-xl">
        <header className="flex flex-row justify-between">
          <h2 className="text-4xl font-semibold">{title}</h2>
          <p>
            <Button onClick={handleModalDeleteProject}>Delete</Button>
            <Button onClick={handleEdit}>Edit</Button>
          </p>
        </header >
        <p>{dueDate}</p>
        <p className="whitespace-pre-wrap">{description}</p>
        <hr className="h-1 bg-gray-400 border"></hr>
        <h3 className="text-2xl font-semibold">Tasks</h3>
        <div>
          <label>New</label>
          <p>
            <input ref={newTask} type="text" className="bg-gray-200 rounded-md h-8 w-[60%] mr-6 "></input>
            <Button onClick={onAddTask}>Add Task</Button>
          </p>
        </div>
        {tasks[0] !== undefined ? taskList : <p>This project does not have any tasks yet.</p>}
      </div>
      }
    </>
  )
}