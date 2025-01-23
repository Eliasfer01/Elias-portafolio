
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
                width: 100%;
        nav {
              display: flex;
              justify-content: space-between;
              background-color: #191919;
              color: #fff;
              padding: 10px;
          }
        button {
              background-color: #000;
              color: #fff;
              border: none;
              cursor: pointer;
          }
        button:hover {
              background-color: #fff;
              color: #000;
          }
        img {
              width: 100px;
          }
        `}
      </style>


      <header>
        <img src="#" alt="Logo" />
        <nav>
          <button>About Me</button>
          <h3>Elias Ferrnandez</h3>
          <div>
            <button>Project</button>
            <button>Contact</button>
          </div>
         
        </nav>
      </header>



    </>
    )
}

export default Nav;