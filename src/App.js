import logo from './logo.svg';
import resume from './ALEXANDER_CHIN_RESUME.pdf';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>
          Alexander Chin
        </h1>
        <h4>
          Software Developer
        </h4>
        <a
          className="App-link"
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/alexanderfchin/"
          target="_blank"
          rel="noopener noreferrer"
        >
         LinkedIn
        </a>
        <a
          className="App-link"
          href="https://github.com/alexfchin"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>

      </header>
    </div>
  );
}

export default App;
