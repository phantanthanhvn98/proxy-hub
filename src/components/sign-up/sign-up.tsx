
import React, { FC, useEffect, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import {
    AiOutlineEye,
    AiOutlineEyeInvisible,
  } from "react-icons/ai";
import { Link } from "react-router-dom";


export const styles = {
    title: "text-[25px] text-black dark:text-white font-[500] font-Poppins text-center py-2",
    label:"text-[16px] font-Poppins text-black dark:text-white",
    input:"border-[#AE01FF] hover:border-[#8549a7] hover:border-[2px] w-full text-black dark:text-white bg-transparent border rounded h-[40px] px-2 outline-none mt-[10px] font-Poppins",
    button:"flex flex-row justify-center items-center py-3 px-6 rounded-full cursor-pointer bg-[#2190ff] min-h-[45px] w-full text-[16px] font-Poppins font-semibold"
}

const schema = Yup.object().shape({
    name: Yup.string().required("Please enter your name!"),
    email: Yup.string()
      .email("Invalid email!")
      .required("Please enter your email!"),
    password: Yup.string().required("Please enter your password!").min(6),
  });


const SignUpComponent = ({type}: any) => {
    const [show, setShow] = useState(false);

    const formik = useFormik({
        initialValues: { name: "", email: "", password: "" },
        validationSchema: schema,
        onSubmit: async ({name, email, password }: any) => {
          const data = {
            name,email,password
          };
        //   await register(data);
        },
      });
    
      const { errors, touched, values, handleChange, handleSubmit } = formik;

    return (
        <div className="w-full">
            {/* <div>
                
            </div> */}
            <div className="flex justify-center">
                <div className="w-full max-w-[370px]">
                    <h1 className={`${styles.title}`}>{"Sign in"}</h1>
                    <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className={`${styles.label}`} htmlFor="email">
                            Username
                        </label>
                        <input
                        type="text"
                        name=""
                        value={values.name}
                        onChange={handleChange}
                        id="name"
                        placeholder="johndoe"
                        className={`${errors.name && touched.name && "border-red-500"} ${
                            styles.input
                        }`}
                        />
                    </div>
                    <div className="mt02">
                        <label className={`${styles.label}`} htmlFor="email">
                            Enter Your Email
                        </label>
                        <input
                            type="email"
                            name=""
                            value={values.email}
                            onChange={handleChange}
                            id="email"
                            placeholder="loginmail@gmail.com"
                            className={`${errors.email && touched.email && "border-red-500"} ${
                            styles.input
                            }`}
                        />
                    </div>
                    <div className="w-full mt-5 relative mb-1">
                        <label className={`${styles.label}`} htmlFor="email">
                            Password
                        </label>
                        <input
                        type={!show ? "password" : "text"}
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        id="password"
                        placeholder="password!@%"
                        className={`${
                            errors.password && touched.password && "border-red-500"
                        } ${styles.input}`}
                        />
                        {!show ? (
                        <AiOutlineEyeInvisible
                            className="absolute bottom-3 right-2 z-1 cursor-pointer"
                            size={20}
                            onClick={() => setShow(true)}
                        />
                        ) : (
                        <AiOutlineEye
                            className="absolute bottom-3 right-2 z-1 cursor-pointer"
                            size={20}
                            onClick={() => setShow(false)}
                        />
                        )}
                    </div>
                    <div className="w-full mt-5 relative mb-1">
                        <label className={`${styles.label} mt-5 `} htmlFor="telegram">
                            Telegram username (optional)
                        </label>
                        <input
                            type="telegram"
                            name=""
                            value={values.email}
                            onChange={handleChange}
                            id="telegram"
                            placeholder="@username"
                            className={`${errors.email && touched.email && "border-red-500"} ${
                            styles.input
                            }`}
                        />
                    </div>

                    <div className="w-full mt-5">
                        <input type="submit" value={"Sign up"} className={`bg-[#AE01FF] hover:bg-[#8549a7] text-[#fff] ${styles.button}`} />
                    </div>
                    <br />
                    <h5 className="text-center pt-4 font-Poppins text-[14px] text-black dark:text-white">
                        New on our platform? 
                        <Link to="/auth/login"
                            className="text-[#2190ff] pl-1 cursor-pointer"
                        >
                            Sign in
                        </Link>
                    </h5>
                    </form>
                    <br />
                </div>
            </div>
        </div>
    )
}

export default SignUpComponent;