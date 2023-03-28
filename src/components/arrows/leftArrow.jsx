import "./leftArrow.css"

function LeftArrow({grid, index,idPrefix}){
    if(index!==0){
        return <a href={"#"+idPrefix+"-"+ (index-1)} className="leftArrow"><i className="fa-solid fa-chevron-left"></i></a>
    } else {
        return null;
    }
}

export default LeftArrow;