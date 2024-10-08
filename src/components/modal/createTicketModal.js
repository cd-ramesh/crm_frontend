import Modal from 'react-bootstrap/Modal';
import { Button } from "react-bootstrap";


function CreateTicketModal(props){
    return (
        <Modal
            show={props.show}
            backdrop="static"
        >
            <Modal.Header>
                <Modal.Title>Raise Ticket</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <div className='input-group mb-3'>
                        <span className='input-group-text'>Title</span>
                        <input className="px-2 ip" type="text" name="title" 
                        style={{width: "20rem", border: "1px solid #B2B2B2", color: "#555555"}} onChange={props.onUpdateTicket}/>
                    </div>
                    <div className='input-group mb-3'>
                        <span className='input-group-text'>Description</span>
                        <textarea className="px-2 ip" name="description" cols="40" style={{border: "1px solid #B2B2B2", color: "#555555"}}
                        onChange={props.onUpdateTicket}/> 
                    </div>
                    <div className='input-group mb-3'>
                        <span className='input-group-text'>Priority</span>
                        <input className="px-2 ip" type="number" name="ticketPriority" autoComplete="off" 
                        style={{border: "1px solid #B2B2B2", color: "#555555"}} onChange={props.onUpdateTicket} />
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.closeModal}>
                    Close
                </Button>
                <Button variant="primary" onClick={props.onSaveTicket}>Raise</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CreateTicketModal;