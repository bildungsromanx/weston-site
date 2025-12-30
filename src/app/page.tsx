// "use client";

// export default function HomePage({ dark, setDark }) {
//   return (
//     <main
//       className="
//         w-full
//         min-h-[150vh]
//         pt-0
//         pb-20
//         bg-cover bg-center bg-no-repeat
//         transition-colors duration-300
//         -mt-20
//       "
//       style={{
//         backgroundImage: dark
//           ? "url('/night.jpg')"
//           : "url('/day.jpg')",
//       }}
//     >
//       {/* You no longer need the toggle here */}
//     </main>
//   );
// }


// "use client";

// import { useTheme } from "@/context/ThemeContext";

// export default function HomePage() {
//   const { dark } = useTheme();

//   return (
//     <main
//       className="
//         w-full
//         min-h-[150vh]
//         pt-0
//         pb-20
//         bg-cover bg-center bg-no-repeat
//         transition-colors duration-300
//         -mt-20
//       "
//       style={{
//         backgroundImage: dark
//           ? "url('/night.jpg')"
//           : "url('/day.jpg')",
//       }}
//     >
//     </main>
//   );
// }



"use client";

import { useTheme } from "@/context/ThemeContext";
import { useEffect, useState } from "react";

export default function HomePage() {
  const { dark } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <main
      className="
        w-full
        min-h-[150vh]
        pt-0
        pb-20
        bg-cover bg-center bg-no-repeat
        transition-colors duration-300
        -mt-30
      "
      style={{
        backgroundImage: mounted
          ? dark
            ? "url('/night.jpg')"
            : "url('/day3.jpg')"
          : "none",
      }}
    />
  );
}
