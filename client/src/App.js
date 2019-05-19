import React from 'react';
import uuid from 'uuid';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/pages/About';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';
import './App.css';




class App extends React.Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Take out the trash',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Dinner with Wife',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Meeting with Boss',
        completed: false
      }
    ]
  }
  changeMark = (id) => {
    console.log(id);
    this.setState({todos: this.state.todos.map(todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  }
  delTodo = (id) => {
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]
    })    
  }
  addTodo = (title) => {
    console.log(title);
    const newTodo = {
      id:uuid.v4(),
      title,
      completed: false
    }
    this.setState({todos: [...this.state.todos, newTodo]})
  }
  render() {
    console.log(this.state.todos);
    return (
      <Router>
          <div className="App">
            <div className="container">
              <Header />
              <Route exact path="/" render={props => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos todos={this.state.todos} changeMark={this.changeMark} delTodo={this.delTodo}/>
                </React.Fragment>
              )} />
              <Route path='/about' component={About}/>
              
            </div>
          </div>
      </Router>
    );
  }
  
}

export default App;
