


function Proyectos() {
    return (
        <>
            <style>
                    {`
                    .proyectos{
                        background-color:rgb(67, 5, 252);
                        color: #fff;
                        padding: 10px;}

                    .caja_pro{
                        display: flex;
                        justify-content: space-between;
                        background-color:  #0C101B;
                        white: 100%;
                        height: 250px;
                        color: #fff;
                        padding: 10px;
                        }
                    
                        .img_caja{
                            width: 50%;
                            height: 125px;
                            display: flex;
                            justify-content: center;
                            align-items: center
                            }

                        .contenido{
                            width: 50%;
                            height: 125px;
                            
                            }
                        .tecnologias{
                            display: flex;
                            justify-content: center;
                            
                            }

                        .tecnologias div{  
                            margin: 5px;
                            padding: 5px;
                        }

                         .name{
                            color: #0075FF;
                        }

                        .Enlases{
                            display: flex;
                            justify-content: center;
                        }
                        
                        .Enlases div{
                            margin: 5px;
                            padding: 5px;
                        }
                    
                    `}
            </style>

            <div className="proyectos">
                    <h1>Proyectos</h1>
                    <div className="caja_pro">
                        <div className="img_caja">
                            <img src="./img/relajado.jpg" alt="Hombre de negocios confiado" />
                        </div>
                        <div className="contenido">
                            <h3 className="name">Proyecto 1</h3>
                            <div className="tecnologias">
                                <div>typescript</div>
                                <div>Node</div>
                                <div>Express</div>
                                <div>MySQL</div>
                                <div>AWS</div>
                                <div></div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi error, iste, exercitationem voluptatum perspici</p>
                            <div className="Enlases">
                                <div>CODIGO</div>
                                <div>DEMO</div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    );
}

export default Proyectos;