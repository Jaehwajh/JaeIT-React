import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <header className="App-header">
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

function Navbar() {
  return (
    <div className='Nav'>
        <nav className='Nav-bar'>
          <ul className='List'>
            <li>
              <a href='#'>About</a>
            </li>
            <li>
              <a href='#'>Service</a>
            </li>
            <li>
              <a href='#'>Contact</a>
            </li>
            <li>
              <a href='#'>Socials</a>
            </li>
          </ul>
        </nav>
    </div>
  )
}


export default App;
