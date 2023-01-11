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
  const [message, setMessage] = useState('');
  const [hashtag, setHashtag] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const dialogue = { message, hashtag }

    console.log(dialogue);
  }

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
            <label style={{ textAlign: 'left', display: 'block'}}>Write a Dialogue</label>
            <textarea 
              value={message} 
              required
              onChange={(e) => setMessage(e.target.value)}
              style={styles.textbox}
            ></textarea>
            <label style={{ textAlign: 'left', display: 'block'}}>Add hashtags</label>
            <input type="text" style={styles.textbox} value={hashtag} onChange={(e) => setHashtag(e.target.value)} />
          </form>
          <p>{ message }</p>
          <p>{ hashtag }</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Post
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PostButton;
