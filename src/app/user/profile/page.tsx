'use client';

import axios from 'axios'
import {useRouter} from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Profile(){
    const router = useRouter()
    const [user, setUser] = useState({username:""})

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
                const response = await axios.post('/api/access/', {token: 'token'})
                const data = response.data 
                if (user.username==""){
                    setUser(user =>({
                        ...user, 
                        ...{username:data['username']}
                    }));
                }
                console.log(user)
            } catch (error) {
                
            }
        }
       fetchData()
    })
    console.log(user)
    return(
        <div className='m-5'>
            <h1 className='text-[3em] text-black'>{user.username}</h1>
            <p></p>
            <button className="p-3" onClick={onSignOut}>Log Out</button>
        </div>
    )
}