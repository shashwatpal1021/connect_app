"use client";
import { useState } from "react";
import { signUpSchema } from "./schema/signup";
import axios from "axios"

export const Signup = ({ children }: { children: React.ReactNode }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const SubmitData = async () => {
    const result = signUpSchema.safeParse({ name, email, password });
    if (result.success) {
      console.log("Form submitted successfully!", result.data);
      const res = await axios.post(`http://localhost:4000/create`, result.data)
      console.log("res", res)
    } else {
      console.log("Validation errors:", result.error.format());
    }
  }
  return (

    <div>
      <h1>Hey there! Welcome</h1>
      {children}
      <br />
      <label htmlFor="email">Name:
        <input
          type="text"
          value={name}
          name="name"
          id="name"
          onChange={(e) => setName(e.target.value)} />
      </label>
      <label htmlFor="email">Email:
        <input
          type="text"
          value={email}
          name="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label htmlFor="createpassword">Create Password:
        <input type="text"
          value={password}
          name="createpassword"
          id="createpassword"
          onChange={(e) => setPassword(e.target.value)} />
      </label>
      <label htmlFor="confirmpassword">Confirm Password:
        <input type="text"
          value={confirmPassword}
          name="confirmpassword"
          id="confirmpassword"
          onChange={(e) => setConfirmPassword(e.target.value)} /></label>
      <button type="submit" onClick={SubmitData}>Submit</button>
    </div>
  );
};
