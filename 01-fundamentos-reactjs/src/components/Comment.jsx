import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './avatar';

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/maykbrito.png"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Felipe Ocanha</strong>
                            <time dateTime='2025-02-17 17:02:00' title="17 de fevereiro as 17:02">Cerca de 1h atrás</time>
                        </div>

                        <button title="Deletar Comentário">
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>Muito bom Devon, Parabéns</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}