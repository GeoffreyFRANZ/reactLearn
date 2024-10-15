import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import Input from "./Components/Input";
import Button from "./Components/Button";
import List from "./Components/List";
import 'bootstrap/dist/css/bootstrap.min.css';
import Modals from "./Components/Modals";
// import input from "./Components/Input";
// import input from "./Components/Input";
// import input from "./Components/Input";

function App() {

    const [objectifs, setObject] = useState([
        "Faire les courses",
        "Aller à la salle de sport 3 fois par semaine",
        "Monter à plus de 5000m d'altitude",
        "Acheter mon premier appartement",
        "Perdre 5 kgs",
        "Gagner en productivité",
        "Apprendre un nouveau langage",
        "Faire une mission en freelance",
        "Organiser un meetup autour de la tech",
        "Faire un triathlon",
    ]);
    const [inputChanges, setInputChanges] = useState();
    const [show, setShow] = useState(false);
    const [selectedObjectif, setSelectedObjectif] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = (objectif) => {
        setSelectedObjectif(objectif);
        setShow(true);
    };

    const addObjectif = () => {
        setObject([...objectifs, inputChanges]);
        setInputChanges("");
    };

    const removeObjectif = (index) => {
        const removed = objectifs.filter((_, i) => i !== index);
        setObject(removed);
    };

    const handleChange = (e) => {
        setInputChanges(e.currentTarget.value);
    };

    const edit = (e, index, item) => {

        const  parentInput = e.currentTarget.parentNode.parentNode.children[1]
        const input  = parentInput.children[0]
        const object = [...objectifs];
        object[index] = input.value;
        setObject(object);
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
                    {/*<Modals   />*/}
                    <List show={show} handleClose={handleClose} items={objectifs} handleChow={handleShow}
                          onChange={edit} removeObjectif={removeObjectif}/>
                    <Input type={'text'} onchange={handleChange} objectifs={objectifs}/>
                    <Button onClick={addObjectif} items={objectifs} value={'add'}/>

                </div>
            </header>
        </div>
    );
}

export default App;