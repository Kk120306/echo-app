import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/landing/Hero";

export default function LandingPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <Hero />


            <div>
                Skibidi toilet 
                <ul> </ul>
            </div>
            {/* Content */}
            <div className="relative z-10 flex flex-col justify-center h-full px-10">
                <h1 className="text-white text-6xl font-bold mb-6 leading-tight">
                    Discover.<br />
                    Get Discovered.
                </h1>

                <p className="text-white/90 max-w-xl mb-8 text-lg">
                    Discover your next obsession, or become someone else’s.
                    SoundCloud is the only community where fans and artists connect.
                </p>

                <button className="px-10 py-3 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition">
                    Get Started
                </button>
            </div>
        </div>
    );
}