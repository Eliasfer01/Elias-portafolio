import Hello from '../button/but';
import img from '../img/relajado.jpg';


function Saludo() {
    return(
        <>
                <style>
                        {`

                        .main2 {
                                background-color: #0C101B;
                                display: flex;
                                justify-content: space-between;
                                align-items: center;
                                color: #fff;
                                color: #fff;
                                padding: 1px;
                                width: 100%;
                                height: 400px;
                            }

                        .img_blok{
                            width: 20%;
                            height: 200px;
                            background-color: blue;
                            margin: 10px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            border-radius: 100px;
                            }

                        .img_blok img{
                            width: 100%;
                            height: 100%;
                            border-radius: 100px;
                            }
                        
                        .info{
                            width: 80%;
                            height: 400px;
                            font-size: 23px;
                            }

                        .info p{
                            font-size: 20px;
                            font-family: 'Sans-serif';
                            }

                        .nav_but {
                            display: flex;
                            align-items: center;
                            
                        }
                        
                        .name{
                            color:rgb(67, 5, 252);
                        }

                        `}
                </style>

                    <div className="main2">

                        <div className="info">
                            <h1><span className='name'>Hola, soy</span> Elias Fernandez.</h1>
                            <h3>Desarrollador Web</h3>
                            <p>Mi objetivo es desarrollar soluciones digitales que marquen la diferencia. Como Analista de Análisis y Desarrollo de Software, combino mi formación académica con un enfoque práctico para crear aplicaciones web dinámicas y escalables. Me apasiona resolver problemas complejos y aportar valor a través de la tecnología. Estoy listo para asumir nuevos retos y contribuir al crecimiento de tu equipo.</p>
                            <div className="nav_but">
                                <Hello text="Contactame"/>
                                <Hello text="Linkedin"/>
                                <Hello text="Github"/>
                            </div> 
                        </div>
                        <div className="img_blok">
                            <img src={img} alt="Hombre de negocios confiado"/>    
                        </div>
                    </div>
        </>
    );
}

export default Saludo;