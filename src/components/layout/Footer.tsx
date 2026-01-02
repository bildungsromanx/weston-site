
"use client";
export default function Footer() {

  return (
    <footer
      className={`
        w-full 
        py-16 px-6
        text-center
        transition-colors duration-300
        bg-[#faf6f1] text-[#242424]
      `}
    >
      <div className="max-w-2xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl tracking-wide mb-4">
          Weston Throckmorton
        </h2>
        <p className="text-sm opacity-70 max-w-md mb-6 leading-relaxed">
          “do you want a quote here?”
        </p>
        <a
          href="mailto:westonthrockmorton@gmail.com"
          className="text-sm opacity-80 hover:opacity-100 transition-opacity"
        >
          westonthrockmorton@gmail.com
        </a>
      </div>
    </footer>
  );
}
