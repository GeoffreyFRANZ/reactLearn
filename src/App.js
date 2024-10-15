import logo from './logo.svg';
import './App.css';
import Input from "./Components/Input";
import Button from "./Components/Button";
import List from "./Components/List";
import {useEffect, useState} from "react";

function App() {

    const [objectifs,  setObject] =  useState([
        "Faire les courses",
        "Aller à la salle de sport 3 fois par semaine",
        "Monter à plus de 5000m d'altitude",
        "Acheter mon premier appartement",
        "Perdre 5 kgs",
        "Gagner en productivité",
        "Apprendre un nouveau langage",
        "Faire une mission en freelance",
        "Organiser un meetupautour de la tech",
        "Faire un triathlon",
    ])
    const [inputChanges, setInputChanges] = useState()

    const addObjectif = () => {
        setObject([...objectifs, inputChanges]);
        setInputChanges("");
    }
    const removeObjectif = (index)=>
    {
     const removed = objectifs.filter((_, i) => i !== index)
        setObject(removed)
    }
    const handleChange = (e) => {
        setInputChanges(e.currentTarget.value)
    }

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
                <div className="App-components">
                    <List  items={objectifs} removeObjectif={removeObjectif}/>
                    <Input  onchange={handleChange} objectifs={objectifs}/>
                    <Button onClick={addObjectif} items={objectifs} value={'add'} />
                    <Button  value={'remove'} />
                </div>
            </header>
        </div>
    );
}

export default App;