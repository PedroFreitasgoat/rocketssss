import { Coment } from './Coment'
import styles from './Posto.module.css'

export function Post() {
    return(
        <article className={styles.post}>
            <header>
            <div className={styles.author}>
                <img className={styles.avatar} src="https://github.com/PedroFreitasgoat.png" alt="" />
                <div className={styles.authorInfo}>
                    <strong>Pedro Freitasssss</strong>
                    <span>Web Developer</span>
                </div>
            </div>

            <time title='7 de Agostto ás 16:42h' datetime="2024-08-07 16:42:00">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Opa Gurizada, suave</p>
                <p>Meu nome é Pedro e eu sou op milioor, daq alguns meses estarei gahando mais de 5k por mês, ANOTEMM</p>
                <p><a href="">pedro.freitas/dockwhor/</a></p>
                <p><a href=""></a>#OMILLIOR #siiiu #pedrokas</p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixei seu feedback</strong>

                <textarea 
                placeholder='Deixei um comentário'
                />

                  <footer>
                     <button type='submite'>Publicar</button>
                </footer>  
            </form>

            <div className={styles.comentList}>
                <Coment />
            </div>
        </article>
    )
}