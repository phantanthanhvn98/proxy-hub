import React from "react";
import SignUpComponent from "../components/sign-up/sign-up";

const SignUp = ({type}:any) => {
    return (
        <div className="p-8 mt-[100px]">
            <SignUpComponent type={type}/>
        </div>
    )
}

export default SignUp