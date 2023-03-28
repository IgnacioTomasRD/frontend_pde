import "./viewTrainingPlan.css"
import { useNavigate } from 'react-router-dom';
import { useState , useEffect, useContext} from "react";
import React from 'react';
import Carrusel from "../carrusel/Carrusel";
import { TrainingPlanContext } from "../../context/TrainingPlanContext";
import generateGridArray from "../../utils/utils";



function ViewTrainingPlan(){
    const {trainingPlan} = useContext(TrainingPlanContext);
    const navigateTo = useNavigate();
    
    const trainings = trainingPlan.trainings;

    let  numberOfItemsToShow = 12;

    function redirectToTraining(e,i,j){
        e.preventDefault();
        navigateTo("/training/" + (i* numberOfItemsToShow + j+1)); // +1 porque los ids parten del 1
    }
    
    
    let grid = generateGridArray(trainings, numberOfItemsToShow);

    return<div className="conteiner"> 
    <div>
        <h1 className="title">
            PLAN DE ENTRENAMIENTO
        </h1>
        <h2 className="infoTraining">{"DIFICULTAD:" +trainingPlan.difficulty.typeOfDifficulty + "-PESO:" + trainingPlan.difficulty.weight}</h2>
    </div>
    <Carrusel
        grid={grid}
        idPrefix="training"
        cardComponent={(training,i, j) =>
            <div className="trainingCard">
                <h2 className="training">{training.name}</h2>
                <h3 className="muscles">{training.muscles.map(m => m.name).join(", ")}</h3>
                <div className="finalizado">
                    <label>FINALIZADO</label>
                    <input type="checkbox" name="input" value="" />
                </div>
                <div className="redirectToTraining">
                    <a onClick={(e) => redirectToTraining(e, i, j)}><p>Ver entrenamiento</p></a>
                </div>
            </div>
        }
        />
        </div>
}

export default ViewTrainingPlan;