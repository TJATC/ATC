import Image from "next/image"

interface UserProfileProps{
    username: any, 
    name: any, 
    bio: any, 
    image: any
}

export default function UserProfile(props:UserProfileProps){


    return(
        <div className={["flex-col", "UserProfile"].join(' ')}>
            <div className="Image">
                {props.image && props.image!=""? <></> : <Image src='/profile/temp3.png' width={300} height={300} alt="Picture of the author"/>}
            </div>
            <div className="mt-2">
                {props.name && props.name!="" ? <h2 className='text-[2.5em] text-black'>{props.name}</h2> : <></>}
                <h1 className='text-[2em] text-slate-400'>{props.username}</h1>
                {props.bio && props.image!="" ?<p>{props.bio}</p> : <></>}
                
            </div>
            
        </div>

    )
}