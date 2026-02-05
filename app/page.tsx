import Hero from "@/components/home/Hero";
import AboutHome from "@/components/home/About";
import ExhibitionsHome from "@/components/home/Exhibitions";
import WhyUs from "@/components/home/WhyUs";
import Stats from "@/components/home/Stats";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutHome />
      <ExhibitionsHome />
      <WhyUs />
      <Stats />
    </>
  );
}
