import "./viewExercises.css"
import { useState , useEffect, useContext} from "react";
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { TrainingPlanContext } from "../../context/TrainingPlanContext";
import React from 'react';
import  generateGridArray  from "../../utils/utils";
import Carrusel from "../carrusel/Carrusel";;

function ViewExercises(){
    const {trainingPlan, setTrainingPlan} = useContext(TrainingPlanContext);
    const navigateTo = useNavigate();   
    let { id } = useParams();

    let training = trainingPlan.trainings.find(tr => (tr.id+1) == id );

    let exercises = training.exercises;
    
    let numberOfCards = 8;
    let grid = generateGridArray(exercises,numberOfCards);

    return <div className="conteiner"> 
    <h1 className="title">
        {training.name.toUpperCase() + ": " + training.muscles.map(m => m.name).join(", ")}
    </h1>
    
    <Carrusel
        grid ={grid}
        idPrefix = "exercise"
        cardComponent={(e,i,j) =>
            <div className="exerciseCard" >
                <div className="nameTraining">
                    <h2 className="exercise" > {e.exercise.name} </h2>
                </div>
                <div className="info">
                    <h3>REPETICIONES: {e.reps}</h3>
                    <h3>SERIES: {e.series}</h3>
                    <h3>MUSCULO: {e.exercise.musclesInvolved[0].name}</h3>
                </div>
                <div className ="conteinerVideo" >
                        <iframe src={"https://www.youtube.com/embed/"+e.exercise.video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
          </div> 
        }
    />
    <div className ="volver">
                        <button onClick={(e) => navigateTo("/trainingPlan")}className="botonVolver" >VOLVER</button>
    </div>
    </div>
}

export default ViewExercises;
    // const exercises = [];
    // for(let aux = 0; aux<40; aux++){
    //     exercises.push({exercise: {name: "pecho",difficulty: "dificil",video: "Wjq0aNDJMiM"},reps:12,series:12});
    // }