

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
            `}
        </style>
        <div className="nav_but">
            <button><img src="" alt="" />Contáctame</button> 
            <button><img src="" alt="" />Linkedin</button> 
            <button><img src="" alt="" />Github</button> 
                               
        </div> 
        </>
    );
}

export default ComponenteBoton;