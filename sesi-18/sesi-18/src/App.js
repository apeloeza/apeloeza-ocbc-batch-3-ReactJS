import logo from './logo.svg';
import './App.css';
import CardExternalStyle from './components/CardExternalStyle';

// CSS Module
/**
 * kelebihan
 * * 1. kita tetap bisa menggimplementasikan sintaks CSS pada file external
 * * 2. kita bisa isolasikan class yang memiliki nama yang sama pada content yang berbeda
 * 
 * ! kekurangan
 * ! 1 sama sepperti object variiabe CSS, ngga disediakan auto-comletion
 * 
 */



import React, {useState, useEffect } from 'react';

import CardInlineStyle from './components/CardInlineStyle'
import CardObjectVariabelStile from './components/CardObjectVariabelStile';

//example hal 13
function Counter ({initialCount}) {
  const [count, setCount] = useState(0);
  return (
    <div className='center'>
      Count: {count}
      <div/><button onClick={() => setCount(0)}>Reset</button>
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


function App() {
  return (
    <div className="App">
      {/* single tag */}
      <botton title="FSD 2 OBBC Batch 3 - React"/>
      <button/>

      <header className="App-header">
        {/* single tag */}
        <person name ="Alex" job ="Full-stack developer" />
        <person name ="Dini" job ="React developer" />
        <div/><div/><div/>
        <Counter />
        <Example />
        <Example2 />
        <hr />
        <CardInlineStyle />
        <hr />
        <CardObjectVariabelStile />
        <CardExternalStyle />
        


        {/* single tag */}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
