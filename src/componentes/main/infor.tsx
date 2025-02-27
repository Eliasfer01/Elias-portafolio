
import Saludo from "../inico_web/saludo.tsx";
import Proyectos from "../proyectos/proyectos.tsx";
import Experi from "../experiencia/experi.tsx";


 function Main() {
    return (
        <>
            <style>
                    {`
                    .main {
                        background-color:#0C101B;
                        color: #fff;
                        width: 98.5%;
                       padding: 10px;
                        }

                    .main2 {
                            display: flex;
                            justify-content: space-between;
                            color: #fff;
                            padding: 10px;
                        }
                    
                    .img{
                        width: 50%;
                        height: 50%;
                        
                        }
                    `}
            </style>

            <div className="main">

                <Saludo />
                <Proyectos />
                <Experi />

                <div>
                    <h1>Estudios</h1>
                    <div>
                        <h3>Universidad 1</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi error, iste, exercitationem voluptatum perspici</p>
                    </div>
                </div>

                <div>
                    <h1>Idiomas</h1>
                    <div>
                        <h3>Ingles</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi error, iste, exercitationem voluptatum perspici</p>
                    </div>
                </div>
                
                <div>
                    <h1>Idiomas</h1>
                    <div>
                        <h3>Ingles</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi error, iste, exercitationem voluptatum perspici</p>
                    </div>
                </div>

            
            </div>
        </>
    );
}

export default Main;
