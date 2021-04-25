import React from 'react';
import { Modal, Button } from 'react-bootstrap';

import '../styles/Modal_ShoppingBox.css';

const Modal_ShoppingBox = () => {
    
    return (
        <Modal className="modal-body">
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary">Close</Button>
            </Modal.Footer>
      </Modal>        
    )
}
 
export default Modal;