
interface HelloProps {
    text: string;
  }

function FirtsComponent({ text }: HelloProps){
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
            `}
        </style>

        <button>{ text }</button>  
        </>
    );
}

export default FirtsComponent;