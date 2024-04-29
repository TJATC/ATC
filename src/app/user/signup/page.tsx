"use client"
import Link from "next/link";
import React, {useEffect, useState} from "react";
import {useRouter} from 'next/navigation'
import axios from 'axios';
import {FaAngleLeft} from 'react-icons/fa6';

export default function Signup(){
    
    const router = useRouter();
    const [user, setUser] = useState({
        username: '', 
        email:'',
        password: '',
    });
    return(
        
        <div className="flex flex-col justify-content py-2 mx-10">
            
            <h1 className="py-10 mb-10 text-dark-color text-7xl">
                Sign Up
            </h1>
        </div>
    )
}