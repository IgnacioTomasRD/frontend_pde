import { useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { TrainingPlanContext } from "../../context/TrainingPlanContext";
import { getTypesOfTraining,getDifficulty,getWeight } from "../../utils/funcionesAPI";
import styles from "./FormTraining.module.css"

function FormTraining(){
    const [typesOfTraining,setTypesOfTraining] = useState(null);
    const [difficulty,setDifficulty] = useState(null);
    const [weight,setWeight] = useState(null);
    const [activeWeight,setActiveWeight] = useState(false);

    const navigateTo = useNavigate();

    const {trainingPlan, setTrainingPlan} = useContext(TrainingPlanContext);

    useEffect(() => {

        getTypesOfTraining(setTypesOfTraining);

        getDifficulty(setDifficulty);

        getWeight(setWeight);
        
    },[])

    function handleSubmit(e) {
        e.preventDefault();
  
        let type =e.target.elements.type.value;
        let difficulty = e.target.elements.difficulty.value;
        let duration = e.target.elements.duration.value;
        let days = e.target.elements.days.value;
        let weight = e.target.elements.weight.value;
        let typeOfPlanner = e.target.elements.planner.value;

        let object={
            typeOfTraining: type,
            typeOfDifficulty: difficulty,
            duration: duration,
            days:days,
            weight: weight,
            typeOfPlanner: typeOfPlanner
        }

        setTrainingPlan(object);

        navigateTo("/muscles");
    }

    function handleDisplay(e){
        if(e.target.value !== "FUERZA"){
            setActiveWeight(true);
        } else {
            setActiveWeight(false);
        }
    }

    return <div id="form" className={styles.conteiner_training}>
        <h1 className={styles.titleTraining}>CONSTRUYE TU VIDA FITNESS CON EL MEJOR ASESORAMIENTO</h1>
        <div className={styles.conteiner_form}>   
            <form onSubmit={handleSubmit}>
                <h1 className={styles.formTitle}>PLAN DE ENTRENAMIENTO PERSONALIZADO</h1>
                <label className={styles.formText}  htmlFor="itipo">Tipo de Entrenamiento</label>
                
                <select className = {styles.selectFormTraining} id = "itipo" onChange={handleDisplay} defaultValue = "default" name = "type">
                    <option value="default"> Selecciona una opción</option>
                    {
                        typesOfTraining ?  typesOfTraining.map( ty => 
                                    <option key= {ty.id} value = {ty.typeOfTraining}> {ty.typeOfTraining}</option>
                        ) : null
                    }
                </select>
                
                <label className={styles.formText} htmlFor="iduracion">Duración que desee el plan</label>
                
                <input className={styles.input_formTraining} type="number" min={1} placeholder="en meses" name = "duration"/>

                <label className={styles.formText} htmlFor="idays">Dias por semana </label>
                <input className={styles.input_formTraining} type="number" min={1} max ={7} name = "days"/>
                
                <label className={styles.formText}  htmlFor="idifficulty">Seleccione la dificultad</label>
                <select className = {styles.selectFormTraining} id = "idifficulty" defaultValue = "default" name = "difficulty">
                    <option value= "default" disabled> Selecciona una opción</option>
                    {
                        difficulty ?  difficulty.map( df => 
                                    <option key= {df.id} value = {df.difficulty}> {df.difficulty}</option>
                        ) : null
                    }
                </select>
                
                <label className={styles.formText}  htmlFor="iplanner">Seleccione el planificador</label>
                <div className={styles.conteinerInfo}>
                    <select id = "iplanner" defaultValue = "default" name = "planner">
                            <option value= "default" disabled> Selecciona una opción</option>
                            <option value= "normalPlanner" > NORMAL PLANNER </option>
                            <option value= "plusPlanner" > PLUS PLANNER </option>
                    </select>
                    <h2 >
                        <i className="fa-solid fa-circle-info"></i>
                    </h2>
                    <div>  
                    <p className = {styles.pInfo}>
                       PLAN NORMAL: UN MUSCULO X ENTRENAMIENTO<br/>
                        PLAN PLUS: ENTRENAMIENTO DE TODOS LOS MUSCULOS POR SEMANA
                    </p>
                </div>
                </div>
                
                <div className={activeWeight ? "" : styles.displayNone}>
                    <label className={styles.formText}  htmlFor="iweight">Peso del entrenamiento</label>
                    <select className = {styles.selectFormTraining} id = "iweight" defaultValue = "default" name = "weight">
                        <option value= "default" disabled> Selecciona una opción</option>
                        {
                            weight ?  weight.map( w => 
                            <option key= {w.id} value = {w.weight}> {w.weight}</option>
                            ) : null
                        }
                    </select>
                </div>
                <input className={styles.input_submit} type="submit" name ="form" value="Consiguelo!" /> 
            </form>
        </div>
    </div>
}
export default FormTraining;