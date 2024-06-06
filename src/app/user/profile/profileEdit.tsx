"use client"
import Image from "next/image"
import { useRef, useState } from "react"
import axios from "axios"
import {useRouter} from 'next/navigation'

interface UserProfileProps{
    username: any, 
    name: any, 
    bio: any, 
    image: any,
    setToggleUser: any,
    fetchData: any,
}


export default function profileEdit(props:UserProfileProps){
    const router = useRouter();
    const [user, setUser] = useState({
        username: props.username,
        name: props.name, 
        bio: props.bio, 
    })



    const onSave = async () =>{
        console.log("User Data:", user)
        try {
            const response = await axios.post('/api/users/updatedata', user)
            console.log('Save Successful', response.data);
            // router.push('/user/pro  file');
            // router.refresh();// Moving the user to the login page
            props.setToggleUser(true)
            props.fetchData()
        } catch (error:any) {
            console.log(error.message)
        }
    }

    return(
        <div className={['ProfileSection', 'flex flex-col content-center items-center jusitfy-end'].join(" ")}>
                <div className={["flex flex-col", "UserProfile"].join(' ')}>
            <div className="Image">
                {props.image && props.image!=""? <></> : <Image src='/profile/temp3.png' width={300} height={300} alt="Picture of the author"/>}
            </div>
            <div className="mt-2 flex flex-col">
                <p>Click <a className="text-red-700 underline mb-3" href="/user/image">here</a> to change your profile image!</p>
                <label htmlFor="name">Name</label> 
                <input 
                    type="text" 
                    placeholder="Name" 
                    value = {user.name}
                    onChange = {(e) => setUser({...user, name: e.target.value})}
                    id="name"
                />
                
                <br />
                <label htmlFor="name">Bio</label> 
                <textarea 
                    placeholder="Bio" 
                    value = {user.bio}
                    onChange = {(e) => setUser({...user, bio: e.target.value})}
                    id="bio"
                />
            </div>
            
        </div>
                <div className='flex gap-2 w-[75%]'>
                    <button className="text-center grow" onClick={onSave}>Save</button>                                
                </div>
            </div>
        
    )
}

