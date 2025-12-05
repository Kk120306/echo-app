import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/landing/Hero";
import InfoSection from "@/components/landing/InfoSection";
import Pricing from "@/components/landing/Pricing";
import Footer from "@/components/Footer";

export default function LandingPage() {
    return (
        <div className="flex flex-col min-h-screen bg-black">
            <Navbar />
            <Hero />
            <InfoSection />
            <Pricing />
            <Footer />
        </div>
    );
}