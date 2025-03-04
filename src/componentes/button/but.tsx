import "../../style/styleGlobal.css";

interface HelloProps {
    text: string;
}

function FirtsComponent({ text }: HelloProps){
    return(
        <>
        <button className="button_nav"><a className="button_cv_a" href="#">{ text }</a></button>  
        </>
    );
}

export default FirtsComponent;