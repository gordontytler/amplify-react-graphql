import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
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
        <p></p>
        <a
          className="App-link"
          href="https://aws.amazon.com/getting-started/hands-on/host-static-website/"
          target="_blank"
          rel="noopener noreferrer"
        >
          AWS getting started - Host a static website.  version 2
        </a>
      </header>
    </div>
  );
}

export default App;
