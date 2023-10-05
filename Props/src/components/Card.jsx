import styles from '../components/Card.module.css'

function Card (props){
    return(
        <div className={styles.container}>
            <div className={styles.imgCard}>
                <img src={props.imgCard} alt="img-Card" className={styles.img}/>
            </div>
            <div className={styles.DescriçaoCard}>
                <h2>{props.title}</h2>
                <p>{props.text}</p>
                <button className={styles.btnCard}>{props.btntext}</button>
            </div>
        </div>
    )
}

export default Card 