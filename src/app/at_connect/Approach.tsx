import Blurb from "./Blurb"
import { IoPersonOutline } from "react-icons/io5";
import { FaAssistiveListeningSystems } from "react-icons/fa";
import { FaHandsHelping } from "react-icons/fa";

export default function Approach(){
    return(
        <div className="flex flex-wrap justify-center items-center gap-[2vw] mt-2">
            <div>
                <Blurb blurb="Each week, we create games and activities for the students with verbal disabilities, who we meet with during Wednesday club meetings. 
                These activities are on the Game tab." num="What is ATConnect?"/>
            </div>
            <div>
                <Blurb blurb="Each year, we split into long term project groups to design games for the students with motor disabilities.
                 Last year, we created digital games compatible with the switch buttons they use to interact with their computers." num="What Do We Do?"/>
            </div>
            <div>
                <Blurb blurb="These games can be played with a single computer input, allowing the students to master using their switch buttons. 
                These games are available in the Project tab. If you’d like more information on our club, please contact us at TJATClub@gmail.com" num="Our Purpose?"/>
            </div>
        </div>
    )
}