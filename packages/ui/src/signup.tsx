"use client";
import { useState } from "react";
import { z } from "zod";
import { signUpSchema } from "./Schema/signup";

export const Signup = ({ children }: { children: React.ReactNode }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const SubmitData=()=>
  {
const result= signUpSchema.safeParse({ email, password, confirmPassword });

if (result.success) {
  // Validation passed, handle successful submission here
  console.log("Form submitted successfully!", result.data);
} else {
  // Validation failed, handle errors here
  console.log("Validation errors:", result.error.format());
}
  }
  return (
  
    <div>
      <h1>Hey there! Welcome</h1>
      {children}
      <br />
      <label htmlFor="email">Email: <input type="text" value={email} name="email" id="email" onChange={(e) => setEmail(e.target.value)} /></label>
      <label htmlFor="createpassword">Create Password: <input type="text" value={password} name="createpassword" id="createpassword" onChange={(e) => setPassword(e.target.value)} /></label>
      <label htmlFor="confirmpassword">Confirm Password: <input type="text" value={confirmPassword} name="confirmpassword" id="confirmpassword"   onChange={(e) => setConfirmPassword(e.target.value)} /></label>
      <button type="submit" onClick={SubmitData}>Submit</button>
    </div>
  );
};
