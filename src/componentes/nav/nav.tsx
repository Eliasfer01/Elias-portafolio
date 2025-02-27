
import Hello from '../button/but';


function Nav(){
    return(
        <>

      <style>
        {`
          header {
                  background-color: #0C101B;
                  color: #fff;
                  padding: 10px;
                  text-align: center;
                  width: 98.5%;
                  height: 50px;
                  diisplay: flex;
            
          nav {
                display: flex;
                justify-content: space-between;
                background-color:#14152D;
                backdrop-filter: blur(10px);
                border-radius: 20px;
                border: 1px solid #fff;
                color: #fff;
                height: 100%;
                width: 98.5%;
            }

          img {
                width: 100px;
            }

          .nav_nem {
                display: flex;
                align-items: center;
                margin-left: 10px;
            }

          .nav_but {
                display: flex;
                align-items: center;
                margin-right: 10px;
            }
        `}
      </style>

      <header>
        <nav>
            <div className='nav_nem'>Elias</div>
            <div className='nav_but'>
                <Hello text="Inicio" />
                <Hello text="Servicios" />
                <Hello text="Contacto" />
                <Hello  text="Acerca de"/>
                <Hello  text="CV"/>
            </div>
        </nav>
      </header>

    </>
    )
}

export default Nav;