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
      </>

    );
  }

  export default Header