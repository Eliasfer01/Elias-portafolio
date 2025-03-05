import "../../style/styleGlobal.css"
import iconos from "../iconos/iconos.tsx"


function ComponenteBoton(){
    return(
        <>
        <div className="button_saludo">
            <button className="button_saludo_button"><img className="button_saludo_img" src={iconos.correo} alt="#" /><a className="button_saludo_a" href="#">Contáctame</a></button> 
            <button className="button_saludo_button"><img className="button_saludo_img_linkedin" src={iconos.linkedin} alt="#" /><a className="button_saludo_a" href="#">Linkedin</a></button> 
            <button className="button_saludo_button"><img  className="button_saludo_img"src={iconos.githup} alt="#" /><a className="button_saludo_a" href="#">Githup</a></button> 
        </div> 
        </>
    );
}

export default ComponenteBoton;