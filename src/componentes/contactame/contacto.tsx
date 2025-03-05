
import "../../style/styleGlobal.css";
import icons from "../iconos/iconos.tsx";

function  Contacto() {
    return(
        <>
          

            <div className="contactame_div">
                <div className="contactame_div1">
                    <img className="proyectos_h1_img" src={icons.trabajo} alt="#" />
                    <h1>Contactame</h1>
                </div>
                <div className="contactame_div2">
                    <div className="contactame_div2_1">
                        <p className="contactame_div2_1_p">Si deseas ponerte en contacto conmigo, puedes hacerlo a través de los siguientes medios:</p>
                        <div className="contactame_div2_1_div">gmail@gmail.com</div>
                        <div className="contactame_div2_1_div">+54 3114416280</div>
                        <div className="contactame_div2_1_div">ETELL</div>
                        <div className="contactame_div2_1_div_caja_button">
                            <button className="contactame_div2_1_button">LINKEDING</button>
                            <button className="contactame_div2_1_button">GITHGUP</button>
                        </div>
                    </div>

                    <div className="contactame_div2_2">
                        <form className="contactame_div2_2_form">
                            <input type="text" placeholder="Nombre" className="contactame_div2_2_form_iput"/>
                            <input type="text" placeholder="Correo" className="contactame_div2_2_form_iput"/>
                            <input type="text" placeholder="Mensaje" className="contactame_div2_2_form_iput_descrip"/>
                            <button className="contactame_div2_2_form_button">Enviar</button>
                        </form>
                    </div>
                </div>                 
            </div>
        
        
        </>
    )
}

export default Contacto;