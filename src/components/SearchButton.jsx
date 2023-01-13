import axios from "axios";
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import SearchHandle from "./SearchHandle";
import { Link } from "react-router-dom";

const styles={
  textbox: {
    width: '100%',
    padding: '6px 10px',
    margin: '10px 0',
    border: '1px solid black',
    borderRadius: '8px',
    boxSizing: 'border-box',
    display: 'block'
  }
}

function SearchButton() {
  const [message, setMessage] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    // fetch(createPostURL, {
    //   method: 'POST',
    //   headers: { "Content-Type" : "application/json" },
    //   body: JSON.stringify(dialogue)
    // }).then(() => {
    //   console.log("New dialogue added");
    // })
    setShow(false);

    setMessage('');

  }

  const handleSearchByHandle = () => {

    console.log("Searching by Handle");
    setShow(false);
    setMessage('');


  }

  const handleSearchByHashtag = () => {

    console.log("Searching by Hashtag");
    setShow(false);
    setMessage('');

  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const keyDownHandler = e => {

      if(e.key === 'Enter'){
        e.preventDefault();

        handleClose(e);
      }
    };

    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    }
  }, [handleClose]);
  
  

  return (
    <>
      <Button variant="btn btn-outline-light" onClick={handleShow}>
        Search
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Search by Alleyname or Hashtag</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleClose}>
            {/* <label style={{ textAlign: 'left', display: 'block'}}>Dialogue (255 character limit)</label> */}
            {/* <textarea 
              value={message} 
              required
              onChange={(e) => setMessage(e.target.value)}
              style={styles.textbox}
            ></textarea> */}
            {/* <label style={{ textAlign: 'left', display: 'block'}}>Add hashtags</label> */}
            <input type="text" style={styles.textbox} value={message} onChange={(e) => setMessage(e.target.value)} />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Link to="/SearchHashtag">
            <Button variant="primary" onClick={handleSearchByHashtag}>
                Hashtag
            </Button>
          </Link>
          <Link to="/SearchHandle">
            <Button variant="primary" onClick={handleSearchByHandle}>
                Handle
            </Button>
          </Link>
          
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SearchButton;
