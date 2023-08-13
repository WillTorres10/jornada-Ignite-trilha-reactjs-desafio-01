import styles from './AddBar.module.css'
import {PlusCircle} from 'phosphor-react'
import {ChangeEvent, FormEvent, useState} from "react";

interface AddBarProps {
    onAdd: (value: string) => void;
}

export function AddBar({onAdd}: AddBarProps) {
    const [newTask, setNewTask] = useState('');

    function handleNewTask(event: ChangeEvent<HTMLInputElement>) {
        setNewTask(event.target.value);
    }

    function handleSubmitTask(event: FormEvent) {
        event.preventDefault();
        onAdd(newTask);
        setNewTask('');
    }

    const disableSubmit = newTask.trim().length === 0;

    return (
        <form className={styles.addBar} onSubmit={handleSubmitTask}>
            <input type="text" value={newTask} onChange={handleNewTask} />
            <button type="submit" disabled={disableSubmit}>
                Criar
                <PlusCircle size={16} weight={'bold'} />
            </button>
        </form>
    )
}
