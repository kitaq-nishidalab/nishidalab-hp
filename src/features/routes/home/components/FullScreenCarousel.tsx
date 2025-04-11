"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

type Props = {
  images: string[];
  text: string;
};

export default function FullScreenCarousel({ images, text }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative lg:h-[calc(70vh-80px)] h-[calc(50vh-80px)]">
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={img}
            alt={`Slide ${index}`}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
      ))}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <h1 className="text-white text-2xl lg:text-5xl font-bold text-center">
          {text}
        </h1>
      </div>
    </div>
  );
}
