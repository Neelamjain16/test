
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import './DisplayFile.css';
import PropTypes from 'prop-types'; // Import PropTypes

function DisplayFile(props) {
  const file = props.file;
  const [uploadedFiles, setUploadedFiles] = useState([]);
  console.log(uploadedFiles.length)

  useEffect(() => {
    if (file) {
      setUploadedFiles(prevFiles => [...prevFiles, file]);
    }
  }, [file]);
  return (
    <>
      <Header />
      <div className='app'>

        {uploadedFiles.length > 0 ? (
          <>
            {/* <h2 className='heading'>Uploaded Files</h2> */}
            <table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Document Name</th>
                  <th>Document Type</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {uploadedFiles.map((uploadedFile, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{uploadedFile.name && uploadedFile.name}</td>
                    <td>{uploadedFile.type && uploadedFile.type}</td>
                    <td>Pending</td>
                    <td>
                      <button className='action-btn'>View</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        ) : (
          <p className='display-message'>No file uploaded yet!!</p>
        )}
      </div>
    </>
  );
}

DisplayFile.propTypes = {
  file: PropTypes.object, // Assuming file is an object, adjust if necessary
};

export default DisplayFile;
