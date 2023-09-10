import { LuPlus } from 'react-icons/lu';
import { MdOutlineGridView, MdOutlineListAlt } from 'react-icons/md';
import ProgressiveColumns from "./components/ProgressiveColumns";


const App = () => {
  const test = ['','']
  return (
    <div className="min-h-screen flex flex-col">
      {/* <div className="p-6">
        <h1 className="text-xl font-bold">Création d'une application de gestion de tâches</h1>
      </div> */}
      <div className="flex justify-between p-4 shadow-6xl">
        <div className="flex rounded-md bg-gray-200">
          <div>
            <input type="radio" name="option" id="list" value="list" className="peer hidden" defaultChecked={true} />
            <label htmlFor="list" className="cursor-pointer select-none rounded-l-md p-2 px-6 text-center peer-checked:bg-green-500 peer-checked:font-bold peer-checked:text-white flex items-center"><MdOutlineListAlt size={23} /></label>
          </div>

          <div>
            <input type="radio" name="option" id="group" value="group" className="peer hidden" defaultChecked={false} />
            <label htmlFor="group" className="cursor-pointer select-none rounded-r-md p-2 px-6 text-center peer-checked:bg-green-500 peer-checked:font-bold peer-checked:text-white flex items-center"><MdOutlineGridView size={23} /></label>
          </div>
        </div>
        <button className="p-2 rounded-md bg-green-500 text-white flex gap-2 items-center"><LuPlus /> Add Board</button>
      </div>
      <div className="bg-white grid grid-cols-5 flex-initial w-full h-screen">
        {
          test.map((val, i) => <ProgressiveColumns key={i} index={i} />)
        }
        <div className="relative span-1">
          <span className='cursor-pointer w-full text-lg bg-sky-100 px-10 p-5 text-sky-500 font-medium flex items-center gap-2 shadow-b-xl'> <LuPlus /> Ajouter une section</span>
        </div>
      </div>
    </div>
  )
}

export default App
