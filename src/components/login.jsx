
import  { useState } from 'react';
import { Form, useNavigate } from 'react-router-dom';

const Login = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [incorrect , setIncorrect] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'user' && password === 'password') {
      setIsAuthenticated(true);
      navigate('/dashboard');
    } else {
      setIncorrect(true);
      console.log(incorrect);
      
    }
  };

return (
    <div className='login-page flex w-screen h-screen'>
        <div className='left left-info w-1/2 h-screen flex flex-col justify-center items-center'>
            <p className='text-primary-500 text-7xl font-mono font-semibold mb-5'>{"<DSAtlas />"}</p>
            <img 
                src='/coding-concept-illustration.png'
                alt='a vector illustrating code'
                className='w-96'
            />
            <p className='text-2xl font-semibold text-primary-500'>One Stop for all DSA Problems</p>
        </div>
        <div className='right right-login w-1/2 h-screen bg-primary-100 login-section flex flex-col justify-center items-center'>
        <p className='login-branding text-5xl font-semibold mb-10'>Login to DSAtlas</p>
        <form onSubmit={handleLogin}>
          <div className='flex flex-col w-1/3'>
            <label className='text-xl font-semibold text-primary-500 my-2'>Username</label>
            <input 
              className='p-3 rounded-md text-primary-500 text-lg focus:outline-none login-input mb-3 w-52'
              type='text'
              value={username}
              onChange={(e) => {setUsername(e.target.value)}}
              required
            />
            <label className='text-xl font-semibold text-primary-500 my-2'>Password</label>

          <input 
            className={`p-3 rounded-md text-primary-500 text-lg focus:outline-none login-input w-52 ${incorrect ? 'border-red-600 border-2' : ''}`}
              type='password'
              value={password}
              onChange={(e) => {setPassword(e.target.value)}}
              required
            />
            <label className='text-red-600 w-44'>{incorrect ? 'wrong password!!' : ''}</label>
            <button type='submit' className='p-4 bg-primary-500 rounded-md mt-3 w-52 text-2xl font-semibold text-primary-100'>Login</button>
          </div>
        </form>
        </div>
    </div>
    );
};

export default Login;
