import HeroSection from "@/components/HeroSections";
import NavBar from "@/components/navbar";
import SideBar from "@/components/sidebar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <SideBar />
    </div>
  );
}
