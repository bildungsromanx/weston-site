
// "use client";

// import { useState } from "react";
// import PageWithNavbar from "@/components/layout/PageWithNavbar";
// import { drawings } from "@/data/drawings";
// import Image from "next/image";

// export default function GalleryPage() {
//   const [index, setIndex] = useState(0);

//   const prev = () => {
//     setIndex((prev) => (prev === 0 ? drawings.length - 1 : prev - 1));
//   };

//   const next = () => {
//     setIndex((prev) => (prev + 1) % drawings.length);
//   };

//   return (
//     <PageWithNavbar variant="light">
//       <main className="pt-2 pb-20 max-w-4xl mx-auto px-6">
//         <h1 className="text-3xl text-center">
//           Hidden Waters 2024–2025
//         </h1>

//         <p className="text-center max-w-2xl mx-auto mt-6 mb-12 text-md leading-relaxed">
// Hidden Waters is a continuous series of monochromatic drawings that started in 2024. The technique of automatism, known as automatic drawing, is used in this series. This technique allows the subconscious to produce spontaneous movements and gestures without conscious movements taking over. With motifs seen in medieval tapestries, through a kaleidoscope lens of visual storytelling- Hidden Waters is a series that is veiled in layers of graphite with imagery viewed as dream-like fragments.        </p>

//         {/* Main slideshow */}
//         <div className="relative w-full aspect-[4/3] overflow-hidden rounded-md bg-[#FFFFFF]">
//           <Image
//             key={drawings[index].src}
//             src={drawings[index].src}
//             alt=""
//             fill
//             className="object-contain transition-opacity duration-500"
//           />

//           {/* Left arrow */}
//           <button
//             onClick={prev}
//             className="
//               absolute left-4 top-1/2 -translate-y-1/2
//               bg-white/60 hover:bg-white/80
//               text-black px-1 py-1 
//               transition
//             "
//           >
//             ←
//           </button>

//           {/* Right arrow */}
//           <button
//             onClick={next}
//             className="
//               absolute right-4 top-1/2 -translate-y-1/2
//               bg-white/60 hover:bg-white/80
//               text-black px-1 py-1
//               transition
//             "
//           >
//             →
//           </button>
//         </div>

//         {/* Thumbnail strip */}
//         <div className="mt-6 flex gap-4 overflow-x-auto pb-2">
//           {drawings.map((item, i) => (
//             <button
//               key={i}
//               onClick={() => setIndex(i)}
//               className="shrink-0"
//             >
//               <div
//                 className={`
//                   relative w-24 h-24 rounded-md overflow-hidden
//                   transition-opacity duration-300
//                   ${i === index ? "opacity-100" : "opacity-40 hover:opacity-70"}
//                 `}
//               >
//                 <Image
//                   src={item.src}
//                   alt=""
//                   fill
//                   className="object-contain bg-[#FFFFFF]"
//                 />
//               </div>
//             </button>
//           ))}
//         </div>
//       </main>
//     </PageWithNavbar>
//   );
// }




"use client";

import { useState } from "react";
import PageWithNavbar from "@/components/layout/PageWithNavbar";
import { drawings } from "@/data/drawings";
import Image from "next/image";

export default function GalleryPage() {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((prev) => (prev === 0 ? drawings.length - 1 : prev - 1));
  };

  const next = () => {
    setIndex((prev) => (prev + 1) % drawings.length);
  };

  return (
    <PageWithNavbar variant="light">
      <main className="pt-2 pb-20 max-w-4xl mx-auto px-6">
        <h1 className="text-3xl text-center">Hidden Waters 2024–2025</h1>

        <p className="text-center max-w-2xl mx-auto mt-6 mb-12 text-md leading-relaxed">
          Hidden Waters is a continuous series of monochromatic drawings that
          started in 2024. The technique of automatism, known as automatic
          drawing, is used in this series. This technique allows the
          subconscious to produce spontaneous movements and gestures without
          conscious movements taking over. With motifs seen in medieval
          tapestries, through a kaleidoscope lens of visual storytelling—Hidden
          Waters is a series that is veiled in layers of graphite with imagery
          viewed as dream-like fragments.
        </p>

        {/* Main slideshow */}
        <div className="relative w-full aspect-[4/3] overflow-hidden rounded-md bg-[#FFFFFF]">
          <Image
            key={drawings[index].src}
            src={drawings[index].src}
            alt=""
            fill
            className="object-contain transition-opacity duration-500"
          />

          {/* Left arrow */}
          <button
            onClick={prev}
            className="absolute left-1 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-white/80 text-black px-1 py-1 transition"
          >
            ←
          </button>

          {/* Right arrow */}
          <button
            onClick={next}
            className="absolute right-1 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-white/80 text-black px-1 py-1 transition"
          >
            →
          </button>
        </div>

        {/* Thumbnail strip */}
        <div className="mt-6 flex gap-4 overflow-x-auto pb-2">
          {drawings.map((item, i) => (
            <button key={i} onClick={() => setIndex(i)} className="shrink-0">
              <div
                className={`relative w-24 h-24 rounded-md overflow-hidden transition-opacity duration-300 ${
                  i === index
                    ? "opacity-100"
                    : "opacity-40 hover:opacity-70"
                }`}
              >
                <Image
                  src={item.src}
                  alt=""
                  fill
                  className="object-contain bg-[#FFFFFF]"
                />
              </div>
            </button>
          ))}
        </div>
      </main>
    </PageWithNavbar>
  );
}
