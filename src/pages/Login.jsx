import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './Login.css'; // Make sure this path matches the location of your CSS file
import Image from '../assets/image2.png'; // Update the path as per your project structure

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!password || !email) {
      setError(true)
      return
    }
    // Here you would usually check the credentials against a backend service
    // For demonstration purposes, let's navigate to '/upload' upon form submission
    navigate('/upload');
  };

  return (

    <div className='main-container'>

  
    <div className="login-main">
      <div className="login-left">
        <img src={Image} alt="legal_logo" />
      </div>
      <div className="login-right">
        <div className="login-right-container">
          <div className="login-center">
            <p>Login</p>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="pass-input-div">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {showPassword ? (
                  <FaEyeSlash
                    className="toggle-password"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                ) : (
                  <FaEye
                    className="toggle-password"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                )}
              </div>
              <div className="login-center-buttons">
                <button type="submit">Login</button>
              </div>
              {error && <p className="error-message">Please enter credentials</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;
