import FooterInfo from "@/(assets)/Footer.json"
export default function Footer(){
    return(
        <div className=" bg-slate-800 flex pt-[2.5em] pb-[1.3em] px-[2em] text-gray-400 gap-[5em]">
            {
               FooterInfo.map(({name, link}, index)=>(
                    <a href={link} key={index}>{name} </a>
                )) 
            }
        </div>
    )
}