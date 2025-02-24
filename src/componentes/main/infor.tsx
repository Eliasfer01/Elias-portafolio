
 function Main() {
    return (
        <>
            <style>
                    {`
                    .main {
                        background-color:green;
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
                    `}
            </style>

            <div className="main">

                <div className="main2">
                    <div>texto</div>
                    <div><img src="#" alt="#" /></div>
                </div>

                <div className="proyectos">
                    <h1>Proyectos</h1>
                    <div className="caja_pro">
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Main;
