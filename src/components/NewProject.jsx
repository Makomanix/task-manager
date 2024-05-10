export default function CreateProject({ onCancel }) {

  return (
    <div className="flex flex-col grow-[3] mt-32 pr-40">
      <p className="self-end">
        <button className="h-16 w-32 text-xl rounded-md m-1" onClick={onCancel}>Cancel</button>
        <button className="h-16 w-32 text-xl rounded-md m-1 bg-black text-white">Save</button>
      </p>
      <form className="flex gap-2 flex-col mt-4">
        <label className="text-xl font-semibold">Title</label>
        <input type='text' className="h-12 text-xl bg-gray-200 rounded-md pl-2 mb-4" ></input>
        <label className="text-xl font-semibold">Description</label>
        <textarea id="description" name="description" maxLength='250' placeholder="250 Character Limit" className="h-20 text-xl bg-gray-200 rounded-md pl-2 mb-4"></textarea>
        <label className="text-xl font-semibold">Due Date</label>
        <input type='date' className="h-12 text-xl bg-gray-200 rounded-md pl-2 mb-4"></input>
      </form>
    </div>
  )
}