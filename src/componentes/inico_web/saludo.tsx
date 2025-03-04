import componenst from "../componentes.tsx";
import img from '../img/Elias.png';
import "../../style/styleGlobal.css";

function Saludo() {
    return(
        <>
                    <div className="main2">
                        <div className="info">
                            <h1><span className='name'>Hola, soy</span> Elias Fernandez.</h1>
                            <h3>Desarrollador Web</h3>
                            <p className='info_p'>Mi objetivo es desarrollar soluciones digitales que marquen la diferencia. Como Analista de Análisis y Desarrollo de Software, combino mi formación académica con un enfoque práctico para crear aplicaciones web dinámicas y escalables. Me apasiona resolver problemas complejos y aportar valor a través de la tecnología. Estoy listo para asumir nuevos retos y contribuir al crecimiento de tu equipo.</p>
                            <componenst.Button2 />
                        </div>
                        <div className="img_blok">
                            <img className="img_blok_img" src={img} alt="Hombre de negocios confiado"/>    
                        </div>
                    </div>
        </>
    );
}

export default Saludo;