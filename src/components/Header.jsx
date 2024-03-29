import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { FaUserGraduate } from "react-icons/fa";
function Header() {
  const [activeTab, setActiveTab] = useState(''); // No active tab by default

  return (
    <header className='header'>
      <div className='logo-container'>
        <p className='main-logo'>SmartLegalAnalyzer</p>
      </div>
      <nav className="nav">
        <ul className='list'>
          <li>
            <Link to="/upload"
              className={`link ${activeTab === 'upload' ? 'active' : ''}`}
              onClick={() => setActiveTab('upload')}>Upload File</Link>
          </li>
          <li>
            <Link to="/uploaded"
              className={`link ${activeTab === 'uploaded' ? 'active' : ''}`}
              onClick={() => setActiveTab('uploaded')}>Uploaded Files</Link>
          </li>
        </ul>
      </nav>
      <div className="profile-container">
        <FaUserGraduate className='profile-icon' />
      </div>
    </header>
  );
}

export default Header;
