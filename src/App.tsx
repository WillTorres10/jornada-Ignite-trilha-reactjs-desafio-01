import {Header} from "./components/Header.tsx";
import {AddBar} from "./components/AddBar.tsx";
import {Status} from "./components/Status.tsx";

import './global.css'
import styles from './App.module.css'
import {useState} from "react";
import {ListTasks} from "./components/List/ListTasks.tsx";

export interface Task {
    id: number;
    content: string;
    done: boolean;
}
function App() {
    const [tasks, setTasks] = useState<Task[]>([]);

    function addTask(content: string) {
        const newTask: Task = {
            id: Math.random(),
            content,
            done: false
        };
        setTasks([...tasks, newTask]);
    }

    function removeTask(task: Task) {
        const newTasks: Task[] = tasks.filter(t => t.id!== task.id);
        setTasks(newTasks);
    }

    function toggleTaskDone(task: Task) {
        const taskIdxOnList = tasks.findIndex((t) => t.id === task.id);
        tasks[taskIdxOnList].done =!tasks[taskIdxOnList].done;
        setTasks([...tasks]);
    }

    return (
        <div>
            <Header/>
            <div className={styles.wrapper}>
                <AddBar onAdd={addTask}/>
                <Status tasks={tasks} />
                <ListTasks tasks={tasks} onToggleDone={toggleTaskDone} onDeleteTask={removeTask} />
            </div>
        </div>
    );
}

export default App
