"use client";
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import autoplay from "embla-carousel-autoplay";

import { hero_carousel_array as data } from '@/utils/appData';

const HeroCarousel = () => {
  return (
    <section aria-label="Hero Carousel" className="w-full overflow-hidden">
      <Carousel
        plugins={[
          autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent>
          {data?.map((item, index) => (
            <CarouselItem
              key={index}
              style={{ backgroundImage: `url(${item.img})` }}
              className="w-full h-full bg-cover bg-center pt-5 bg-no-repeat relative pointer-events-none"
              role="group"
              aria-roledescription="slide"
              aria-label={`Slide ${index + 1}`}
            >
              <div className="absolute inset-0 bg-[rgba(0,0,0,0.6)] opacity-60"></div>

              <Card className="bg-transparent border-none relative z-10">
                <CardContent className="flex items-center justify-center p-6">
                  <article className="h-[40vh] md:h-[60vh] flex flex-col justify-center items-center text-center">
                    <header>
                      <h3 className="text-2xl lg:text-5xl text-[var(--tertiary-color)] font-bold mb-2 lg:mb-5 transition-all duration-1000">
                        {item.title}
                      </h3>
                    </header>
                    <p className="text-white text-sm md:text-2xl w-10/12 md:w-8/12 leading-relaxed flex flex-col md:flex-row items-center justify-center gap-3">
                      {item.icon && (
                        <i className={`fad fa-${item.icon} text-xl md:text-3xl`} aria-hidden="true"></i>
                      )}
                      <span>{item.text}</span>
                    </p>
                  </article>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Optional: Show next/prev buttons only on desktop */}
        <div className="hidden md:flex">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </section>
  );
};


export default HeroCarousel 