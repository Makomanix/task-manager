import Input from './Input';
import { useRef } from 'react';

export default function NewProject({  onNewProject, setProject, setProjectArray, onCancel }) {

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave(){
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    onNewProject({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate
    })
  }


  function handleNewProject(){
    setProjectArray(prevProjectArray => 
        [...prevProjectArray, currentProject]     
    )
  }

  return (
    <div className="flex flex-col grow-[3] mt-32 pr-40">
      <p className="self-end">
        <button className="h-16 w-32 text-xl rounded-md m-1" onClick={onCancel}>Cancel</button>
        <button className="h-16 w-32 text-xl rounded-md m-1 bg-black text-white" onClick={handleSave}>Save</button>
      </p>
      <div  className="flex gap-2 flex-col mt-4" >
        <Input ref={title} label='title'/>
        <Input ref={description} textarea label='description'/>
        <Input ref={dueDate} type='date' label='due date'/>
      </div>
    </div>
  )
}