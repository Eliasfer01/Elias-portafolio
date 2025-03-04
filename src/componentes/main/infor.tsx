
import componentes from "../componentes.tsx";

function Main() {
    return (
        <>
            <div className="main_contenido">
                <componentes.Nav />
                <componentes.Saludo />
                <componentes.Proyectos />
                <componentes.Experiencia />
                <componentes.Estudi />
                <componentes.Footer />
            
            </div>
        </>
    );
}

export default Main;
