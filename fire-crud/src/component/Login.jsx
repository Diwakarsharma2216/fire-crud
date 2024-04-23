import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react'
import { auth, provider } from '../config/firebase';

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpasswod] = useState("");
  const handlesubmit = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password).then((res)=>{
        console.log(res)
      })
    } catch (error) {
      console.log(error);
    }
  };

  const singwithgoole = async () => {
    try {
      await signInWithPopup(auth, provider).then((res)=>{
        console.log(res)
      })
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="email..."
        onChange={(e) => setemail(e.target.value)}
      />
      <input
        type="password"
        placeholder="password..."
        onChange={(e) => setpasswod(e.target.value)}
      />
      <button onClick={handlesubmit}>SingIn</button>
      <button onClick={singwithgoole}>SingInWithGoogle</button>
    </div>
  )
}

export default Login