import { useEffect, useRef, useState } from "react"
import { removeTicket, changeTicketContent } from '../actions/taskActions';
import { MdDragIndicator, MdOutlineRemoveCircleOutline } from "react-icons/md";
import { connect } from 'react-redux';
import { useDrag } from "react-dnd";
import PropTypes from 'prop-types';


const Ticket = ({ currentTask, removeTicket, changeTicketContent }) => {
  const inputTaskTitle = useRef()
  const [task, setTask] = useState(currentTask);

  const [{ isDragging }, drag] = useDrag(({
    type: "TASK",
    item: () => task,
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    })
  }))

  const textareaRef = useRef(null);


  const resizeTextarea = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };


  const emptyTask = () => {
    task.title == "" && task.description == "" ? removeTicket(task.parentId, task.id) : changeTicketContent(task.parentId, task.id, task)
  }

  useEffect(() => {
    resizeTextarea();
  }, [task]);

  useEffect(() => {
    if (task.title == "" && task.description == "") inputTaskTitle.current.focus()
  }, [])

  return (
    <div ref={drag} className={`w-full shadow-md ${isDragging ? 'opacity-50' : ''}`}>
      <div className="w-full p-2 px-3 bg-gray-300 text-gray-500 rounded-t-lg cursor-grab flex justify-between items-center">
        <span><MdDragIndicator /></span>
        <span className="cursor-pointer" onClick={() => removeTicket(task.parentId, task.id)}><MdOutlineRemoveCircleOutline /></span>
      </div>
      <input
        ref={inputTaskTitle}
        type="text"
        value={task?.title}
        className={`bg-gray-100 p-4 font-semibold text-md outline-0  text-gray-600 active:border-white resize-none w-full`}
        placeholder="Title"
        onChange={(e) => setTask({ ...task, title: e.target.value })}
        onBlur={() => emptyTask()}
      />

      <textarea
      ref={textareaRef}
      type="text"
        name="task"
        className={`bg-white px-4 pt-6 pb-2 font-semibold text-md outline-0  text-gray-600 active:border-white rounded-b-lg resize-none w-full h-6`}
        placeholder="Click to add a description"
        id="task"
        value={task?.description}
        onChange={(e) => setTask({ ...task, description: e.target.value })}
    />
    </div>

  )
}

Ticket.propTypes = {
  currentTask: PropTypes.object.isRequired,
  removeTicket: PropTypes.func.isRequired,
  changeTicketContent: PropTypes.func.isRequired,
};


const mapDispatchToProps = {
  removeTicket,
  changeTicketContent
};

const mapStateToProps = (state) => ({
  tasks: state.tasks
});

export default connect(mapStateToProps, mapDispatchToProps)(Ticket);