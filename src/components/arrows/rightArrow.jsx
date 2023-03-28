import "./rightArrow.css"

function RightArrow({grid, index,idPrefix}){
    if(grid.length>(index+1)){
        return <a href={"#"+idPrefix+"-"+ (index+1)} className="rightArrow"><i className="fa-solid fa-chevron-right"></i></a>
    } else {
        return null;
    }
}

export default RightArrow;