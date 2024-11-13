"use client"
import Image from "next/image";
import { Modal } from "./modal";
import { useState, useEffect } from "react";


interface ArtProps {
  name: string;
  img: string;
  color: string;
  index: number;
  counter: number;
  openModal: (arg0: number) => void;
}

export default function GamePiece(props: ArtProps) {

  const setModal = () => {
    console.log(props.index)
    props.openModal(props.index)
  }

  return (
        <>
        
              <div 
        className="w-[10vw] h-[10vw] bg-white-color rounded-full lg:hover:scale-105 ease-in-out duration-300
        drop-shadow-lg hover:drop-shadow-2xl"
        style = {props.color=="" ? {}:{background: props.color} }
        onClick={setModal}
      > 
      
      </div>
        </>

  );
}
