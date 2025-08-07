"use client";
import React from "react";
import { exploreWorlds } from "@/utils/appData";
import ExploreCard from "./ExploreCard";
import Title from "./Title";

const Explore = () => {
  return (
    <section className="px-6 py-10" aria-labelledby="explore-heading">
      <div className="max-w-screen-2xl w-full mx-auto flex flex-col">
        <header className="text-center mb-8">
          <Title text={<span className="text-gray-900 font-extrabold">Why Ride With Us?</span>} textStyles={"text-3xl md:text-5xl font-extrabold text-[var(--primary-color)]"}/>
        </header>

        <div className="my-9 flex lg:flex-row flex-col min-h-[50vh] gap-8 lg:mx-32">
          {exploreWorlds?.map((world, index) => (
            <ExploreCard key={index} world={world} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Explore;
