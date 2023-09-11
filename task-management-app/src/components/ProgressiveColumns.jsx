import { useEffect, useRef, useState } from 'react';
import { MdCheckCircleOutline, MdMoreVert } from 'react-icons/md';
import { TbTrash } from "react-icons/tb"
import { LuPlus } from 'react-icons/lu';
import { colors, icons } from '../constants';
import { removeTask, changeTitle } from '../actions/taskActions';
import { connect } from 'react-redux';


const ProgressiveColumns = ({ index, title, changeTitle, removeTask }) => {
    const inputTitle = useRef()
    const [cardColor, setCardColor] = useState(colors[index])
    const [cardIcon, setCardIcon] = useState(icons[index])
    const [currentTitle, setCurrentTitle] = useState(title)
    const [showOptionCard, setShowOptionCard] = useState(true)

    const emptyTitle = () => { !currentTitle ? removeTask(index) : changeTitle(index, currentTitle) }

    useEffect(() => { if (!title) inputTitle.current.focus() }, [])

    return (
        <div className={`relative span-1 h-full max-w-96 ${index % 2 == 0 ? "bg-gray-50" : "bg-gray-100"}`}>
            <span className='w-full bg-purple-400 px-6 p-3 flex items-center gap-1 shadow-b-xl text-white font-bold ' style={{ backgroundColor: cardColor }}>
                <span className="rounded-full text-2xl">{cardIcon}</span>
                <input
                    ref={inputTitle}
                    type="text"
                    name="colomnTitle"
                    className={`bg-transparent px-3 py-2 text-lg outline-0 focus:bg-white focus:text-black active:border-white rounded-2xl w-5/6`}
                    id="colomnTitle"
                    value={currentTitle}
                    onChange={(e) => setCurrentTitle(e.target.value)}
                    onBlur={() => emptyTitle()}
                />
                <button onClick={() => setShowOptionCard(false)}>
                    <MdMoreVert size={30} />
                </button>
                <div className='absolute top-16 left-32 p-4 bg-white rounded-md z-40 w-72' hidden={showOptionCard} onMouseLeave={()=>setShowOptionCard(true)}>
                    <div>
                        <span className='text-gray-400 font-normal py-2'>Colors</span>
                        <div className='grid grid-cols-4 gap-4 p-2 flex-wrap'>
                            {
                                colors.map((color, index) => <button key={index} className='p-4 rounded-full cursor-pointer' style={{ backgroundColor: color }} onClick={() => setCardColor(color)}></button>)
                            }
                        </div>
                    </div>
                    <div>
                        <span className='text-gray-400 font-normal py-2'>Icons</span>
                        <div className='grid grid-cols-4 gap-4 p-2 flex-wrap'>
                            {
                                icons.map((Icon, index) => <span key={index} className='rounded-full cursor-pointer text-2xl text-black h-12 w-12' onClick={() => setCardIcon(Icon)}>{Icon}</span>)
                            }
                        </div>
                    </div>
                    <div>
                        <span className='text-red-500 font-medium flex gap-4 hover:bg-red-50 text-md items-center py-2 justify-center cursor-pointer shadow-sm rounded-md shadow-gray-400 focus:shadow-inherit' onClick={() => removeTask(index)}>Delete<TbTrash size-2 /></span>
                    </div>
                </div>
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

const mapDispatchToProps = {
    changeTitle,
    removeTask
};

const mapStateToProps = (state) => ({
    tasks: state.tasks
});


export default connect(mapStateToProps, mapDispatchToProps)(ProgressiveColumns);