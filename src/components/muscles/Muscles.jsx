
import styles from "./Muscles.module.css"
import { useState , useEffect, useContext} from "react";
import {getMuscles, getTrainingPlan} from "../../utils/funcionesAPI"
import { useNavigate } from 'react-router-dom';
import { TrainingPlanContext } from "../../context/TrainingPlanContext";

function Muscles(){
    const [muscles,setMuscles] = useState(null);
    const navigateTo = useNavigate();
    const {trainingPlan, setTrainingPlan} = useContext(TrainingPlanContext);

    
    useEffect(() => {
        getMuscles(setMuscles);
    },[]);
    
    async function handleSubmit(e){
        e.preventDefault();
        const selectedMuscles = [];
        const checkedBoxes = document.querySelectorAll('input[name="muscles"]:checked');
        for (let i = 0; i < checkedBoxes.length; i++) {
          selectedMuscles.push(checkedBoxes[i].value);
        }

        let muscles=  selectedMuscles.map(s => ({name: s, subMuscles: []}));


        let object = {... trainingPlan,muscles};


        await getTrainingPlan(setTrainingPlan,object);
        
       
 
        navigateTo("/trainingPlan");
    }


    return <div className={styles.conteiner}>
        <form onSubmit={handleSubmit}>
            <ul className={styles.list}>
                {
                muscles ? muscles.map((m,index) =>{
                return <li key={index}>
                            <label className={styles.option_item}>
                                <input className={styles.checkbox} value = {m.name} type="checkbox" name ="muscles" />
                                <div className={styles.option_inner}>
                                    <div className ={styles.icon}>
                                    <figure>     
                                            <img  key = {index} src={m.img} alt ={m.name} />
                                            <figcaption >
                                                <p key = {index}> {m.name.toUpperCase()} </p>
                                            </figcaption>
                                    </figure>
                                    </div>
                                    
                                </div>
                            </label>
                        </li>
                } ): null }
            </ul>
            <div className={styles.containersubmit}>
                <input className={styles.submit} type="submit" name ="form" value="YA ESTOY LISTO!"/>
            </div>
        </form>
        
    </div>
}

export default Muscles