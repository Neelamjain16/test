import { useState } from 'react';
import './FileUpload.css'; // Make sure this path is correct
import Header from '../components/Header'; // Adjust the path as necessary

// eslint-disable-next-line react/prop-types
function FileUpload({ onInputChange }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [selectedOption, setSelectedOption] = useState('Option 1');
  const [successMessage, setSuccessMessage] = useState(null)
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const allowedTypes = ['application/pdf', 'application/msword', 'text/plain'];
      const maxSize = 10 * 1024 * 1024; // 10 MB

      if (allowedTypes.includes(file.type) && file.size <= maxSize) {
        setSelectedFile(file);
        setErrorMessage('');
      } else {
        setSelectedFile(null);
        setErrorMessage('Please select a valid file (PDF, DOC, TXT) less than 10MB.');
      }
    }
  };

  const handleUpload = () => {
    onInputChange(selectedFile);
    if (selectedFile) {

      setSuccessMessage('File uploaded successfully'); // Notify the user
    }
    setSelectedFile(null); // Clear the input field after upload
    // You can also set a timeout to clear the notification message after a certain duration
    setTimeout(() => {
      setErrorMessage('');
    }, 3000); // 3000 milliseconds (3 seconds) in this example
  };

  return (
    <>
      <Header />
      <div className="main">
        <div className="drop-container">
          <p className='instruction1'>Choose your Legal document type here</p>
          <select value={selectedOption} onChange={handleChange} className="dropdown">
            <option value="Option 1">Msa</option>

          </select>
          <span className="drop-title">Drop files here</span>
          <input type="file" accept=".pdf,.doc,.docx,.txt" onChange={handleFileUpload} className="file-input" />
          <p className='instruction'>Please select a valid file (PDF, DOC, TXT) less than 10MB.</p>
          <button onClick={handleUpload} className="btn">Upload</button>
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}

      </div>
    </>
  );
}

export default FileUpload;
