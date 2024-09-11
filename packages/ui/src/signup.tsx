"use client";
import { useState } from "react";
import axios from "axios";
import { signUpSchema } from "./schema/signup";
import Custominput from "./custominput";
import { motion } from 'framer-motion';

export const Signup = ({ children }: { children: React.ReactNode }) => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');
  const [fomrData, setformData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const setData = (e: any) => {
    setformData({ ...fomrData, [e.target.name]: e.target.value });
  };

  const SubmitData = async () => {
    const result = signUpSchema.safeParse(fomrData);
    if (result.success) {
      console.log("Form submitted successfully!", result.data);
      const res = await axios.post(`http://localhost:4000/create`, result.data);
      console.log("res", res);
    } else {
      console.log("Validation errors:", result.error.format());
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-200 flex items-center justify-center p-4">
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full"
    >
      <h2 className="text-3xl font-bold mb-2 text-gray-800">{children}</h2>
      <h4 className="text-lg font-semibold mb-6 text-gray-800">Hey there! Welcome</h4>

      <form className="space-y-4">
          <motion.div whileHover={{ scale: 1.05 }} className="col-span-1">
        <Custominput
          type="text"
          name="name"
          value={fomrData.name}
          onChnage={(e?: any) => {
            setData(e);
          }}
          label="Name"
          Placeholder="Name"
        />
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} className="col-span-1">
        <Custominput
          type="text"
          name="email"
          value={fomrData.email}
          onChnage={(e?: any) => {
            setData(e);
          }}
          label="Email"
          Placeholder="Email"
        />
        </motion.div>
        
        <motion.div whileHover={{ scale: 1.05 }} className="col-span-1">
        <Custominput
          type="text"
          name="password"
          value={fomrData.password}
          onChnage={(e?: any) => {
            setData(e);
          }}
          label="Password"
          Placeholder="Password"
        />
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} className="col-span-1">
        <Custominput
          type="text"
          name="confirmPassword"
          value={fomrData.confirmPassword}
          onChnage={(e?: any) => {
            setData(e);
          }}
          label="Confirm Password"
          Placeholder="Confirm Password"
        />
        </motion.div>

        {/* <label htmlFor="" className="pt-3 pr-1 pl-1">
          <button
            type="submit"
            className="p-1 w-full border-2 border-black rounded-lg"
            onClick={SubmitData}
          >
            Submit
          </button>
        </label> */}
        <motion.div whileHover={{ scale: 1.05 }} className="flex items-center justify-center mt-6">
        <button
          type="submit"
          className="p-1 w-full border-2 border-black rounded-lg"
          onClick={SubmitData}
        >
          Submit
        </button>
        </motion.div>
        </form>
        </motion.div>
    </div>
  );
};
