import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
function Add({addHandler}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [title,settitle]= useState("")
  const [description,setdescription]= useState("")
  const [PosterURL,setPosterURL]= useState("")
  const [Rating,setRating]= useState("")
  const addMovie=()=>{
  const newMovie={id: Math.random(), 
	Title:title,
	Rating:Rating,
	Description:description,
	PosterURL:PosterURL} 
    addHandler(newMovie )
    handleClose();
  }
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add new movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Movie title</Form.Label>
            <Form.Control type="text" placeholder="the movie title" onChange={(e)=> settitle(e.target.value)} value={title}/>
            <Form.Label>Movie discripton</Form.Label>
            <Form.Control type="text" placeholder="the movie description" onChange={(e)=> setdescription(e.target.value)}value={description} />
            <Form.Label>Poster URL</Form.Label>
            <Form.Control type="text" placeholder="the poster Url" onChange={(e)=> setPosterURL(e.target.value)}value={PosterURL}/>
            <Form.Label>Movie Rate</Form.Label>
            <Form.Control type="text" placeholder="the movie rate" onChange={(e)=> setRating(e.target.value)}value={Rating}/>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addMovie}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Add;