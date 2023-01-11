import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const styles={
  textbox: {
    width: '100%',
    padding: '6px 10px',
    margin: '10px 0',
    border: '1px solid black',
    boxSizing: 'border-box',
    display: 'block'
  }
}

function PostButton() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="btn btn-outline-light" onClick={handleShow}>
        Post Dialogue
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Write a Dialogue!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            {/* <label style={{ textAlign: 'left', display: 'block'}}>Write a Dialogue</label> */}
            <textarea required style={styles.textbox}></textarea>
            <label style={{ textAlign: 'left', display: 'block'}}>Add hashtags</label>
            <input type="text" style={styles.textbox} />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Post
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PostButton;
