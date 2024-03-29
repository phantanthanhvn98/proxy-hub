import { Button } from "antd";
import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";

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
    repeatPassword: Yup.string().required("Please enter your password!").min(6),
    newPassword: Yup.string().required("Please enter your password!").min(6),
});


const ProfileComponent = () => {
    const formik = useFormik({
        initialValues: { name: "", email: "", password: "", repeatPassword: "", newPassword: ""},
        validationSchema: schema,
        onSubmit: async ({name, email, password, repeatPassword, newPassword}: any) => {
          const data = {
            name, email, password, repeatPassword, newPassword
          };
        //   await register(data);
        },
      });
    
      const { errors, touched, values, handleChange, handleSubmit } = formik;
      
    return (
        <div className="pl-[371px] pr-[16px] py-[100px]">
            <div className="flex flex-col gap-1">
                <div className="text-[18px] font-[700]">
                    Profile
                </div>
                <div className="text-[14px] opacity-80">
                    Edit your preferences here.
                </div>
            </div>
            <form onSubmit={handleSubmit} className="max-w-[375px]">
                <div className="w-full mt-5 relative mb-1">
                    <label className={`${styles.label} mt-5 `} htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        id="email"
                        placeholder="emailuserame@gmail.com"
                        className={`${errors.email && touched.email && "border-red-500"} ${
                            styles.input
                        }`}
                    />
                </div>
                <div className="w-full mt-5 relative mb-1">
                    <label className={`${styles.label} mt-5 `} htmlFor="password">
                        Current Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        id="password"
                        placeholder="password!@%"
                        className={`${errors.password && touched.password && "border-red-500"} ${
                            styles.input
                        }`}
                    />
                </div>
                <div className="w-full mt-5 relative mb-1">
                    <label className={`${styles.label} mt-5 `} htmlFor="repeatPassword">
                        Repeat Password
                    </label>
                    <input
                        type="password"
                        name="repeatPassowrd"
                        value={values.password}
                        onChange={handleChange}
                        id="repeatPassowrd"
                        placeholder="password!@%"
                        className={`${errors.repeatPassword && touched.repeatPassword && "border-red-500"} ${
                            styles.input
                        }`}
                    />
                </div>
                <div className="w-full mt-5 relative mb-1">
                    <label className={`${styles.label} mt-5 `} htmlFor="newPassword">
                        New Password
                    </label>
                    <input
                        type="password"
                        name="newPassword"
                        value={values.password}
                        onChange={handleChange}
                        id="newPassword"
                        placeholder="password!@%"
                        className={`${errors.password && touched.repeatPassword && "border-red-500"} ${
                            styles.input
                        }`}
                    />
                </div>
            </form>
            <Button className='mt-[50px] h-[40px] bg-[#AE01FF] hover:bg-[#AE01FF!important]  text-[#fff] text-[14px] font-[500] px-8 py-4 flex items-center justify-center'>
                Update profile
            </Button>
        </div>
    )
}

export default ProfileComponent;