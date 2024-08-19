import React, { useState } from 'react';
import Modal from 'react-modal';
import './App.css';

Modal.setAppElement('#root');

function FileUpload() {
  const [progress, setProgress] = useState(0);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    const newFiles = [];

    files.forEach((file) => {
      if (uploadedFiles.some((uploadedFile) => uploadedFile.name === file.name)) {
        setError(`File "${file.name}" is already uploaded.`);
      } else {
        newFiles.push(file);
        setError('');
      }
    });

    const totalFiles = newFiles.length + uploadedFiles.length;

    if (totalFiles > 10) {
      setIsModalOpen(true);
    } else {
      setUploadedFiles([...uploadedFiles, ...newFiles]);
      setProgress((totalFiles / 10) * 100);
      if (totalFiles === 10) {
        setSuccess(true);
      }
    }
  };

  const handleDelete = (fileName) => {
    const filteredFiles = uploadedFiles.filter((file) => file.name !== fileName);
    setUploadedFiles(filteredFiles);
    setProgress((filteredFiles.length / 10) * 100);
    setSuccess(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const progressBarColor = () => {
    if (progress <= 30) return 'red';
    if (progress <= 70) return 'orange';
    return 'green';
  };

  return (
    <div className="upload-container">
      <h2>File Upload with Progress Bar</h2>
      <input type="file" multiple onChange={handleFileUpload} />
      {error && <p className="error">{error}</p>}
      <div className="progress-bar" style={{ width: `${progress}%`, backgroundColor: progressBarColor() }}></div>
      <p>{progress}%</p>

      <ul className="file-list">
        {uploadedFiles.map((file, index) => (
          <li key={index}>
            {file.name}
            <button onClick={() => handleDelete(file.name)}>Delete</button>
          </li>
        ))}
      </ul>

      {success && <p className="success">Successfully uploaded all 10 files!</p>}

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Error"
        className="modal"
        overlayClassName="overlay"
      >
        <h2>Error</h2>
        <p>You can only upload up to 10 files. Please select 10 or fewer files.</p>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
}

export default FileUpload;
