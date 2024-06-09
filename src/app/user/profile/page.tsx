'use client';

import axios from 'axios'
import {useRouter} from 'next/navigation';
import { useEffect, useState } from 'react';
import UserProfile from './UserProfile';
import ProfileEdit from './profileEdit';
import { FaFire } from "react-icons/fa";
import { SiStreamrunners } from "react-icons/si";
import { BsBrightnessAltHighFill } from "react-icons/bs";
import Award from './Award';
import "./profile.css"

export default function Profile(){
    const router = useRouter()
    const [user, setUser] = useState({username:"", name: "", bio:"", image: "", streak:"", activity:"", highstreak:""})
    const [toggleUser, setToggleUser] = useState(true)

    const onSignOut = async ()=>{
        try {
            const response = await axios.get('/api/users/logout')
            console.log(response)
            router.push('/')
        } catch (error:any) {
            console.log(error.message)
        }
    }
    const switchToggle = () => {
        if(toggleUser) setToggleUser(false)
        else setToggleUser(true)
    }

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
    useEffect(()=>{
       fetchData()
    }, []);

    console.log(user)
    return(
        <div className={['m-5 flex', "Profile"].join(" ")}>
            {toggleUser ? 
            <div className={['ProfileSection', 'flex flex-col content-center items-center jusitfy-end ml-[5%]'].join(" ")}>
                <UserProfile  username = {user.username} name = {user.name} bio = {user.bio} image = {user.image}/>
                <div className='flex gap-2 w-[75%]'>
                    <button className="text-center grow" onClick={switchToggle}>Edit Profile</button>
                    <button className="grow-0 w-fit]" onClick={onSignOut}>Log Out</button>
                </div>
            </div>
            : 
            <div className='flex flex-col content-center items-center jusitfy-end'>
                <ProfileEdit  username = {user.username} name = {user.name} bio = {user.bio} image = {user.image} setToggleUser = {setToggleUser} fetchData={fetchData}/>
                <div className='flex gap-2 w-[75%] mt-2'>
                    <button className="text-center grow bg-slate-50" onClick={switchToggle}>Cancel</button>       
                    <button className="grow-0 w-fit bg-slate-50" onClick={onSignOut}>Log Out</button>
                </div>
            </div>
            
            }

            <div className={['flex justify-center content-center items-center place-content-around m-5 p-5', "UserData"].join(" ")}>
                    <Award compToPass={<FaFire className=' w-[4em] h-[4em] text-[var(--med)]'/>} name="Streak" value={user.streak}/>
                    <Award compToPass={<SiStreamrunners className=' w-[4em] h-[4em] text-[var(--med)]' />} name="Activity" value={user.activity}/>
                    <Award compToPass={<BsBrightnessAltHighFill className=' w-[4em] h-[4em] text-[var(--med)]'/>} name="Highest Streak" value={user.highstreak}/>
                
            </div>
            
            
        </div>
    )
}

