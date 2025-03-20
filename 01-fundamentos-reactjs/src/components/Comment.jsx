import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './avatar';
import { useState } from 'react';

export function Comment({content, onDeleteComment}) {

    function handleDeletecomment() 
    {
        onDeleteComment(content)
    }

    function handleLikeComment() 
    {
        setCommentLiked((state) => { 
            return state + 1
        });
    }

    const [commentLiked, setCommentLiked] = useState(0);

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

                        <button 
                            onClick={handleDeletecomment}
                            title="Deletar Comentário">
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{commentLiked}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}