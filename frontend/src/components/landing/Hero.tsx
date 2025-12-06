const Hero = () => {
    return (
        <section className="relative h-screen w-full bg-[url('/assets/landing/web-bg.jpg')] bg-cover bg-center bg-fixed">
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />

            <div className="absolute bottom-0 left-0 z-10 px-23 pb-9">

                <h1 className="text-white md:text-6xl text-4xl font-bold mb-6 leading-tight">
                    Discover.<br />
                    Get Discovered.
                </h1>

                <p className="text-white/90 max-w-xl mb-8 text-sm md:text-lg">
                    Discover your next obsession, or become someone else’s.
                    Echo is the only community where fans and artists connect.
                </p>

                <button className="px-10 py-3 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition">
                    Get Started
                </button>
            </div>
        </section>
    );
};

export default Hero;
