import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import api from '../api';
import { useNavigate } from 'react-router-dom';

function DeleteProp({id}) {
    const navigate = useNavigate()
    const [show, setShow] = useState(false);
    const handleClose =()=>setShow(false);
    const handleDelete = async  (id) => {
        await api
        .delete(`api/property/MyProperty/delete/${id}/`)
        .then((res)=>{
        if (res.status===204) console.log('item deleted')
        else console.log('couldnt delete property')
        }).catch((err)=>console.log(err));
        setShow(false)
        window.location.reload();
        // getMYProperty();
        
    };
    const handleShow = () => setShow(true);
    return (
        <>
          <Button variant="primary" onClick={handleShow}>
            Delete
          </Button>
    
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Delete the item </Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, this cant be reversed! ARE YOUR SURE?</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                return  
              </Button>
              <Button variant="primary" onClick={(e)=>handleDelete(id)}>
                I'm sure
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
}

export default DeleteProp
