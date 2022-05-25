import React from 'react'; 

function Header() {
    return(
      <>
        <nav className="py-2 bg-light border-bottom">
          <div className="container d-flex flext-wrap">
            <ul className="nav me-auto">
              <li className="nav-item">
                <a href='/' className="nav-link link-dark px-2 active" aria-current="page">Home</a>
              </li>
              <li className="nav-item"> <a href="Features" className="nav-link link-dark px-2">Features</a></li>
              <li className="nav-item"> <a href="FAQs" className="nav-link link-dark px-2">FAQs</a></li>
              <li className="nav-item"> <a href="About" className="nav-link link-dark px-2">About</a></li>
            </ul>
            <ul className="nav">
              <li className="nav-item"> <a href="Login" className="nav-link link-dark px-2">Login</a></li>
              <li className="nav-item"> <a href="SignUp" className="nav-link link-dark px-2">Sign up</a></li>
            </ul>
          </div>
        </nav>
        <header>
          <div>
            <a href>
              <span className="fs-4">My First React App</span>
            </a>
            <form className="col-12 col-lg-auto mb-3 mb-lg-0">
              <input type="search" className='form-control' placeholder='Search...' aria-label=''></input>
            </form>
          </div>
        </header>
      </>
      // <header className='header'>
      //   <h1 className='center'>Mengenal Tugu Batu Sawangan </h1>  
      //   <h4 className='center'>dan pengalaman bootcamp</h4> 
      // </header>
    );
  }

  export default Header