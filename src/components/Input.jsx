import { forwardRef } from "react"

const Input = forwardRef(function Input({ textarea, label, ...props}, ref) {

  const style = "text-xl bg-gray-200 rounded-md pl-2 mb-4 focus:outline-none focus:border-stone-600"
  return (
  <>
    <label className="text-xl font-semibold uppercase" >{label}</label>
    {textarea ? 
      <textarea 
        ref={ref} className={style} {...props}
      />  
          :
      <input 
        ref={ref} className={style} {...props}
      />
    }
  </>
  )
})

export default Input;