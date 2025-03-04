import img2 from '../img/rickby.jpg';
import "../../style/styleGlobal.css";
import icons from "../iconos/iconos.tsx";

function Proyectos() {
    return (    
        <>
            <div className="proyectos">
                <div className='proyectos_h1_div'>
                    <img className='proyectos_h1_img' src={icons.trabajo} alt="#" />
                    <h1 className='proyectos_h1'>Proyectos</h1>
                </div>
                    <div className="caja_pro">
                        <div className="img_caja">
                            <img className='img_caja_img' src={img2} alt="Hombre de negocios confiado" />
                        </div>
                        <div className="contenido">
                            <h3 className="name_pro">Proyecto 1</h3>
                            <div className="tecnologias">
                                <div className='tecnologias_div'>typescript</div>
                                <div className='tecnologias_div'>Node</div>
                                <div className='tecnologias_div'>Express</div>
                                <div className='tecnologias_div'>MySQL</div>
                                <div className='tecnologias_div'>AWS</div>
                                <div className='tecnologias_div'></div>
                            </div>
                            <p className='proyecto_significado'>Plataforma web para la gestión de podcasts diseñada para facilitar la organización y almacenamiento de episodios en la nube. La aplicación permite a los usuarios gestionar sus contenidos de forma eficiente, integrando un sistema seguro de inicio de sesión.</p>
                            <div className="Enlases">
                                <div className='Enlase_div'>CODIGO</div>
                                <div className='Enlase_div'>DEMO</div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    );
}

export default Proyectos;