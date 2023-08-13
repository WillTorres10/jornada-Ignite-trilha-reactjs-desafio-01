import {Task} from "../../App.tsx";
import styles from "./ListTaskItem.module.css"
import {Check, Trash} from "phosphor-react";

interface ListTaskItemProps {
    task: Task;
    onToggleDone: (task: Task) => void;
    onDelete: (task: Task) => void;
}
export function ListTaskItem({task, onToggleDone, onDelete}: ListTaskItemProps) {

    const classNameCheckbox = task.done ? styles.checkboxChecked : styles.checkboxUnchecked;
    const checkIcon = task.done ? <Check weight={"bold"} /> : null;
    const trashButtonClassName = task.done ? styles.trashButtonDone : styles.trashButton;
    return (
        <div className={styles.listItem} >
            <div className={classNameCheckbox} onClick={() => onToggleDone(task)}>
                {checkIcon}
            </div>
            <p className={task.done ? styles.textDone : undefined}>
                {task.content}
            </p>
            <div className={trashButtonClassName} onClick={() => onDelete(task)}>
                <button type="button">
                    <Trash weight={"bold"} />
                </button>
            </div>
        </div>
    );
}
