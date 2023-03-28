import Home from "./components/home/Home";
import FormMuscles from "./components/formMuscles/FormMuscles";
import FormTraining from "./components/formTraining/FormTraining"
import ViewTrainingPlan from "./components/trainingPlan/ViewTrainingPlan"
import ViewExercises from "./components/exercises/ViewExercises"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { TrainingPlanProvider } from "./context/TrainingPlanContext";

 
function App(){

    return <>
    <TrainingPlanProvider>
        <BrowserRouter>
            <Routes>
                <Route path = "/" element={<><Home /> <FormTraining /></>} />
            </Routes>
            <Routes>
                <Route path ="/muscles" element={<FormMuscles></FormMuscles>} />
            </Routes>
            <Routes>
                <Route exact path ="/trainingPlan" element={<ViewTrainingPlan></ViewTrainingPlan>}/>
            </Routes>
            <Routes>
                <Route exact path ="/training/:id" element={<ViewExercises></ViewExercises>}/>
            </Routes>
        </BrowserRouter>
    </TrainingPlanProvider>    
    </>;
}

export default App;