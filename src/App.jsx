import { useState } from 'react';
import { connect } from 'react-redux';
import { DndProvider } from 'react-dnd';
import HeadBar from './components/headBar';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { addProgressiveColumn } from './actions/taskActions';
import ProgressiveColumns from "./components/ProgressiveColumns";




const App = ({ tasks, addProgressiveColumn }) => {

  const [isListView, setIsListView] = useState(false)

  const handleAddProgressiveColumn = () => {
    addProgressiveColumn();
  };

  return (
    <DndProvider backend={HTML5Backend}>

    <div className="min-h-screen flex flex-col">
        <div className="p-6 bg-green-100">
          <h1 className="text-xl font-bold">Application for organizing the tasks</h1>
        </div>

        <HeadBar handle={handleAddProgressiveColumn} isListView={isListView} handleChangeView={setIsListView} />

        <div className={`bg-white grid ${isListView ? '' : 'lg:grid-flow-col'} flex-initial w-full h-screen`}>
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