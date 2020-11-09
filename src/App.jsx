import React from 'react';
import './App.scss';
import './styles/general.scss';
import { TodoList } from './components/TodoList';
import CurrentUser from './components/CurrentUser/CurrentUser';
import { getAll } from './components/api';
import TodoForm from './components/TodoForm/TodoForm';

class App extends React.Component {
  state = {
    initialTodos: [],
    todos: [],
    selectedUserId: null,
  };

  componentDidMount() {
    getAll('todos')
      .then(todos => this.setState({
        initialTodos: todos.data
          .filter(todo => todo.title && todo.userId),
        todos: todos.data
          .filter(todo => todo.title && todo.userId),
      }));
  }

  getCurrentUserId = (currUserId) => {
    this.setState({
      selectedUserId: currUserId,
    });
  }

  onSelectHandler = (event) => {
    const statusType = event.target.value;
    const currState = [...this.state.initialTodos];

    if (statusType === 'completed') {
      this.setState({
        todos: currState.filter(todo => todo.completed === true),
      });
    }

    if (statusType === 'active') {
      this.setState({
        todos: currState.filter(todo => todo.completed === false),
      });
    }

    if (statusType === 'all') {
      this.setState({
        todos: [...currState],
      });
    }
  }

  clearUser = () => {
    this.setState({
      selectedUserId: null,
    });
  }

  onChangeHandler = (event) => {
    // eslint-disable-next-line no-unused-vars
    const searchElement = event.target.value;
    const filteredTodos = [...this.state.initialTodos]
      .filter(todo => todo.title.includes(searchElement));

    this.setState({
      todos: filteredTodos,
    });
  }

  render() {
    const { todos, selectedUserId } = this.state;

    return (
      <div className="App">
        <div className="App__sidebar">
          <TodoForm
            onChangeHandler={this.onChangeHandler}
            onSelectHandler={this.onSelectHandler}
          />
          <TodoList
            todos={todos}
            getCurrentUserId={this.getCurrentUserId}
            selectedUserId={this.state.selectedUserId}
          />
        </div>

        <div className="App__content">
          <div className="App__content-container">
            {selectedUserId ? (
              <CurrentUser
                userId={this.state.selectedUserId}
                clearUser={this.clearUser}
              />
            ) : 'No user selected'}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
