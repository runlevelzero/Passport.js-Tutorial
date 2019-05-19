import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {
        title: ''
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        //this.setState({title: ''});
    }
    onChange = (e) => this.setState({[e.target.name] : e.target.value});
    
    render() {
    return (
        <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
            <input type='text' required="true" name='title' placeholder='Add Todo...' value={this.state.value} onChange={this.onChange} style={{flex: '10', padding: '5px'}} />
            <input type='submit' value="Add Item" className="btn" style={{flex: '1'}}/>
        </form>
    )
    }
}

export default AddTodo;
