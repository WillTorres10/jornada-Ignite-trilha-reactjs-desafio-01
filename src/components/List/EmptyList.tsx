import styles from './EmptyList.module.css'
import Clipboard from "../../assets/Clipboard.svg";

export function EmptyList(){
    return (
        <div className={styles.emptyList}>
            <img src={Clipboard} />
            <div className={styles.content}>
                <h1>Você ainda não tem tarefas cadastradas</h1>
                <h2>Crie tarefas e organize seus itens a fazer</h2>
            </div>
        </div>
    )
}
