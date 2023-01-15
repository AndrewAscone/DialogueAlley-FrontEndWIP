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
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchByHandle = () => {

    
    console.log(searchQuery);
    setShow(false);
    setSearchQuery('');


  }

  const handleSearchByHashtag = () => {

    console.log("Searching by Hashtag");
    setShow(false);
    setSearchQuery('');

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
            <input type="text" style={styles.textbox} value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
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
          <Link to={`/SearchHandle/${searchQuery}`}>
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
