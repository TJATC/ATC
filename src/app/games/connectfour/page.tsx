"use client";
import connectfour from "@/(assets)/(games)/connectfour.json"
import { useState, useEffect } from "react";
import {Modal} from "./modal"
import GamePiece from "./gamepiece"

export default function Page() {
    const [counter, setCounter] = useState(0); //True = red, False = blue
    const [currIndex, setCurrIndex] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);
    const [color, setColor] = useState(null);

    const closeModal = () => setModalOpen(false);
    const changeCounter = () => {
        setCounter((count)=>{
            return count+1;
        });
    }

    const changeAll = () => {
        for (let i=0;  i<connectfour.length; i++)
        {
            connectfour[i].color = "";
            setCounter(0);
        }
    }
    const changeColor = (index:number) => {
        if (counter%2)
        {
            connectfour[index].color = "#FFCB77";
        }

        else {
            connectfour[index].color = "#CC2936"; 
        }

    }

    const openModal = (index: number) => {
        setCurrIndex(index)
        setModalOpen(true); //can open modal
        changeCounter();
        changeColor(index);
        console.log(counter);
    }

    const hasColor = (index:number) => {
        if (index==currIndex){
            return true;
        }
        return false;
    }
    

    return (
       <> 
        <div className=" flex flex-col flex-wrap content-center items-center justify-center p-3 ">
            <div className=" flex gap-10 flex-wrap items-center justify-center bg-blue-400 mb-10 p-3 py-5 w-[60vw]">
            {connectfour.map(({name, img, color}, index) => (
                <GamePiece name={name} img={img} index={index} color={color} counter={counter} openModal={openModal}/>
            ))}
            </div>
            <div className="bg-slate-300 p-3 rounded-3xl m-5 cursor-pointer" onClick={changeAll}>
                Reset
            </div>
            
        </div>
        <div>
        <Modal
            isOpen={modalOpen}
            onClose={closeModal}
            img={connectfour[currIndex].img}
            name={connectfour[currIndex].name}
            />
        </div>
        </>
    );
}
