export default function Button({children, active, ...props}) {

  let cssButton = 'h-16 w-32 rounded-md m-1 hover:ring'

  switch (children) {
    case 'Delete':
      cssButton += ' border-stone-600 hover:ring-stone-600 hover:bg-red-400';
      break;
    case 'Cancel':
      cssButton += ' border-stone-600 hover:ring-stone-600';
      break;
    case 'Save':
    case 'Edit':
      cssButton += ' bg-black text-white border-stone-300 hover:ring-gray-500 hover:bg-gray-500';
      break;
    case 'Add Task':
      cssButton = 'h-8 px-1 rounded-md border-stone-600 hover:ring hover:ring-stone-600';
      break;
    case 'Delete Task':
      cssButton = 'h-8 w-32 bg-black text-white  mx-1 my-2 rounded-md border-stone-300 hover:ring hover:ring-stone-500 hover:bg-red-400';
      break;
    case '+ Add Project':
      cssButton = 'w-[60%] rounded-md px-4 text-xl h-14 mb-8 bg-gray-700 hover:bg-gray-500';
      break;
    case 'Create New Project':
      cssButton = 'h-full w-full bg-black text-white border-stone-300 rounded-lg hover:ring hover:ring-gray-500 hover:bg-gray-500' ;
      break;
    default:
      active ?
      cssButton = 'w-[100%] text-left text-xl px-2 py-1 bg-gray-500 rounded-md bg-gray-700 hover:bg-gray-500':
      cssButton = 'w-[100%] text-left text-xl px-2 py-1 rounded-md bg-gray-700 hover:bg-gray-500'
  }

  return (
    <button className={cssButton}{...props}>{children}</button>
  )
}