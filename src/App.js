// App.js

import logo from './logo.svg';
import './App.css';
import Input from "./Components/Input";
import Button from "./Components/Button";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    <b>
                        Edit <code style={{color: 'red'}}>src/App.js</code> and save to reload.
                    </b>
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <div>
                    <Input/>
                    <Button/>
                </div>
            </header>
        </div>
    );
}

export default App;