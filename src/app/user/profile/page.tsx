'use client';

import axios from 'axios'
import {useRouter} from 'next/navigation';

export default function Profile(){
    const router = useRouter()
    const onSignOut = async ()=>{
        try {
            const response = await axios.get('/api/users/logout')
            router.push('/')
        } catch (error:any) {
            console.log(error.message)
        }
    }
    return(
        <div>
            <button className="p-3" onClick={onSignOut}>Log Out</button>
        </div>
    )
}