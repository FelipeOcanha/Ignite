import styles from './Post.module.css';

export function Post(){
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img src="https://avatars.githubusercontent.com/u/42205953?v=4"  className={styles.avatar}/>
                    <div className={styles.authorInfo}>
                        <strong>Felipe Ocanha</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time dateTime='2025-02-17 17:02:00' title="17 de fevereiro as 17:02">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p><a href="">jane.design/doctorcare</a></p>
                <p>
                    <a href="">#novoprojeto</a>{' '}
                    <a href="">#nlw</a>{' '}
                    <a href="">#rocketseat</a>
                </p>
            </div>
        </article>
    )
}