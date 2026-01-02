// "use client";

// import Image from "next/image";
// import PageWithNavbar from "@/components/layout/PageWithNavbar";




// export default function AboutPage() {
//   return (
//     <PageWithNavbar variant="light">
//     <main
//       className="
//         min-h-screen 
//         w-full 
//         px-6 
//         pt-20 
//         pb-20 
//         flex 
//         flex-col 
//         items-center 
//         text-center
//         transition-colors duration-300
//         bg-[#faf6f1] text-[#242424]
//       "
//     >
//       <div className="max-w-xl mb-12">
//         <h1 className="text-3xl mb-4">About Weston</h1>
//         <p className="text-base opacity-80 leading-relaxed">
//           Weston is a person he does cool things.
//         </p>
//       </div>

//       <div className="w-full max-w-sm">
//         <Image
//           src="/about.jpg"
//           alt="Weston"
//           width={600}
//           height={600}
//           className="w-full h-auto object-cover"
//         />
//       </div>
//     </main>
//     </PageWithNavbar>
//   );
// }



"use client";

import Image from "next/image";
import PageWithNavbar from "@/components/layout/PageWithNavbar";

export default function AboutPage() {
  return (
    <PageWithNavbar variant="light">
      <main
        className="min-h-screen w-full px-6 pt-20 pb-20 flex flex-col items-center text-center transition-colors duration-300 bg-[#faf6f1] text-[#242424]"
      >
        <div className="max-w-xl mb-12">
          <h1 className="text-3xl mb-4">About Weston</h1>
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
            className="w-full h-auto object-cover"
          />
        </div>
      </main>
    </PageWithNavbar>
  );
}
