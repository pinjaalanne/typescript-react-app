import './App.css'
import ToDoList from './components/ToDoList';
import NewToDo from './components/NewToDo';

// function App() {

//   return (
//     <div>Typescript + React</div>
//   )
// }

const App: React.FC = () => {
  const todos = [{
    id: 't1', text: 'Finish Typescript course'
  }];

  return (
    <div>
      <h1>My Todo List</h1>
      <NewToDo />
      {/* a component that lists todos */}
      <ToDoList items={todos} />
    </div>
  )
}

export default App;
