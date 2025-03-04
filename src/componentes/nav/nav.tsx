
import Hello from '../button/but';
import "../../style/styleGlobal.css"


function Nav(){
    return(
        <>

      <style>
        {`
          img {
                width: 100px;
            }

          .nav_but {
                display: flex;
                align-items: center;
            }
        `}
      </style>

      <header className='header_portafolio'>
        <nav className='nav_portafolio'>
            <div className='nav_nem'>Elias</div>
            <div className='nav_but'>
                <div className='div_nav'><a className='div_nav_p' href="#">Inicio</a></div>
                <div className='div_nav'><a className='div_nav_p' href="#">Servicios</a></div>
                <div className='div_nav'><a className='div_nav_p' href="#">Contacto</a></div>
                <div className='div_nav'><a className='div_nav_p' href="#">Acerca de</a></div>
                <Hello  text="CV"/>
            </div>
        </nav>

      </header>   

    </>
    )
}

export default Nav;