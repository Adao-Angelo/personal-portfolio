"use client";

import Technologies from "@/components/Technologies";
import { CaretDoubleDownIcon } from "@phosphor-icons/react";

export default function Home() {
  return (
    <div className="text-center">
      <section className="bg-[url('/Background_Intro.png')] bg-cover bg-no-repeat pt-48 pb-24">
        <div className="mx-auto w-48 h-48 mb-20">
          <div className="bg-[url('/me.png')] w-full h-full bg-cover bg-no-repeat rounded-full" />
        </div>

        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-inconsolata text-subtitle text-gray-200">
            Hello World! My name is
            <span className="text-red"> Adão João</span> and I am
          </h2>

          <h1 className="font-asap text-title-lg text-gray-100 mt-2 mb-6">
            Fullstack Developer
          </h1>

          <p className="font-maven text-text-sm text-gray-300 leading-relaxed">
            Transform needs into real, evolving and functional applications. I
            develop systems through my passion for technology, contributing to
            innovative and effective solutions to complex challenges.
          </p>
        </div>

        <div className="my-32">
          <Technologies />
        </div>

        <CaretDoubleDownIcon className="text-gray-300 mx-auto" size={24} />
      </section>

      <section>
        <h2 className="font-inconsolata text-subtitle text-red">My works</h2>
        <h1 className="font-asap text-title-md text-gray-100">
          See the prominent projects
        </h1>
      </section>
    </div>
  );
}
