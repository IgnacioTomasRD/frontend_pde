import React, { createContext, useState } from "react";


export const TrainingPlanContext = createContext();

const trainingPlanObject = {
    trainings: [],
    difficulty: "facil",
    duration: null,
    typeOfTraining: null
}


export const TrainingPlanProvider = ({children}) => {
    const [trainingPlan,setTrainingPlan] = useState(trainingPlanObject);
    return(
        <TrainingPlanContext.Provider value={{trainingPlan,setTrainingPlan}}>
            {children}
        </TrainingPlanContext.Provider>
    )
}