import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useParams} from "react-router-dom";


function DeleteModal({show, hide, onDelete}) {
    const {id} = useParams();
    return (
        <Modal show={show} onHide={hide}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to delete this employee?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={hide}>
                    Close
                </Button>
                <Button variant="primary" onClick={()=> {
                    hide();
                    onDelete(id)
                }}>
                    Delete Employee
                </Button>
            </Modal.Footer>
        </Modal>
    );

}


export default DeleteModal;