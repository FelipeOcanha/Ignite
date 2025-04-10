import { Avatar } from './avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';
import {format, formatDistanceToNow} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react';

export function Post({author, publishedAt, content}){
    const [comments, setComments] = useState([
        'Post muito bacana, hein?!'
    ]);

    const [newCommentText, setNewCommentText] = useState('');
    
    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    });

    const publsiedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    });


    function handleCreateNewComment() 
    {
        event.preventDefault();
        //const newCommentText = event.target.comment.value;
        setComments([...comments, newCommentText]);
        //event.target.comment.value = ""; Programação Imperativa
        setNewCommentText('');
    }

    function handleNewCommentChange()
    {
        event.target.setCustomValidity("");
        setNewCommentText(event.target.value);
    }

    function deleteComment(commentToBeDeleted) {
        const commentsWithoutDeletedOne = comments.filter(comment =>
          comment != commentToBeDeleted
        );

        setComments(commentsWithoutDeletedOne);
    }

    function handleNewCommentInvalid(){
        event.target.setCustomValidity("Este campo é obrigatório!");
    }

    const isNewCommentEmpty = newCommentText.length == 0;
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                <Avatar src={author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time dateTime={publishedAt.toISOString()} title={publishedDateFormatted}>
                    {publsiedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                { content.map(line => 
                {
                    if(line.type == 'paragraph')
                        return <p key={line.content}>{line.content}</p>
                    else if(line.type == 'link')
                        return <p key={line.content}><a href="#">{line.content}</a></p>
                }) }
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
            
                <strong>Deixe seu feedback</strong>
                <textarea
                    name="comment"
                    placeholder="Deixe um comentário"
                    onChange={handleNewCommentChange}
                    value={newCommentText}
                    required 
                    onInvalid={handleNewCommentInvalid}
                />
                
                <footer>
                    <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {
                    comments.map(comment => {
                        return <Comment
                            key={comment}
                            content={comment}
                            onDeleteComment={deleteComment}
                        />
                    })
                }
            </div>
        </article>
    )
}