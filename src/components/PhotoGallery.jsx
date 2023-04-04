import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getStorage, ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import Form from 'react-bootstrap/Form';

export default function PhotoGallery() {
  const [showModal, setShowModal] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const albumName = useParams().albumName;

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleFileSelect = (event) => {
    setSelectedFiles(event.target.files);
  };
  const [albumImages, setAlbumImages] = useState([]);

  useEffect(() => {
    loadAlbum();
  }, [albumName]);

  const loadAlbum = async () => {
    const images = [];
    const storage = getStorage();
    const albumRef = ref(storage, albumName);
    const items = await listAll(albumRef);
    const promises = items.items.map((itemRef) =>
      getDownloadURL(itemRef).then((url) => (images.push({
        key: itemRef.name,
        url,
      })))
    );
    await Promise.all(promises);
    setAlbumImages(images.map((image)=>image.url));
  };

  const handleUpload = async () => {
    const storage = getStorage();
    const albumRef = ref(storage, albumName);

    // Loop through selected files and upload each one to the albumRef
    const promises = [];
    for (let i = 0; i < selectedFiles.length; i++) {
      const file = selectedFiles[i];
      const fileName = `${Date.now()}_${file.name}`;
      const fileRef = ref(albumRef, fileName);

      promises.push(
        uploadBytes(fileRef, file).then(() => {
          console.log('File uploaded successfully');
        })
      );
    }

    // Wait for all uploads to finish before reloading the album
    await Promise.all(promises);

    handleCloseModal();
    loadAlbum();
  };

  return (
    <main>
      <div className="gallery">{console.log(albumImages)}
        {albumImages.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image} alt={`image-${index}`} />
          </div>
        ))}
      </div>
      <a href="#" className="material-icons floating-btn" onClick={handleShowModal}>
        +
      </a>
      <Modal show={showModal} onHide={handleCloseModal} centered size='md'>
        <Modal.Header closeButton>
          <Modal.Title>Upload Images</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-4" controlId="formRecipeName">
              <Form.Control type="file" multiple onChange={handleFileSelect} />
              <Form.Text>Hold the 'shift' key to select as many images as you want!</Form.Text>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpload}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
    </main>
  );
}
