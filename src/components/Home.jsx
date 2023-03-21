import styles from "./Home.module.css"

function Home(){
    return (
        <div className={styles.container}>
            <h1 className={styles.titleHome}>SÉ TU MEJOR VERSIÓN</h1>
            <h2 className={styles.subtitleHome}>CON NOSOTROS</h2> 
            <a className= {styles.reference} href="#form"><p>OBTEN TU PLAN DE <br></br>ENTRENAMIENTO</p></a>
        </div>
    )
}
export default Home
