'use client'

import { useState } from "react";
import Heading from "../components/products/Heading";
import Input from "../components/inputs/Input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "../components/Button";
import Link from "next/link";

const RegisterForm = () => {

    const [isLoading, setIsLoading] = useState(false)
    const {register, handleSubmit , formState:
    {errors}} = useForm<FieldValues>({
        defaultValues:{
            name: "",
            password: "",
        },
    });

    const onSubmit:SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);
        console.log(data);
    };

    return ( 
    <>
    <Heading title="Sign up for DV-tech" />
    <hr className="bg-slate-400 w-full h-px" />  
    <Input 
    id="name"
    label="name"
    disabled={isLoading}   
    register={register}
    errors={errors}
    required
    />    
    <Input 
    id="password"
    label="password"
    disabled={isLoading}   
    register={register}
    errors={errors}
    required
    type="password"
    /> 
    <Button label = {isLoading ? "Loading" : 'Sign Up'}
    onClick={handleSubmit(onSubmit)}/>
    <p className="text-sm">
        Already have an account? 
        <Link className="underline ml-2" href='/login'>
        Log in
        </Link>
    </p>
    </> 
  );
};
 
export default RegisterForm;