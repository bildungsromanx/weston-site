"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <main
      className="
        min-h-screen 
        w-full 
        px-6 
        pt-20 
        pb-20 
        flex 
        flex-col 
        items-center 
        text-center
        bg-white dark:bg-black
        text-black dark:text-white
        transition-colors duration-300
      "
    >
      <div className="max-w-xl mb-12">
        <h1 className="text-3xl font-semibold mb-4">About Weston</h1>
        <p className="text-base opacity-80 leading-relaxed">
          Weston is a person he does cool things. 
        </p>
      </div>

      <div className="w-full max-w-sm">
        <Image
          src="/about.jpg"
          alt="Weston"
          width={600}
          height={600}
          className="w-full h-auto rounded-lg object-cover"
        />
      </div>
    </main>
  );
}
