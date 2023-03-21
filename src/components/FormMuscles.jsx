import styles from "./FormMuscles.module.css"
import Muscles from "./Muscles"
import {useContext} from "react"
import { TrainingPlanContext } from "../context/TrainingPlanContext";

function FormMuscles(){

    const {trainingPlan, setTrainingPlan} = useContext(TrainingPlanContext);

    console.log(trainingPlan);

    return <div className={styles.conteiner}>
        <div>
            <h2 className={styles.title}>Seleccione los musculos que te gustaria entrenar</h2>
        </div>
        <div className={styles.images}>
            <Muscles></Muscles>
        </div>
    </div>
}

export default FormMuscles