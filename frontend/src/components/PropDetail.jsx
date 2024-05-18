import React from 'react'





import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function PropDetail({title,description,img,price, is_available,is_negotiable}) {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
        learn more
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        // fullscreen = 'true'
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Property <details></details>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div>
                <img src={img} alt="couldnt load image" style={{width:"250px",height:'250px'}} />
            </div>
            <h5>{title}</h5>
          <p>
            {description}
          </p>
          <div className={is_available?'text-success':'text-danger'}>{is_available?<P>Available</P>: <p>Not Available</p> }</div>
          <div className={is_negotiable?'text-body-none':'text-decoration-line-through'}>Negotiable</div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default PropDetail