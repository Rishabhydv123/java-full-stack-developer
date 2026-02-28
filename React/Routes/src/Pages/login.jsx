import React, { useContext, useState } from 'react'
import { AuthValContext } from '../Context/AuthProvider';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const { setAuth } = useContext(AuthValContext);
  const navigate = useNavigate();   

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim() === '' || pass.trim() === '') return;

    setAuth(true);        
    navigate('/user');  
  }

  return (
    <>
      <h1>Login</h1>
      <form
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "1rem"
        }}
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </>
  )
}
