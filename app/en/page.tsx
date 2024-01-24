import Banner from "@/components/Landing/Banner";
import LandingHeader from "@/components/Landing/Header";
import { Navjsx } from "@/components/Landing/Navbar";

export default function Home() {
  return (
    <>
      <LandingHeader path="/en" />
      <Navjsx />
      <Banner path="/en" />
    </>
  );
}
