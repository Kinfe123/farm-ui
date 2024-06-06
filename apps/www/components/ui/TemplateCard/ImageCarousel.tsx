import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

export function ImageSlider({
  images,
  imgClassName,
}: {
  images: string[];
  imgClassName?: string;
}) {
  return (
    <Carousel
      orientation="horizontal"
      className="w-full max-w-full max-h-full relative"
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index} className="w-full">
            <div className="w-full h-full">
              <img
                className={cn(imgClassName, "z-30")}
                src={`/${image}`}
                alt="template preview image"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex flex-col justify-start items-start">
        <div className="absolute ml-[1.74rem] left-0 z-20 bottom-24">
          <CarouselPrevious />
        </div>
        <div className="absolute ml-2 left-0 z-30 mt-10 bottom-10">
          <CarouselNext />
        </div>
      </div>
    </Carousel>
  );
}
