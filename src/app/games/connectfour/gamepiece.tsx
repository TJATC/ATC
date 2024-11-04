"use client"
import Image from "next/image";
import { Modal } from "./modal";
import { useState, useEffect } from "react";


interface ArtProps {
  name: string;
  img: string;
  color: boolean;
}

export default function GamePiece(props: ArtProps) {
  const [modalOpen, setArtModalOpen] = useState(false);
  const openModal = () => {
    setArtModalOpen(true);
  }
  const closeModal = () => setArtModalOpen(false);

  return (
        <>
              <div 
        className="w-[10vw] h-[10vw] bg-white-color rounded-full lg:hover:scale-105 ease-in-out duration-300
        drop-shadow-lg hover:drop-shadow-2xl"
        onClick={openModal}
      >

      </div>
    <div>
    <Modal
        isOpen={modalOpen}
        onClose={closeModal}
        img={props.img}
        name={props.name}
        />
    </div>
        
        </>

  );
}
