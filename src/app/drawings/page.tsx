// "use client";

// import { useEffect, useState } from "react";
// import PageWithNavbar from "@/components/layout/PageWithNavbar";


// const images = [
//   "/drawing/2a.jpeg",
//   "/drawing/6a.jpeg",
//   "/drawing/5b.jpeg",
//   "/drawing/9.jpg",
//   "/drawing/5a.jpg",
// ];

// export default function DrawingsPage() {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % images.length);
//     }, 6000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <PageWithNavbar variant="light">
//     <main
//       className="
//         relative
//         w-full
//         min-h-[105vh]
//         pt-24
//         pb-20
//         bg-top md:bg-center
//         -mt-30
//         overflow-hidden
//       "
//     >
//       {/* Background slideshow (non-fixed) */}
//       <div className="absolute inset-0 -z-10">
//         {images.map((src, i) => (
//           <div
//             key={i}
//             className={`
//               absolute inset-0 bg-cover bg-center transition-opacity duration-[2000ms]
//               ${i === index ? "opacity-60" : "opacity-0"}
//             `}
//             style={{ backgroundImage: `url(${src})` }}
//           />
//         ))}
//       </div>

//       {/* Page content */}
//       <div className="relative min-h-[105vh] -mt-30 flex items-center justify-center">
//         <div className="text-center">
//           <h1 className="text-4xl mb-12 tracking-wide">Drawings</h1>
//           <h1 className="text-4xl mb-12 tracking-wide">Illustrations</h1>
//           <h1 className="text-4xl mb-12 tracking-wide">Year</h1>
//         </div>
//       </div>
//     </main>
//     </PageWithNavbar>
//   );
// }



"use client";

import { useEffect, useState } from "react";
import PageWithNavbar from "@/components/layout/PageWithNavbar";

const images = [
  "/drawing/2a.jpeg",
  "/drawing/6a.jpeg",
  "/drawing/5b.jpeg",
  "/drawing/9.jpg",
  "/drawing/5a.jpg",
];

export default function DrawingsPage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <PageWithNavbar variant="light">
      <main
        className="
          relative
          w-full
          min-h-[105vh]
          pt-24
          pb-20
          bg-top md:bg-center
          -mt-30
          overflow-hidden
        "
      >
        {/* Background slideshow */}
        <div className="absolute inset-0 -z-10">
          {images.map((src, i) => (
            <div
              key={i}
              className={`
                absolute inset-0 bg-cover bg-center transition-opacity duration-[2000ms]
                ${i === index ? "opacity-60" : "opacity-0"}
              `}
              style={{ backgroundImage: `url(${src})` }}
            />
          ))}
        </div>

        {/* Centered content */}
        <div className="relative min-h-[105vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl mb-12 tracking-wide">Drawings</h1>
            <h1 className="text-4xl mb-12 tracking-wide">Illustrations</h1>
            <h1 className="text-4xl mb-12 tracking-wide">Year</h1>
          </div>
        </div>
      </main>
    </PageWithNavbar>
  );
}
