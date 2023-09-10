import { MdOutlineTaskAlt, MdCheckCircleOutline } from 'react-icons/md';
import { LuPlus } from 'react-icons/lu';
import { colors } from '../constants';
import { useState } from 'react';

const ProgressiveColumns = ({ index }) => {
    const [cardColor, setCardColor] = useState(colors[index])
    const [title, setTitle] = useState('Ouvert')


    return (
        <div className={`relative span-1 h-full ${index % 2 == 0 ? "bg-gray-50" : "bg-gray-100"}`}>
            <span className='w-full bg-purple-400 px-6 p-3 flex items-center gap-1 shadow-b-xl text-white font-bold ' style={{ backgroundColor: cardColor }}>
                <button className="rounded-full">
                    <MdOutlineTaskAlt size={26} />
                </button>
                <input type="text" name="colomnTitle" id="colomnTitle" className={` bg-transparent px-3 py-2 text-xl outline-0 focus:bg-white focus:text-black active:border-white rounded-2xl w-5/6`} value={title} onChange={(e) => setTitle(e.target.value)} />
            </span>
            <span className='w-full p-4 flex justify-center z-10'>
                <button className='rounded-full bg-white p-2 cursor-pointer'>
                    <LuPlus />
                </button>
            </span>
            <div className='absolute z-0 h-full flex flex-col items-center justify-center w-full'>
                <MdCheckCircleOutline size={60} color='#8a9499' />
                <span className="text-gray-700/60 font-medium text-lg">Aucune tache</span>
            </div>
        </div>
    )
}

export default ProgressiveColumns