import React, { Component } from 'react'
import { AiOutlinePlus } from 'react-icons/ai';
import { HiOutlineListBullet } from 'react-icons/hi';
import { MdOutlineGridView , MdOutlineListAlt } from 'react-icons/md';


const App = () => {

  return (
    <div className="min-h-screen flex flex-col">
      <div className="p-6">
        <h1 className="text-xl font-bold">Création d'une application de gestion de tâches</h1>
      </div>
      <div className="bg-gray-100 flex justify-between p-4">
        <div className="flex rounded-md bg-gray-200">
          <div>
          <label htmlFor="list" className="cursor-pointer select-none rounded-l-md p-2 text-center peer-checked:bg-green-500 peer-checked:font-bold peer-checked:text-white flex items-center gap-2"><HiOutlineListBullet/>List</label>
            <input type="radio" name="option" id="list" value="list" className="peer hidden" defaultChecked={true} />
          </div>

          <div>
            <label htmlFor="group" className="cursor-pointer select-none rounded-r-md p-2 text-center peer-checked:bg-green-500 peer-checked:font-bold peer-checked:text-white flex items-center gap-2"><MdOutlineGridView/>Group</label>
            <input type="radio" name="option" id="group" value="group" className="peer hidden" defaultChecked={false} />
          </div>
        </div>
        <button className="p-2 rounded-md bg-blue-500 text-white flex gap-2 items-center"><AiOutlinePlus/> Add Board</button>
      </div>
      <div className="bg-gray-200 grid grid-cols-4 flex-initial w-full h-screen">
        <span className="span-2"></span>
      </div>
    </div>
  )
}

export default App
