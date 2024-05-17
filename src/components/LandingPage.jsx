import clipboard from '../assets/no-projects.png'
import Button from './Button'

export default function LandingPage({ onStartNewProject,}) {

  return (
    <div className="flex flex-col items-center justify-center gap-6 mt-40 mr-16 grow-[3] shrink bg-stone-50">
      <img 
        src={clipboard} 
        alt='clipboard'
        className='w-24'
      />
      <h3 className="text-2xl text-gray-600 font-bold">No Project Selected</h3>
      <p className='text-xl mb-6 text-gray-400'>Select a project or get started with a new one</p>
      <p className='text-xl h-14 w-52 items-center justify-center flex flex-row'>
        <Button onClick={onStartNewProject}>Create New Project</Button>
      </p>
    </div>
  )
}