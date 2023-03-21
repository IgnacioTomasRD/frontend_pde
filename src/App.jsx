import Home from "./components/Home";
import FormMuscles from "./components/FormMuscles";
import FormTraining from "./components/FormTraining"
import ViewTrainingPlan from "./components/ViewTrainingPlan"
import ViewExercises from "./components/ViewExercises"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { TrainingPlanProvider } from "./context/TrainingPlanContext";

 
function App(){

    return <>
    <TrainingPlanProvider>
        <BrowserRouter>
            <Routes>
                <Route path = "/" element={<><Home /> <FormTraining /></>}></Route>
            </Routes>
            <Routes>
                <Route path ="/muscles" element={<FormMuscles></FormMuscles>}></Route>
            </Routes>
            <Routes>
                <Route exact path ="/trainingPlan" element={<ViewTrainingPlan></ViewTrainingPlan>}></Route>
            </Routes>
            <Routes>
                <Route exact path ="/training/:id" element={<ViewExercises></ViewExercises>}></Route>
            </Routes>
        </BrowserRouter>
    </TrainingPlanProvider>    
    </>;
}

export default App;