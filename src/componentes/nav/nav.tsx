
import Hello from '../button/but';


function Nav(){
    return(
        <>

      <style>
        {`
        header {
                background-color:#26244A;
                color: #fff;
                padding: 10px;
                text-align: center;
                width: 98.5%;
                height: 50px;
        nav {
              display: flex;
              justify-content: space-between;
              background-color: #26244A;
              color: #fff;
              height: 100%;
              width: 98.5%;
          }
        img {
              width: 100px;
          }
        `}
      </style>

      <header>
        <nav>
          <Hello text="Inicio" />
          <Hello text="Servicios" />
          <Hello text="Contacto" />
          <Hello  text="Acerca de"/>
        </nav>
      </header>

    </>
    )
}

export default Nav;