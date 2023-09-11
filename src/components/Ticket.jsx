import { useEffect, useRef, useState } from "react"

const Ticket = () => {
  const textareaRef = useRef(null);
  const [task, setTask] = useState()

  const resizeTextarea = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  useEffect(() => {
    resizeTextarea();
  }, [task]);
  return (
    <textarea
      ref={textareaRef}
      type="text"
      name="colomnTitle"
      className={`bg-white p-4 font-semibold text-md outline-0 shadow-md focus:text-black active:border-white rounded-xl resize-none w-full`}
      id="colomnTitle"
      value={task}
      onChange={(e) => setTask(e.target.value)}
    />
  )
}

export default Ticket