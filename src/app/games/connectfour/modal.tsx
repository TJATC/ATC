"use client"
import React, { useState, useEffect } from "react";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
// import { motion } from "framer-motion"
import Image from "next/image";

interface ModalProps {
isOpen: boolean;
  onClose: () => void;
  img: string;
  name: string;
}

export function Modal({ isOpen, onClose,img, name }:ModalProps) {
    if (!isOpen) return null;
  const [imgDimensions, setImgDimensions] = useState({ width: 800, height: 500 });
  const [maxDimensions, setMaxDimensions] = useState({ width: 800, height: 500 });

  useEffect(() => {
    const updateMaxDimensions = () => {
      setMaxDimensions({
        width: window.innerWidth * 0.9,
        height: window.innerHeight * 0.8,
      });
    };
    updateMaxDimensions();
    window.addEventListener("resize", updateMaxDimensions);

    return () => window.removeEventListener("resize", updateMaxDimensions);
  }, []);


  const aspectRatio = imgDimensions.width / imgDimensions.height;
  let scaledWidth = imgDimensions.width;
  let scaledHeight = imgDimensions.height;

  if (scaledWidth > maxDimensions.width) {
    scaledWidth = maxDimensions.width;
    scaledHeight = scaledWidth / aspectRatio;
  }
  if (scaledHeight > maxDimensions.height) {
    scaledHeight = maxDimensions.height;
    scaledWidth = scaledHeight * aspectRatio;
  }

  return (
    <div 
    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
    onClick={onClose}>
      <div
        className="relative bg-white rounded-md bg-opacity-90 overflow-hidden"
        style={{ width: scaledWidth, height: scaledHeight + 40 }}
        onClick={(e) => e.stopPropagation()} // Prevents modal close on clicking the content
      >
        <button onClick={onClose} className="absolute top-2 right-2 text-xl font-bold">
          &times;
        </button>
        <div className="flex flex-col p-4 items-center mt-2 " style={{ maxHeight: scaledHeight + 40, overflowY: "auto" }}>
          <div className="relative w-full h-full mb-4">
            <Image
              src={img}
              alt={name}
              layout="responsive"
              width={imgDimensions.width}
              height={imgDimensions.height}
              onLoadingComplete={({ naturalWidth, naturalHeight }) => setImgDimensions({ width: naturalWidth, height: naturalHeight })}
            />
          </div>
        </div>
      </div>
      </div>
  );
}
