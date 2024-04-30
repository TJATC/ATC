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
            router.push('/login') // Moving the user to the login page
        } catch (error:any) {
            console.log(error.message)
        }
    }

    return(
        
        <div className={['flex flex-col justify-content py-2 mx-[10vw] ', montserrat.className].join(' ')}>
            
            <h1 className="py-10 mb-4 text-dark-color text-7xl">
                Sign Up
            </h1>
            <div className="space-y-6">
                <input className="w-[80vw] text-state-800 p-2 border border-gray-300 rounded-lg mb-2 focus:outline-none focus:border-dark-color" 
                    type="text" 
                    id="username" 
                    value={user.username} 
                    onChange={(e)=> setUser({...user, username: e.target.value})} 
                    placeholder="Username . . ." 
                    autoComplete="off"
                />
                <input className="w-[80vw] text-state-800 p-2 border border-gray-300 rounded-lg mb-2 focus:outline-none focus:border-dark-color" 
                    type="text" 
                    id="email" 
                    value={user.email} 
                    onChange={(e)=> setUser({...user, email: e.target.value})} 
                    placeholder="Email . . ." 
                    autoComplete="off"
                />
                <input className="w-[80vw] text-state-800 p-2 border border-gray-300 rounded-lg mb-2 focus:outline-none focus:border-dark-color" 
                    type="text" 
                    id="password" 
                    value={user.password} 
                    onChange={(e)=> setUser({...user, password: e.target.value})} 
                    placeholder="Password . . ." 
                    autoComplete="off"
                />
                <button className="p-3" onClick={onSignUp}>Sign Up</button>
            </div >
            
        </div>
    )
}