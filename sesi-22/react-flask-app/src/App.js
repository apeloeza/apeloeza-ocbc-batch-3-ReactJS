//remote import
import React, {useState, useEffect} from 'react';

//local import
import logo from './logo.svg';
import './App.css';

function App() {
  const [message, setMessage] =useState("");

  // const [placeholder, setPlaceholder] = useState('Hi');

  useEffect(
    () => {
  //   fetch('/hello').then(res => res.json()).then(data => {
  //     setPlaceholder(data.result);
  //   });
  // }, []);
  
      fetch('/hello')
      .then(response => {
        return response.json();
      })
        .then(data => {
          setMessage(data.result);
        })
      },
      [] // hanya dijalankan 1x saja
  )
  
  //useEffect hanya berjalan 1 kali dikarenakan memiliki array kosong


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
          Flask saya: <code>{message}</code>
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
