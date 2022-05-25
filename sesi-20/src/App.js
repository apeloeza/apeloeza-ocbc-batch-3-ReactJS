import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home'; 
import Footer from './components/Footer'
import Header from './components/Header'
import Features from './components/Features';
import FAQs from './components/FAQs';
import About from './components/About';

// import './App.css'; kita akan ganti bootstrap
import "bootstrap"; // import JS
import "bootstrap/dist/css/bootstrap.min.css"; // import css

import React, {useState, useEffect } from 'react';

function Counter ({initialCount}) {
    const [count, setCount] = useState(initialCount);
    return (
      <div className='center'>
        Count: {count}
        <button onClick={() => setCount(initialCount)}>Reset</button>
        <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
      </div>
    );
  }
  
//   import React, { useState } from 'react';
  
  function Example (){
    // deklarasi variabel state baru yang kita sebut "count" 
    const [count, setCount] = useState(0);

    return (
      <div className='center'>
        <p>Anda menekan sebanyak {count} kali</p>
        <button onClick={() => setCount (count + 1)}>
          Klik Saya
        </button>
      </div>
    );
  }

  function Example2() {
      const [count, setCount] = useState(0);
      // mirip dengan componentDidMount dan componentDidUpdate:
      useEffect(() => {
          document.title = 'you clicked ${count} times';
      });

      return (
          <div className='center'>
              <p>You click {count} times</p>
              <button onClick={() => setCount(count + 1)}>
                  Click Me
              </button>
          </div>
      );
  }
  

function App(){
  return(
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/features' element={<Features/>}/>
        <Route path='/FAQs' element={<FAQs/>}/>
        <Route path='/About' element={<About/>}/>
      </Routes>
      {/* <div className=''>
        
        <div className="container"></div>
        <Navigation />
        
        <hr />
        <Counter />
        <Example />
        <Example2 />
      </div> */}
      <Footer />
    </BrowserRouter>
  );
}


export default App;