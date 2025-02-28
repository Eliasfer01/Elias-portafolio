import iconos from "../iconos/iconos";

function ComponenteBoton(){
    return(
        <>
        <style>
            {`
            button {
                    background-color: #000;
                    border-radius: 10px;
                    width: 100px;
                    height: 30px;
                    margin: 10px;
                    color: #fff;
                    border: none;
                    cursor: pointer;
                }
                button:hover {
                    background-color: #fff;
                    color: #000;
                }
                .nav_but {
                            display: flex;
                            align-items: center;
                            
                }

                .nav_but button{
                    margin: 10px;
                    padding: 5px;
                    width: 15px;
                    height: 15px;
                    display: flex;
                    border: none;
                    cursor: pointer;
                }
                
                .nav_but button img{
                   
                    width: 5px;
                    height: 5px;
                    
                }
            `}
        </style>
        <div className="nav_but">
            <div><img src="" alt="#" />Contáctame</div> 
            <div><img src={iconos.linkedin} alt="#" />Linkedin</div> 
            <div><img src={iconos.githup} alt="#" />Github</div> 
                               
        </div> 
        </>
    );
}

export default ComponenteBoton;