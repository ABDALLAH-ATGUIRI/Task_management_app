import { useMemo, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { connect } from 'react-redux';
import { addProgressiveColumn } from './actions/taskActions';
import HeadBar from './components/headBar';
import ProgressiveColumns from "./components/ProgressiveColumns";




const App = ({ tasks, addProgressiveColumn }) => {

  const [isListView, setIsListView] = useState(false)

  const countGridColumns = useMemo(() => {
    const countOfColumns = tasks.length
    return 'grid-cols-' + countOfColumns
  }, [tasks])

  const handleAddProgressiveColumn = () => {
    addProgressiveColumn({ id: `${Math.random(10)}-${Math.random(10)}`, title: '', tickets: [] });
  };

  return (
    <DndProvider backend={HTML5Backend}>

    <div className="min-h-screen flex flex-col">
        <div className="p-6 bg-green-100">
        <h1 className="text-xl font-bold">Création dune application de gestion de tâches</h1>
      </div>

        <HeadBar handle={handleAddProgressiveColumn} isListView={isListView} handleChangeView={setIsListView} />

        <div className={`bg-white grid ${isListView ? '' : 'lg:grid-flow-col'} ${countGridColumns} flex-initial w-full h-screen`}>
          {tasks.map(({ title, tickets, id }, i) => <ProgressiveColumns key={id} title={title} index={i} tickets={tickets} id={id} />)}
      </div>

    </div>
    </DndProvider>

  )
}
const mapDispatchToProps = {
  addProgressiveColumn,
};

const mapStateToProps = (state) => ({
  tasks: state.tasks
});

export default connect(mapStateToProps, mapDispatchToProps)(App);