"use client";
import axios from "axios";

export default function books(){
    const onLogin = async () =>{
        try {
            const response = await axios.post('/api/slides')
            console.log(response)
            console.log('Login Successful Up', response.data);
        } catch (error:any) {
            console.log(error.message)
        }
    }
    onLogin()
    return(
        
        <div>
            <p>books</p>
        </div>
    )
}