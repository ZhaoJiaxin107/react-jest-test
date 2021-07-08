import { Fragment } from 'react'
import TodoList from './containers/todolist';
function App() {
  return (
    <div className="App" title="jiaxin" data-test="container">
      {/* <Math /> */}
      <Fragment>
        <TodoList />
      </Fragment>
    </div>
  );
}

export default App;
