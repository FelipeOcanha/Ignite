import { Avatar } from './avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';
import {format, formatDistanceToNow} from 'date-fns';
import {ptBR} from 'date-fns/locale/pt-BR';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

interface Author {
    name: string;
    role: string;
    avatarUrl: string;
}

export interface PostType {
    id: number;
    author: Author;
    publishedAt: Date;
    content: Content[];
}

interface PostProps {
    post: PostType
}



interface Content {
    type: 'paragraph' | 'link';
    content: string
}

export function Post({post} : PostProps){
    const [comments, setComments] = useState([
        'Post muito bacana, hein?!'
    ]);

    const [newCommentText, setNewCommentText] = useState('');
    
    const publishedDateFormatted = format(post.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    });

    const publsiedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
        locale: ptBR,
        addSuffix: true
    });


    function handleCreateNewComment(event: FormEvent) 
    {
        event.preventDefault();
        //const newCommentText = event.target.comment.value;
        setComments([...comments, newCommentText]);
        //event.target.comment.value = ""; Programação Imperativa
        setNewCommentText('');
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>)
    {
        event.target.setCustomValidity("");
        setNewCommentText(event.target.value);
    }

    function deleteComment(commentToBeDeleted: string) {
        const commentsWithoutDeletedOne = comments.filter(comment =>
          comment != commentToBeDeleted
        );

        setComments(commentsWithoutDeletedOne);
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity("Este campo é obrigatório!");
    }

    const isNewCommentEmpty = newCommentText.length == 0;
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                <Avatar src={post.author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{post.author.name}</strong>
                        <span>{post.author.role}</span>
                    </div>
                </div>

                <time dateTime={post.publishedAt.toISOString()} title={publishedDateFormatted}>
                    {publsiedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                { post.content.map(line => 
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