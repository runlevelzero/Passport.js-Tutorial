import React from 'react';
//import uuid from 'uuid';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/pages/About';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';
import SampleCard from './components/SampleCard';
import axios from 'axios';
import './App.css';




class App extends React.Component {
  state = {
    todos: []
  }

  componentDidMount() {
    axios.get("http://localhost:3000/api/getlist")
      .then(res => this.setState({todos:res.data}));
      //this.setState({todos:res.data})
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
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]}));
        
  }
  addTodo = (title) => {
    axios.post('http://localhost:3000/api/addtolist', {
      title,
      completed: false
    }).then(res => console.log(res));
    //this.setState({todos: [...this.state.todos, res.data]})
    
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
