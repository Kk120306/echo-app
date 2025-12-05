import { AudioLines, UploadCloud, Sprout, DollarSign } from "lucide-react";

const items = [
    {
        title: "Relax and Listen",
        description: "Enjoy high-quality audio content anytime, anywhere.",
        icon: <AudioLines size={48} />
    },
    {
        title: "Unlimited Uploads",
        description: "Fast and reliable uploads with our optimized servers.",
        icon: <UploadCloud size={48} />
    },
    {
        title: "Grow Your Audience",
        description: "Reach more people with our built-in sharing tools.",
        icon: <Sprout size={48} />
    },
    {
        title: "Get Paid",
        description: "Monetize your content and earn revenue easily.",
        icon: <DollarSign size={48} />
    }
]

const InfoSection = () => {
    return (
        <section className="px-2 py-24 max-w-7xl mx-auto" id="features" >
            <div className="text-center mb-16">
                <h1 className="text-white md:text-6xl text-4xl font-bold mb-4 leading-tight">
                    Get it all in one place.
                </h1>
                <p className="text-white/60 text-lg max-w-2xl mx-auto">
                    Everything you need to create, share, and monetize your sound.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="group flex flex-col items-center text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
                    >
                        <div className="p-5 mb-5 text-white/80 group-hover:text-white transition-colors duration-300 bg-white/5 rounded-xl group-hover:bg-white/10">
                            {item.icon}
                        </div>
                        <h3 className="text-white text-xl font-semibold mb-3">
                            {item.title}
                        </h3>
                        <p className="text-white/70 text-sm leading-relaxed">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default InfoSection;