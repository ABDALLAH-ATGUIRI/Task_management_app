import { useEffect, useRef, useState } from 'react';
import { removeProgressiveColumn, changeTitle, addTicket, changeProgressiveOfTicket } from '../actions/taskActions';
import { connect } from 'react-redux';
import { useDrop } from 'react-dnd';
import PropTypes from 'prop-types';
import { colors, icons } from '../constants';
import { MdCheckCircleOutline, MdAdd, MdMoreVert } from 'react-icons/md';
import { TbTrash } from "react-icons/tb"
import TaskCard from './Ticket';


const ProgressiveColumns = ({ index, id, title, tickets, changeTitle, removeProgressiveColumn, addTicket, changeProgressiveOfTicket }) => {

    const inputTitle = useRef([])
    const [cardColor, setCardColor] = useState(colors[index])
    const [cardIcon] = useState(icons[index])
    const [currentTitle, setCurrentTitle] = useState(title)
    const [showOptionCard, setShowOptionCard] = useState(true)

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "TASK",
        drop: (item) => {
            changeProgressiveOfTicket(item, id)
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }))

    const emptyTitle = () => {
        currentTitle == "" ? removeProgressiveColumn(id) : changeTitle(id, currentTitle)
    }

    const newTicket = () => {
        addTicket({ parentId: id, id: `${Math.random(10)}-${Math.random(10)}`, title: '', description: '' })
    }

    useEffect(() => {
        if (currentTitle == "") inputTitle.current.focus()
    }, [])

    return (
        <div className={`relative span-1 h-full max-w-96 ${index % 2 == 0 ? "bg-gray-50" : "bg-gray-100"} ${isOver ? 'bg-slate-200' : ''}`} ref={drop}>
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

                <span className={`w-10 h-7 rounded-full bg-gray-300/30 cursor-pointer flex justify-center items-center ${!tickets.length ? 'hidden' : 'block'}`}>{tickets.length}</span>

                <button onClick={() => setShowOptionCard(false)}>
                    <MdMoreVert size={30} />
                </button>
                <div className='absolute top-20 left-40 p-4 bg-white rounded-md z-30 w-64' hidden={showOptionCard} onMouseLeave={() => setShowOptionCard(!showOptionCard)}>
                    <div>
                        <span className='text-gray-400 font-normal py-2'>Colors</span>
                        <div className='grid grid-cols-4 gap-4 p-2 flex-wrap'>
                            {
                                colors.map((color, index) => <button key={index} className='p-4 rounded-full cursor-pointer' style={{ backgroundColor: color }} onClick={() => setCardColor(color)}></button>)
                            }
                        </div>
                    </div>

                    <div>
                        <span
                            className='text-red-500 font-medium flex gap-4 hover:bg-red-50 text-md items-center py-2 justify-center cursor-pointer shadow-sm rounded-md shadow-gray-400 mt-10 focus:shadow-inherit'
                            onClick={() => removeProgressiveColumn(id)}
                        >
                            Delete
                            <TbTrash size={20} />
                        </span>
                    </div>
                </div>
            </span>

            <div className='w-full p-4 flex flex-col justify-center items-center gap-8 z-10' >
                {tickets?.map((currentTask) => <TaskCard key={currentTask.id} currentTask={currentTask} />)}

                <button className='w-10 h-10 rounded-full bg-white cursor-pointer flex justify-center items-center' onClick={() => newTicket()}>
                    <MdAdd size={20} />
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
ProgressiveColumns.propTypes = {
    index: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tickets: PropTypes.array.isRequired,
    addTicket: PropTypes.func.isRequired,
    changeTitle: PropTypes.func.isRequired,
    removeProgressiveColumn: PropTypes.func.isRequired,
    changeProgressiveOfTicket: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
    changeTitle,
    removeProgressiveColumn,
    addTicket,
    changeProgressiveOfTicket,
};

const mapStateToProps = (state) => ({
    tasks: state.tasks,
});


export default connect(mapStateToProps, mapDispatchToProps)(ProgressiveColumns);