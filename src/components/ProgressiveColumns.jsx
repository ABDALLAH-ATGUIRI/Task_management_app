import { useEffect, useRef, useState } from 'react';
import { removeProgressiveColumn, changeTitle, addTicket } from '../actions/taskActions';
import { connect } from 'react-redux';
import { colors, icons } from '../constants';
import { MdCheckCircleOutline, MdMoreVert } from 'react-icons/md';
import { TbTrash } from "react-icons/tb"
import { LuPlus } from 'react-icons/lu';
import TaskCard from './Ticket';


const ProgressiveColumns = ({ index, id, title, tickets, changeTitle, removeProgressiveColumn, addTicket }) => {
    const inputTitle = useRef()
    const [cardColor, setCardColor] = useState(colors[index])
    const [cardIcon, setCardIcon] = useState(icons[index])
    const [currentTitle, setCurrentTitle] = useState(title)
    const [showOptionCard, setShowOptionCard] = useState(true)

    const emptyTitle = () => {
        currentTitle == "" ? removeProgressiveColumn(id) : changeTitle(id, currentTitle)
    }

    const newTicket = () => {
        addTicket({ id, ticket: { id: `${Math.random(10)}-${Math.random(10)}`, name: '', description: '' } })
    }

    useEffect(() => { if (currentTitle == "") inputTitle.current.focus() }, [])

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
                <div className='absolute top-20 left-40 p-4 bg-white rounded-md z-30 w-64' hidden={showOptionCard} onMouseLeave={()=>setShowOptionCard(true)}>
                    <div>
                        <span className='text-gray-400 font-normal py-2'>Colors</span>
                        <div className='grid grid-cols-4 gap-4 p-2 flex-wrap'>
                            {
                                colors.map((color, index) => <button key={index} className='p-4 rounded-full cursor-pointer' style={{ backgroundColor: color }} onClick={() => setCardColor(color)}></button>)
                            }
                        </div>
                    </div>
                    {/* <div>
                        <span className='text-gray-400 font-normal py-2'>Icons</span>
                        <div className='grid grid-cols-4 gap-4 p-2 flex-wrap'>
                            {
                                icons.map((Icon, index) => <span key={index} className='rounded-full cursor-pointer text-2xl text-black h-12 w-12' onClick={() => setCardIcon(Icon)}>{Icon}</span>)
                            }
                        </div>
                    </div> */}
                    <div>
                        <span
                            className='text-red-500 font-medium flex gap-4 hover:bg-red-50 text-md items-center py-2 justify-center cursor-pointer shadow-sm rounded-md shadow-gray-400 mt-10 focus:shadow-inherit'
                            onClick={() => removeProgressiveColumn(id)}
                        >
                            Delete
                            <TbTrash size-2 />
                        </span>
                    </div>
                </div>
            </span>

            <div className='w-full p-4 flex flex-col justify-center items-center gap-8 z-10'>
                {tickets?.map(({ id }) => <TaskCard key={id} />)}
                <button className='w-10 h-10 rounded-full bg-white cursor-pointer flex justify-center items-center' onClick={() => newTicket()}>
                    <LuPlus size={20} />
                </button>
            </div>

            {
                !tickets?.length ?
                    <div className='absolute z-0 h-5/6 flex flex-col items-center justify-center w-full'>
                        <MdCheckCircleOutline size={60} color='#8a949966' />
                        <span className="text-gray-700/30 font-medium text-lg">Aucune tache</span>
                    </div> : <></>
            }
        </div>
    )
}

const mapDispatchToProps = {
    changeTitle,
    removeProgressiveColumn,
    addTicket
};

const mapStateToProps = (state) => ({
    tasks: state.tasks
});


export default connect(mapStateToProps, mapDispatchToProps)(ProgressiveColumns);