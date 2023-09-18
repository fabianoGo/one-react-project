// import logo from './logo.svg';
// import './App.css';

function App(props) {
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <form>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
          O que precisa ser feito?
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Adicionar
        </button>
      </form>
      <div className="filters btn-group stack-exception">
        <button type="button" className="btn toggle-btn" aria-pressed="true">
          <span className="visually-hidden">Mostrar </span>
          <span>Todas</span>
          <span className="visually-hidden"> tarefas</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Mostrar </span>
          <span className="visually-hidden"> tarefas </span>
          <span>Ativas</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Mostrar </span>
          <span className="visually-hidden"> tarefas </span>
          <span>Completadas</span>
        </button>
      </div>
      <h2 id="list-heading">3 tarefas restantes</h2> 
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-0" type="checkbox" defaultChecked={true} />
            <label className="todo-label" htmlFor="todo-0">
            Comer
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Editar <span className="visually-hidden">Comer</span>
            </button>
            <button type="button" className="btn btn__danger">
              Deletar <span className="visually-hidden">Comer</span>
            </button>
          </div>
        </li>
        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-1" type="checkbox" />
            <label className="todo-label" htmlFor="todo-1">
            Dormir
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Editar <span className="visually-hidden">Dormir</span>
            </button>
            <button type="button" className="btn btn__danger">
              Deletar <span className="visually-hidden">Dormir</span>
            </button>
          </div>
        </li>
        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-2" type="checkbox" />
            <label className="todo-label" htmlFor="todo-2">
              Repetir
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Editar <span className="visually-hidden">Repetir</span>
            </button>
            <button type="button" className="btn btn__danger">
              Deletar <span className="visually-hidden">Repetir</span>
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}


export default App;
