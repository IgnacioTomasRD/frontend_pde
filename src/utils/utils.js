

export default function generateGridArray(array,numberOfCards){
    let numberOfGrid = Math.ceil(array.length/numberOfCards); 
    let grid = [];
    for(let i =0;i<numberOfGrid;i++){
        let from = i*numberOfCards;
        let to = array.length > (i+1)*numberOfCards ?  (i+1)*numberOfCards : array.length
        let aux = array.slice(from,to);
        grid.push(aux);
    }
    return grid;
}