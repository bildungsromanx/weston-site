
"use client";

import Image from "next/image";
import PageWithNavbar from "@/components/layout/PageWithNavbar";

export default function AboutPage() {
  return (
    <PageWithNavbar variant="light">
      <main
        className="w-full px-6 pt-2 pb-20 flex flex-col items-center text-center transition-colors duration-300 bg-[#FFFFFF] text-[#242424]"
      >
        <div className="max-w-xl mb-12">
          <h1 className="text-3xl mb-4">About Weston</h1>
          <p className="text-base leading-relaxed mb-2">
            Weston Throckmorton has an BFA in Studio Art with the focus of photography at the University of Central Florida and has been a carpenter for over 10 years. </p>

<p className="text-base leading-relaxed mb-2"> Weston's work expands into a practice utilizing anolog photography, installation and hand built sets, film making, music, and experimental animation. </p>

<p className="text-base leading-relaxed mb-2"> Weston's current work encompasses drawing with mix media using graphite, charcoal, and oil pastels. Working in the realm of magical realism, taking inspiration from tapestries and existential writing illuminating on the human conscience. Images, if photographed or drawn are left with room for ambiguity for the viewer's own interpretation.</p>

<p className="text-base leading-relaxed mb-2 ">Weston is also the creator of "Hidden Waters" currently a solo music project, music ornamented a metal core with psychedelic, ambient, and exploratory tendencies.
          </p>
        </div>

        <div className="w-full max-w-sm">
          <Image
            src="/details/about.webp"
            alt="Weston"
            width={600}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>
      </main>
    </PageWithNavbar>
  );
}
