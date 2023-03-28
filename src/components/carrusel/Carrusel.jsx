import LeftArrow from "../arrows/leftArrow";
import RightArrow from "../arrows/rightArrow";
import "./carrusel.css"

function Carrusel(props) {
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
            <LeftArrow grid={props.grid} index={i} idPrefix = {props.idPrefix}/>
            <RightArrow grid={props.grid} index={i} idPrefix = {props.idPrefix}/>
          </div>
        ) : null}
      </div>
    );
  }


  export default Carrusel;