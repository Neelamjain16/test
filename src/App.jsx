
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FileUpload from './pages/FileUpload';
import DisplayFile from './pages/DisplayFile';
import Login from './pages/Login';
import './index.css';
import { useState } from 'react';

function App() {
  const [inputList, setInputList] = useState(null);

  const handleInputChange = (input) => {
    if (!inputList) {
      setInputList(input);
    }
  };

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path="/upload" element={<FileUpload onInputChange={handleInputChange} />} />
        <Route path="/uploaded" element={<DisplayFile file={inputList} />} />
      </Routes>
    </Router>
  );
}

export default App;

