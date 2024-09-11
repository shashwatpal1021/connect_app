"use client";
import { useState } from "react";
import axios from "axios"
import { signUpSchema } from "./schema/signup";

export const Signup = ({ children }: { children: React.ReactNode }) => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');
  const [fomrData, setformData] = useState({
    name: "",
    email: '',
    password: '',
    confirmPassword: '',
  })

  const setData = (e: any) => {
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

    <div className="flex flex-col justify-center ">
      <div className="flex flex-col p-5 justify-center border-solid border-2  rounded-lg shadow-2xl">
        <div className="text-2xl mb-1 font-bold">{children}</div>
        <h1>Hey there! Welcome branch add</h1>
        <hr />
        <label htmlFor="name" className="p-1">Name: <input type="text"
          className="p-1 w-full border-2 border-black rounded-lg"
          value={fomrData.name}
          name="name"
          id="name"
          placeholder="Name"
          onChange={setData} /></label>
        <label htmlFor="email" className="p-1">Email: <input type="text"
          className="p-1 w-full border-2 border-black rounded-lg"
          value={fomrData.email}
          name="email"
          id="email"
          placeholder="email"
          onChange={setData} /></label>
        <label htmlFor="password" className="p-1">Paswword: <input type="text"
          className="p-1 w-full border-2 border-black rounded-lg"
          value={fomrData.password}
          name="password"
          id="password"
          placeholder="password"
          onChange={setData} /></label>
        <label htmlFor="confirmpassword" className="p-1">Confirm Password: <input type="text"
          className="p-1 w-full border-2 border-black rounded-lg"
          value={fomrData.confirmPassword}
          name="confirmPassword"
          id="confirmPassword"
          placeholder="confirmPassword"
          onChange={setData} /></label>
        <label className="pt-3 pr-1 pl-1"><button type="submit" className="p-1 w-full border-2 border-black rounded-lg" onClick={SubmitData}>Submit</button>
        </label>
      </div>
    </div>
  );
};
