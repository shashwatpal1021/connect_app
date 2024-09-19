"use client";
import { useState } from "react";
import axios from "axios";
import { signUpSchema } from "./schema/signup";
import Custominput from "./custominput";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import FormikInput from "./FormikInput";
import { Formik, Form, FormikHelpers } from "formik";
import * as Yup from "yup";

export const Signup = ({ children }: { children: React.ReactNode }) => {
  const loginSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
    confirmPassword:Yup.string().required("Required"),
  });

  const SubmitData = async (
    values:any,
    { setSubmitting, resetForm, setFieldValue, setFieldError }: FormikHelpers<any>
  ) => {
      try {
        const res = await axios.post(
          `http://localhost:4000/create`,
          values
        );
        console.log("res", res);
        if (res.status === 201) {
          toast.success("Account created successfully!");
          resetForm({ values: "" });
        } else {
          toast.error(res.data.message);
        }
      } catch (error: any) {
        console.log(error);
        toast.error(error.response.data.message);
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
        <h4 className="text-lg font-semibold mb-6 text-gray-800">
          Hey there! Welcome
        </h4>
        <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
          
        }}
        validationSchema={loginSchema}
        onSubmit={SubmitData}
      >
        {({
          errors,
          touched,
          handleChange,
          handleBlur,
          values,
          setFieldError,
          isValid,
          isSubmitting,
          setFieldValue,
          setTouched,
          setErrors
        }) => (
          console.log('Formik values:', values),
          console.log('Formik errors:', errors),
          <Form>
        <div className="space-y-4">
          <motion.div whileHover={{ scale: 1.05 }} className="col-span-1">
            <FormikInput
              type="text"
              name="name"
              value={values.name}
              label="Name"
              placeholder="Name"
              required
            />
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="col-span-1">
            <FormikInput
              type="text"
              name="email"
              value={values.email}
              label="Email"
              placeholder="Email"
              required
            />
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="col-span-1">
            <FormikInput
              type="password"
              name="password"
              value={values.password}
              label="Password"
              placeholder="Password"
              required

            />
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="col-span-1">
            <FormikInput
              type="password"
              name="confirmPassword"
              value={values.confirmPassword}
              label="Confirm Password"
              placeholder="Confirm Password"
              required

            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center justify-center mt-6"
          >
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"            >
              Submit
            </button>
          </motion.div>
        </div>
        </Form>
        )}
        </Formik>
        
      </motion.div>
    </div>
  );
};
