import * as React from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function ImageSlider({images}:{images:string[]}) {
  return (
    <Carousel className="w-full max-w-full max-h-full">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index} className="w-full">
            <div className="w-full h-full">
                <img className="z-20"  src={image} alt='template preview image' />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute ml-2 left-0 z-20 bottom-20">


      <CarouselPrevious />
      </div>
      <div className="absolute ml-2 left-0 z-30 mt-10 bottom-10">
      <CarouselNext />

      </div>
    </Carousel>
  )
}
