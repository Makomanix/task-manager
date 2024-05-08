import clipboard from '../assets/no-projects.png'

export default function LandingPage() {

  return (
    <div className="flex flex-col items-center justify-center gap-6 mt-40 grow-[3] shrink bg-stone-50">
      <img 
        src={clipboard} 
        alt='clipboard'
        className='w-24'
      />
      <h3 className="text-2xl text-gray-600 font-bold">No Project Selected</h3>
      <p className='text-xl mb-6 text-gray-400'>Select a project or get started with a new one</p>
      <p className='text-xl h-14 w-52 items-center justify-center rounded-lg flex flex-row bg-black text-gray-400'>
        <button className=''>Create new project</button>
      </p>
    </div>
  )
}