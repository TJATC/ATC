"use client"
import Link from "next/link";
import React, {useEffect, useState} from "react";
import {useRouter} from 'next/navigation'
import axios from 'axios';
import {FaAngleLeft} from 'react-icons/fa6';
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({subsets: ["latin"], weight:['200', '400', '500','600', '700']});

export default function Signup(){
    
    const router = useRouter();
    const [user, setUser] = useState({
        username: '', 
        email:'',
        password: '',
    });

    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [loading, setLoading] = useState(false);

    const onSignUp = async () =>{
        try {
            setLoading(true);
            const response = await axios.post('/api/users/signup', user)
            console.log('Signed Up', response.data);
            router.push('/user/login') // Moving the user to the login page
        } catch (error:any) {
            console.log(error.message)
        }finally{
            setLoading(false);
        }
    }

    useEffect(()=>{
        if(user.username.length>0 && user.email.length>0 && user.password.length>0){
            setButtonDisabled(false);
        }
        else{
            setButtonDisabled(true);
        }
    })

    return(
        
        <div className={['flex flex-col justify-content py-2 mx-[10vw] ', montserrat.className].join(' ')}>
            
            <h1 className="py-6  text-dark-color text-7xl">
                {loading ? "Processing. . ." : "Sign Up"}
            </h1>
            <Link href="/user/login" className="mb-5">
                    <p>Do you already have an account? <span className="font-bold text-med-color ml-2 cursor-pointer underline">Login to your account</span></p>
            </Link>
            <div className="space-y-6">
                <input className="w-[80vw] text-state-800 p-2 border border-gray-300 rounded-lg mb-2 focus:outline-none focus:border-dark-color" 
                    type="text" 
                    id="username" 
                    value={user.username} 
                    onChange={(e)=> setUser({...user, username: e.target.value})} 
                    placeholder="Username" 
                    autoComplete="off"
                />
                <input className="w-[80vw] text-state-800 p-2 border border-gray-300 rounded-lg mb-2 focus:outline-none focus:border-dark-color" 
                    type="text" 
                    id="email" 
                    value={user.email} 
                    onChange={(e)=> setUser({...user, email: e.target.value})} 
                    placeholder="Email" 
                    autoComplete="off"
                />
                <input className="w-[80vw] text-state-800 p-2 border border-gray-300 rounded-lg mb-2 focus:outline-none focus:border-dark-color" 
                    type="password" 
                    id="password" 
                    value={user.password} 
                    onChange={(e)=> setUser({...user, password: e.target.value})} 
                    placeholder="Password" 
                    autoComplete="off"
                />
                {buttonDisabled ? <></>: <button className="p-3" onClick={onSignUp}>Sign Up</button> }
                
            </div >
   
            <Link href="/">
                <p className="mt-4 opacity-50">
                    <FaAngleLeft className="inline mr-1"/> Back to Homepage
                </p>
            </Link>
            
        </div>
    )
}