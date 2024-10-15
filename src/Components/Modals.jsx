import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Btn from './Button';
import Input from "./Input";

const Modals = ({item, index, onChange}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div style={{ display: 'block', width: 700, padding: 30 }}>
            <Button variant="primary" onClick={handleShow}>
                Edit
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{item}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Input type={'text'} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Btn  index={index} item={item} variant="primary" onChange={onChange} onClick={handleClose} value={'save change'}/>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Modals;