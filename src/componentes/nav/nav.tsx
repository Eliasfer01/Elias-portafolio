
import Hello from '../button/but';


function Nav(){
    return(
        <>

      <style>
        {`
        header {
                background-color:  #191919;
                color: #fff;
                padding: 10px;
                text-align: center;
                width: 98.5%;
        nav {
              display: flex;
              justify-content: space-between;
              background-color: #191919;
              color: #fff;
              padding: 10px;
          }
        img {
              width: 100px;
          }
        `}
      </style>


      <header>
        <nav>
          <Hello />
          <h3>Elias Ferrnandez</h3>
          <Hello />
          <Hello />
        </nav>
      </header>



    </>
    )
}

export default Nav;