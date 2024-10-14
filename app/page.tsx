import About from "@/components/About";
import Banner from "@/components/Banner";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="h-full w-full bg-no-repeat bg-cover md:bg-contain">
      <div className="flex flex-col gap-10 md:gap-20 px-4 md:px-10">
        <Banner />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Footer />
      </div>
    </main>
  );
}
