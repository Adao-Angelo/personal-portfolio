"use client";

import Projects from "@/components/project/Projects";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/services/ServiceCard";
import SocialSection from "@/components/social/SocialSection";
import Techs from "@/components/Techs";
import {
  CaretDoubleDownIcon,
  CodeSimpleIcon,
  DevicesIcon,
} from "@phosphor-icons/react";
import { Paintbrush } from "lucide-react";

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
          <Techs />
        </div>

        <CaretDoubleDownIcon className="text-gray-300 mx-auto" size={24} />
      </section>

      <section className="py-[8rem]">
        <SectionHeader subtitle="My works" title="See the prominent projects" />

        <div className="p-[1.8rem]">
          <Projects></Projects>
        </div>
      </section>

      <section className="bg-gray-600 py-[8.8rem] text-left px-4 ">
        <SectionHeader
          subtitle="My services"
          title="How I can help your business"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[100rem] m-auto">
          <ServiceCard
            icon={DevicesIcon}
            iconColor="text-purple"
            title="Websites & Apps"
            description="Development of responsive and modern interfaces"
          />
          <ServiceCard
            icon={CodeSimpleIcon}
            iconColor="text-yellow"
            title="Backend Systems"
            description="Secure, scalable and efficient APIs and integrations"
          />
          <ServiceCard
            icon={Paintbrush}
            iconColor="text-green"
            title="UI/UX Design"
            description="Design focused on usability and beautiful user experience"
          />
        </div>
      </section>

      <section className="bg-[url('/Background_Contacts.png')] py-[12.8rem] bg-cover bg-no-repeat">
        <div className="mb-[8rem]  text-center">
          <h2 className="font-inconsolata text-subtitle text-red mb-[1.6rem]">
            Contact
          </h2>
          <h1 className="font-asap text-title-md text-gray-100">
            Did you like my work?
          </h1>
          <p className="font-maven text-text-sm text-gray-300 leading-relaxed mt-[0.8rem]">
            Contact or follow my social networks!
          </p>
        </div>

        <div className="max-w-[40rem] m-auto">
          <SocialSection />
        </div>
      </section>
    </div>
  );
}
