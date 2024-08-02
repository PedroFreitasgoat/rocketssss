import styles from './Avatar.module.css'

export function Avatar(props) {
    return(
        <img className={props.hasBorder ? styles.avatarWhitborder : styles.avatar} 
        src={props.src}/>    
    )
}