import Hello from '../button/but';


function Saludo() {
    return(
        <>
                <style>
                        {`

                        .main2 {
                                
                                display: flex;
                                justify-content: space-between;
                                align-items: center;
                                color: #fff;
                                color: #fff;
                                padding: 10px;
                                width: 100%;
                                height: 400px;
                            }

                        .img{
                            width: 400px;
                            height: 100px;
                            }
                        
                        .info{
                            width: 600px;
                            height: 300px;
                            }

                        .nav_but {
                            display: flex;
                            align-items: center;
                            
                        }
                        
                        .name{
                            color: #0075FF;
                        }

                        `}
                </style>

                    <div className="main2">

                        <div className="info">
                            <h1><span className='name'>Hola, soy</span> Elias Fernandez.</h1>
                            <h3>Desarrollador Web</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi error, iste, exercitationem voluptatum perspiciatis eum earum corporis nihil repudiandae esse, saepe debitis eligendi quidem fugit omnis ipsum dolor est veniam!</p>
                            <div className="nav_but">
                                <Hello text="Contactame" />
                                <Hello text="Linkedin" />
                                <Hello  text="Github"/>
                            </div> 
                        </div>

                        <div className="img">
                            <img src="./img/relajado.jpg" alt="Hombre de negocios confiado" />    
                        </div>

                    </div>
        </>
    );
}

export default Saludo;