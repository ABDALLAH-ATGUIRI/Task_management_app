import { useMemo } from 'react';
import ProgressiveColumns from "./components/ProgressiveColumns";
import { MdOutlineGridView, MdOutlineListAlt } from 'react-icons/md';
import { addTask } from './actions/taskActions';
import { LuPlus } from 'react-icons/lu';
import { connect } from 'react-redux';



const App = ({ tasks, addTask }) => {

  const countGridColumns = useMemo(() => {
    const countOfColumns = tasks.length
    return 'grid-cols-' + (countOfColumns < 5 ? 5 : countOfColumns)
  }, [tasks])

  const handleAddTask = () => {
    addTask({ title: '', ticket: {} });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="p-6">
        <h1 className="text-xl font-bold">Création dune application de gestion de tâches</h1>
      </div>
      <div className="flex justify-between p-2 py-5 shadow-6xl">
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
        <button className="p-2 rounded-md bg-green-500 text-white flex gap-2 items-center" onClick={() => { handleAddTask() }}><LuPlus /> Add section</button>
      </div>
      <div className={`bg-white grid grid-flow-col ${countGridColumns} flex-initial w-full h-screen`}>
        {tasks.map(({ title }, i) => <ProgressiveColumns key={title} title={title} index={i} />)}
      </div>

    </div>
  )
}
const mapDispatchToProps = {
  addTask,
};

const mapStateToProps = (state) => ({
  tasks: state.tasks
});

export default connect(mapStateToProps, mapDispatchToProps)(App);