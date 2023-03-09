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
          <ul>
            <li>
              <a></a>
            </li>
            <li>
              <a></a>
            </li>
            <li>
              <a></a>
            </li>
            <li>
              <a></a>
            </li>
          </ul>
        </nav>
    </div>
  )
}

export default App;
