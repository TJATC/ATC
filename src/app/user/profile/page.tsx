'use client';

import axios from 'axios'
import {useRouter} from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import UserProfile from './UserProfile';
import "./profile.css"

export default function Profile(){
    const router = useRouter()
    const [user, setUser] = useState({username:"", name: "", bio:"", image: "", streak:""})

    const onSignOut = async ()=>{
        try {
            const response = await axios.get('/api/users/logout')
            router.push('/')
        } catch (error:any) {
            console.log(error.message)
        }
    }

    useEffect(()=>{
        async function fetchData(){
            try {
                // const response = await axios.post('/api/access/', {token: 'token'})
                // const data = response.data 
                const response = await axios.post('/api/users/getdata', {token: 'token'})
                const data =  response.data          
                for(let [key, value] of Object.entries(user)){
                    if ( value!=data[key]){
                        setUser(user =>({
                            ...user, 
                            ...{[key]:data[key]}
                        }));
                    }
                }

                
                console.log(user)
            } catch (error) {
                
            }
        }
       fetchData()
    }, []);
    console.log(user)
    return(
        <div className={['m-5 flex', "Profile"].join(" ")}>
            <div className={['flex justify-start', "UserData"].join(" ")}><p>Place holder</p></div>
            <div className={['ProfileSection', 'flex flex-col content-center items-center jusitfy-end'].join(" ")}>
                <UserProfile  username = {user.username} name = {user.name} bio = {user.bio} image = {user.image}/>
                <div className='flex gap-2 w-[75%]'>
                    <button className="text-center grow">Edit Profile</button>
                    <button className="grow-0 w-fit]" onClick={onSignOut}>Log Out</button>
                </div>
            </div>
        </div>
    )
}