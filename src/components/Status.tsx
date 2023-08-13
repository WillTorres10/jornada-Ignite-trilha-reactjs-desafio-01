import {Task} from "../App.tsx"
import styles from "./Status.module.css"

interface StatusProps {
    tasks: Task[];
}
export function Status({tasks}: StatusProps) {
    const totalTasks = tasks.length;
    const totalTasksDone = tasks.filter(task => task.done).length;
    let doneMessage = '0';
    if (totalTasks > 0) {
        doneMessage = `${totalTasksDone} de ${totalTasks}`;
    }
    return (
      <div className={styles.status}>
          <div className={styles.total}>
              Tarefas criadas <span>{totalTasks}</span>
          </div>
          <div className={styles.done}>
              Concluídas <span>{doneMessage}</span>
          </div>
      </div>
    );
}
