import { MdAdd, MdOutlineGridView, MdOutlineListAlt } from 'react-icons/md';
import SearchBar from './SearchBar';

const HaedBar = ({ handle, handleChangeView, isListView }) => {
  return (
    <div className="flex flex-wrap justify-between p-2 py-5 shadow-6xl gap-3">
      <div className=" hidden md:flex rounded-md bg-gray-200">
        <div>
          <input type="radio" name="option" id="list" value="list" className="peer hidden" onChange={() => handleChangeView(!isListView)} defaultChecked={isListView} />
          <label htmlFor="list" className="cursor-pointer select-none rounded-l-md p-2 px-6 text-center peer-checked:bg-green-500 peer-checked:font-bold peer-checked:text-white flex items-center"><MdOutlineListAlt size={23} /></label>
        </div>
        <div>
          <input type="radio" name="option" id="group" value="group" className="peer hidden" onChange={() => handleChangeView(!isListView)} defaultChecked={!isListView} />
          <label htmlFor="group" className="cursor-pointer select-none rounded-r-md p-2 px-6 text-center peer-checked:bg-green-500 peer-checked:font-bold peer-checked:text-white flex items-center"><MdOutlineGridView size={23} /></label>
        </div>
      </div>
      <div className="grow lg:grow-0 "><SearchBar /></div>

      <button className="p-2 rounded-md bg-green-500 text-white flex items-center" onClick={() => { handle() }}><MdAdd size={20} /> Add section</button>
    </div>
  )
}

export default HaedBar