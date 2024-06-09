"use client";
import Link from 'next/link'
import Hamburger from './Hamburger';
import './Nav.css'
import { Montserrat } from "next/font/google";
import React, {useState, useEffect, useRef} from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const montserrat = Montserrat({subsets: ["latin"], weight:['200', '400', '500','600', '700']});


interface BoxProps{
    place: number;
    color: string;
}

export default function Nav(props: BoxProps){

    const [LinksClass, setLinksClass] = useState("")
    const [ItemsClass, setItemsClass] = useState("")
    const [LoggedIn, setLoggedIn] = useState(false)

    useEffect(()=>{
        // const jwtToken = page()
        async function fetchData(){
            try {
                const response = await axios.post('/api/access', {token: 'token'})
                console.log(response)
                const data = response.data
                if(!Object.keys(data).length) setLoggedIn(false)
                else setLoggedIn(true)
                
            } catch (error:any) {
                console.log(error.message)
            }
        }
        fetchData();
    }, [])
    

    const toggleit = () =>{
        if (LinksClass === ""){
            setLinksClass   ("On")
            setItemsClass ("Off")
        } 
        else{
            setLinksClass("")
            setItemsClass ("")
        }
    }

    
    
    return(
        <div className={['Nav',ItemsClass, montserrat.className, props.color].join(' ')}>
            <div className={['Logo'].join(' ')}>
                <a href="/" id='LogoRI'>TJ Assistive Technology</a>
                <div id="LogoMID"></div>
                <span onClick={toggleit} className="navbar-toggle" id="js-navbar-toggle">
                   <Hamburger /> 
                </span>
            </div>
            <div className={['Navlinks', LinksClass].join(' ')}>
                <Link href="/about_us" style={props.place===0 ? { borderBottom: "5px solid #453F78"} : {}}>About Us</Link>
                <Link href="/games" style={props.place===1 ? {borderBottom: "5px solid #453F78"} : {}}>Games</Link>
                <Link href="/books" style={props.place===2 ? { borderBottom: "5px solid #453F78"} : {}}>Books</Link>
            </div>

            <div className={['Navlinks', LinksClass].join(' ')}>
                {!LoggedIn ? <Link href="/user/signup" style={props.place===3 ? { borderBottom: "5px solid #453F78"} : {}}>Sign Up</Link> : <></>}
                {!LoggedIn ? <Link href="/user/login" style={props.place===4 ? {borderBottom: "5px solid #453F78"} : {}}>Login</Link>: <></>}
                {LoggedIn ? <Link href="/user/profile" style={props.place===5 ? { borderBottom: "5px solid #453F78"} : {}}>Profile</Link> : <></>}
            </div>
        </div>
    )
    
}