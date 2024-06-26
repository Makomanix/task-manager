import Input from './Input';
import { useRef } from 'react';
import Modal from './Modal';
import Button from './Button';

export default function NewProject({ onSaveProject, onCancel, currentProject, tasks }) {
  const modal = useRef();

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave(){
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate.trim() === '') {
      modal.current.open();
      return;
    }

    !currentProject ? onSaveProject({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
      tasks: [],
      id: Math.random().toFixed(5)
    }) 
    :
    onSaveProject({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
      tasks: currentProject.tasks,
      id: currentProject.id
    })
    currentProject && onCancel();
  }

  return (
    <>
      <Modal ref={modal} >
          <h2 className="text-2xl text-gray-600 font-bold mb-4">Invalid Input</h2>
          <p className='text-xl mb-2 text-gray-500'>Oh no ... a value is missing from the form</p>
          <p className='text-xl mb-2 text-gray-500' >Please enter a valid value into each field</p>
      </Modal>
      <div className="flex flex-col grow-[3] mt-32 pr-52 text-xl">
        <p className="self-end">
        <Button onClick={onCancel}>Cancel</Button>
        <Button onClick={handleSave}>Save</Button>
        </p>
        <div  className="flex gap-2 flex-col mt-4" >
          <Input ref={title} label='title' maxLength='35' defaultValue={currentProject ? currentProject.title : ''}/>
          <Input ref={description} textarea maxLength='150' placeholder="150 Character Limit" label='description' defaultValue={currentProject ? currentProject.description : ''}/>
          <Input ref={dueDate} type='date' label='due date' defaultValue={currentProject ? currentProject.dueDate : ''}/>
        </div>
      </div>
    </>
  )
}