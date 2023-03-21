import "./carrusel.css"

function Carrusel(props) {
      function rightArrow(grid, index,idPrefix){
        if(grid.length>(index+1)){
            return <a href={"#"+idPrefix+"-"+ (index+1)} className="rightArrow"><i className="fa-solid fa-chevron-right"></i></a>
        } else {
            return null;
        }
    }

    function leftArrow(grid, index,idPrefix){
        if(index!==0){
            return <a href={"#"+idPrefix+"-"+ (index-1)} className="leftArrow"><i className="fa-solid fa-chevron-left"></i></a>
        } else {
            return null;
        }
    }

    return (
      <div className="carrusel">
        {props.grid ? props.grid.map((gr, i) =>
          <div className="itemCarrusel" key={"itemCarrusel-" + i} id={props.idPrefix + "-" + i}>
            <div id={"tarjetaCarrusel-" + i} key={"tarjetaCarrusel-" + i} className="tarjetaCarrusel">
              <ul className ="ulCarrusel">
                {gr.map((e, j) =>
                  <li key={"li-" + j}>
                    {props.cardComponent(e,i, j)}
                  </li>
                )}
              </ul>
            </div>
            {leftArrow(props.grid,i,props.idPrefix)}
            {rightArrow(props.grid,i,props.idPrefix)}
          </div>
        ) : null}
      </div>
    );
  }


  export default Carrusel;