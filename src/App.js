import React, {Component} from 'react';
import './App.css';
import Title from './components/title';
import Layout from "./components/layout";
import TaskList from "./components/task-list";
import Input from "./components/input";




class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            newTask: "",
            tasks: []
        }
    }

    handleTaskChange = (event) => {
        this.setState({
            newTask: event.target.value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let newTasks = this.state.tasks;
        newTasks.push(this.state.newTask)
        this.setState({
            newTask: "",
            tasks: newTasks
        })
    }
    handleDelete = (id) => {
        let newTasks = this.state.tasks;
        newTasks.splice(id, 1)
        this.setState({
            tasks: newTasks,
        })
    }


    render() {
        return (
            <Layout>
                {/* <div className="container">*/}
                <Title/>
                {/*<h1 className="title">To do list <span aria-label="emoji" role="img">🔥</span></h1>*/}
                {/*<input onChange={this.handleTaskChange} type="text" className="new-task"/>*/}

                {/*<form onSubmit={this.handleSubmit}>
                    <input value={this.state.newTask} onChange={this.handleTaskChange} type="text"
                           className="new-task"/>
                </form>*/}
                <Input handleSubmit={this.handleSubmit} handleTaskChange={this.handleTaskChange}
                       value={this.state.newTask}/>

                <TaskList tasks = {this.state.tasks} handleDelete={this.handleDelete}/>
                {/*<h2 className="test-label">{this.state.newTask}</h2>*/} */}

                {/* {this.state.tasks.map(task => <Task value={task}/>)}
                {/* <div className="task-container">
                             <h3 className="task">{task}</h3>
                         </div>*/}
                {/* )} */}
                {/*</div>*/}

            </Layout>
        );
    }
}

export default App;
