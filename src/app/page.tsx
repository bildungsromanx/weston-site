import PageWithNavbar from "@/components/layout/PageWithNavbar";

export default function HomePage() {
  return (
    <PageWithNavbar variant="dark">
      <div className="w-full">
        <main
          className="w-full min-h-[105vh] pt-0 pb-20 bg-cover md:bg-cover bg-top md:bg-center transition-colors duration-300 -mt-30"
          style={{
            backgroundImage: "url('/drawing/14.jpg')",
          }}
        >
        </main>
      </div>
    </PageWithNavbar>
  );
}
