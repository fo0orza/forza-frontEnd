import HeroContent from "@/components/shared/hero/hero-content";
import HeroVideo from "@/components/shared/hero/hero-video";

const HeroSection = () => {
    return (
        <div className="relative min-h-screen w-screen overflow-hidden">
            <HeroVideo className="absolute -z-2 inset-0 h-full w-full object-cover" />
            <HeroContent />
        </div>
    );
};

export default HeroSection;