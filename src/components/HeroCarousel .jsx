"use client";
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import autoplay from "embla-carousel-autoplay";

import { hero_carousel_array as data } from '@/contants/appData';

const HeroCarousel  = () => {
  return (
      <Carousel plugins={[autoplay({delay:2000})]}>
        <CarouselContent>
          {data?.map((data, index)=>(
            <CarouselItem key={index} style={{ backgroundImage: `url(${data.img})` }}
              className="w-full h-full bg-cover bg-center pt-5 bg-no-repeat relative pointer-events-none">
                <div className="absolute top-0 right-0 bottom-0 left-0 bg-[rgba(0,0,0,0.6)] opacity-60"/>
              {data.title}
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
  )
}

export default HeroCarousel 