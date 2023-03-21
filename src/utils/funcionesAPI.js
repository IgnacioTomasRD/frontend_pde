
const getTypesOfTraining = async function(state){
    try {
        const response = await fetch('http://localhost:3000/typesOfTraining');
        const data = await response.json();
        state(data);
      } catch (error) {
        console.error(error);
      }
}

const getDifficulty = async function(state){
  try {
      const response = await fetch('http://localhost:3000/difficulty');
      const data = await response.json();
      state(data);
    } catch (error) {
      console.error(error);
    }
}
const getWeight = async function(state){
  try {
      const response = await fetch('http://localhost:3000/weight');
      const data = await response.json();
      state(data);
    } catch (error) {
      console.error(error);
    }
}

const getMuscles = async function(state){
  try {
      const response = await fetch('http://localhost:3000/muscle');
      const data = await response.json();
      state(data);
    } catch (error) {
      console.error(error);
    }
}

const getTrainingPlan = async function(state,trainingPlan){
  try {
    console.log(JSON.stringify(trainingPlan));
    const response = await fetch('http://localhost:3000/trainingPlan', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(trainingPlan)
    });
    const data = await response.json();
    // console.log(data);
    // state(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}



export {getTypesOfTraining,getDifficulty,getMuscles,getTrainingPlan,getWeight }