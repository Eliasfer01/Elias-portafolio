



 function Main() {
    return (
        <>
            <style>
                    {`
                    .main {
                        background-color:#35311E;
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
                    
                    .proyectos{
                        background-color: #191919;
                        color: #fff;
                        padding: 10px;}

                    .caja_pro{
                        display: flex;
                        justify-content: space-between;
                        background-color: #191919;
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

                <div className="main2">
                    <div>
                    <h3>Desarrollador</h3>
                    <h4>Hola,Biemvenido</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi error, iste, exercitationem voluptatum perspiciatis eum earum corporis nihil repudiandae esse, saepe debitis eligendi quidem fugit omnis ipsum dolor est veniam!</p>
                    </div>
                    <div className="img">
                        <img src="../img/Hombre de negocios confiado.avif" alt="Hombre de negocios confiado" />
                    </div>
                </div>

                <div className="proyectos">
                    <h1>Proyectos</h1>
                    <div className="caja_pro">
                        <div>
                            <div></div>
                            <h3>Proyecto 1</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi error, iste, exercitationem voluptatum perspici</p>
                        </div>
                        <div>
                            <div></div>
                            <h3>Proyecto 1</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi error, iste, exercitationem voluptatum perspici</p>
                        </div>
                        <div>
                            <div></div>
                            <h3>Proyecto 1</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi error, iste, exercitationem voluptatum perspici</p>
                        </div>
                    </div>
                </div>

                <div>
                    <h1>Experiencia</h1>
                    <div>
                        <h3>Empresa 1</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi error, iste, exercitationem voluptatum perspici</p>
                    </div>
                </div>

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
