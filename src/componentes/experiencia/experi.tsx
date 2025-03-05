import "../../style/styleGlobal.css";
import icons from "../iconos/iconos.tsx";

function Exper() {
    return(
        <>
        <div className="experiencia">
            <div className="experiencia_h1_div">
                <img className="proyectos_h1_img" src={icons.trabajo} alt="#" />
                <h1 className="experiencia_h1_div_texto">Experiencia Laboral</h1>
            </div>
            <div className="experiencia_caja">
                <h2 className="experiencia_caja_h3">Empresa 1</h2>
                <p className="experiencia_caja_p">Pegasus Software</p>
                <p className="experiencia_caja_p_ano">2024-2025</p>
                <p className="experiencia_caja_p_contenido">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime sit quos distinctio quasi repudiandae dicta ipsa accusantium molestias tenetur, rerum earum perferendis, voluptatum corrupti minus doloribus ea, inventore laborum error?</p>
            </div>
        </div>
        </>
    );
}

export default Exper;