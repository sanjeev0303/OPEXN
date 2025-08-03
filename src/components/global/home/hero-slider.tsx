import dynamic from "next/dynamic";
import { SLIDES } from "@/config/slides";
import "../embla-carousel/embla.css";

const OPTIONS = { loop: true };

const EmblaCarousel = dynamic(
  () => import("../embla-carousel/embla-carousel"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-screen bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
      </div>
    ),
  }
);

const HeroSlider = () => {
  return <EmblaCarousel slides={SLIDES} options={OPTIONS} />;
};

export default HeroSlider;
