import React, { Component } from 'react'

export default class Todo extends Component {
    constructor(){
        super();
        this.state={
            tasks:[{task:"task1",id:1},{task:"task2",id:2},{task:"task3",id:3}],
            currTask:""
        }
    }

    handleTask = (e)=>{
        this.setState({
            currTask: e.target.value
        })
    }

    handleSubmit=()=>{
        this.setState({
            tasks:[...this.state.tasks,{task:this.state.currTask,id:this.state.tasks.length+1}],
            currTask:""
        })
    }

    handleDelete = (id)=>{
        let newArr = this.state.tasks.filter((t)=>{
            return t.id !== id;
        })
        this.setState ({
            tasks:[...newArr]
        })
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.currTask} onChange={this.handleTask}/>
                <button onClick={this.handleSubmit} disabled={!this.state.currTask}>Submit</button>
                {/* <p>{this.state.tasks[0].task}</p> */}
                <ul>
                {
                    this.state.tasks.map((tasko)=>(
                        <li key={tasko.id}>
                            <p>{tasko.task}</p>
                            <button onClick={()=>this.handleDelete(tasko.id)}>Delete</button>
                        </li>
                    ))
                }
                </ul>
            </div>
        )
    }
}


// export const arr = [1, 2, 3, 4];