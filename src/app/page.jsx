import Hero from "@/components/organisms/Hero";
import HubungiKami from "@/components/organisms/HubungiKami";
import Keunggulan from "@/components/organisms/Keunggulan";
import Klien from "@/components/organisms/Klien";
import Layanan from "@/components/organisms/Layanan";
import Pertanyaan from "@/components/organisms/Pertanyaan";
import Portofolio from "@/components/organisms/Portofolio";
import Statistik from "@/components/organisms/Statistik";
import Testimoni from "@/components/organisms/Testimoni";
import cn from "@/lib/cn";

const Homepage = () => {
  return (
    <>
      <Hero />
      <Statistik />
      <Keunggulan />
      <Layanan />
      <Klien />
      <Portofolio />
      <Pertanyaan />
      <Testimoni />
      <hr className={cn("my-4 mx-4")} />
      <HubungiKami />
    </>
  );
};
export default Homepage;
