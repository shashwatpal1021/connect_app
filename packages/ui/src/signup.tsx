"use client";
import { useState } from "react";
import axios from "axios"
import { signUpSchema } from "./schema/signup";

export const Signup = ({ children }: { children: React.ReactNode }) => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');
  const [fomrData,setformData]=useState({
    email:'',
    password:'',
    confirmPassword:'',
  })

  const setData=(e:any)=>{
    setformData({ ...fomrData, [e.target.name]: e.target.value })
  }
 
  const SubmitData = async () => {
    const result = signUpSchema.safeParse(fomrData);
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
      <label htmlFor="email">Email: <input type="text" value={fomrData.email} name="email" id="email" onChange={setData} /></label>
      <label htmlFor="createpassword">Create Password: <input type="text" value={fomrData.password} name="createpassword" id="createpassword" onChange={setData} /></label>
      <label htmlFor="confirmpassword">Confirm Password: <input type="text" value={fomrData.confirmPassword} name="confirmpassword" id="confirmpassword"   onChange={setData} /></label>
      <button type="submit" onClick={SubmitData}>Submit</button>
    </div>
  );
};
