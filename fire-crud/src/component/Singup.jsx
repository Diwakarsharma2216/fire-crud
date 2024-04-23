import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
const Singup = () => {
  const [email, setemail] = useState("");
  const [password, setpasswod] = useState("");

  const handlesubmit = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div>
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
     
    </div>
  );
};

export default Singup;
