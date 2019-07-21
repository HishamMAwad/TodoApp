import React, { Component } from 'react';



class AddTodo extends Component {

    state = {
        content: ''
    }

    changeHandle = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    submitHandle = (e) => {
        e.preventDefault();
        //console.log(this.state);
        this.props.addTodo(this.state);
        this.setState({
            content: ''
        })
    }


    render(){
        return(
            <div>
                <form onSubmit={this.submitHandle}>
                    <label>Add New Todo</label>
                    <input type="text" onChange={this.changeHandle} value={this.state.content}/>
                </form>
            </div>
        )
    }
}


export default AddTodo;