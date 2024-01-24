import { Abouts } from "@/components/Landing/About";
import Banner from "@/components/Landing/Banner";
import ContractSection from "@/components/Landing/Conteact";
import LandingHeader from "@/components/Landing/Header";
import { Navjsx } from "@/components/Landing/Navbar";
import WorkSection from "@/components/Landing/Work";
import Services from "@/components/Landing/services";

export default function Home() {
  return (
    <>
      <LandingHeader path="/" />
      <Navjsx />
      <Banner path="/" />
      <section className="section" id="about">
        <Abouts />
      </section>
      <Services />
      <WorkSection />
      <ContractSection />
    </>
  );
}
