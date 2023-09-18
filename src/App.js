// import logo from './logo.svg';
// import './App.css';

import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import Todo from "./components/Todo";

function App(props) {

  const taskList = props.tasks?.map((task) => (
    <Todo id={task.id} 
          name={task.name} 
          completed={task.completed} 
          key={task.id} 
    />
  ));



  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form />
      <div className="filters btn-group stack-exception">
        < FilterButton id="btn-01" name="Todos" />
        < FilterButton id="btn-02" name="Ativas" />
        < FilterButton id="btn-03" name="Completas" />
      </div>
      
      <h2 id="list-heading">3 tarefas restantes</h2> 
      <ul role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
         {taskList}

      </ul>
    </div>
  );
}


export default App;
