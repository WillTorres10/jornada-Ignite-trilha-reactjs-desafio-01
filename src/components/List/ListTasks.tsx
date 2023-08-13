import styles from "./ListTasks.module.css"
import {Task} from "../../App.tsx";
import {EmptyList} from "./EmptyList.tsx";
import {ListTaskItem} from "./ListTaskItem.tsx";

interface ListTasksProps {
    tasks: Task[];
    onToggleDone: (task: Task) => void;
    onDeleteTask: (task: Task) => void;
}
export function ListTasks({tasks, onToggleDone, onDeleteTask}: ListTasksProps) {
    const isEmpty = tasks.length === 0;
    let component = null;
    if (isEmpty) {
        component = <EmptyList />
    } else {
        component = tasks.map(task => {
            return (
                <ListTaskItem
                    key={task.id}
                    task={task}
                    onToggleDone={onToggleDone}
                    onDelete={onDeleteTask}
                />
            );
        })
    }
    return (
        <main className={styles.tasksList}>
            {component}
        </main>
    );
}
