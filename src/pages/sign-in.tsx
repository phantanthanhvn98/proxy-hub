import React from "react";
import SignInComponent from "../components/sign-in/sign-in";

const SignIn = ({type}:any) => {
    return (
        <div className="p-8 mt-[100px]">
            <SignInComponent type={type}/>
        </div>
    )
}

export default SignIn