import { CheckCircle } from "lucide-react";
import { PLANS } from "@/constants/pages";

const Pricing = () => {
    return (
        <section id="pricing" className="py-24 bg-black relative overflow-hidden">

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl opacity-20" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-white md:text-6xl text-4xl font-bold mb-4 leading-tight">
                        Simple Pricing
                    </h2>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto">
                        Choose the plan that scales with your sound
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {PLANS.map((plan, idx) => (
                        <div 
                            key={idx} 
                            className={`relative group flex flex-col p-8 rounded-2xl transition-all duration-300 ${
                                plan.highlighted 
                                    ? 'bg-white/10 border-2 border-white/30 hover:bg-white/15 hover:scale-105' 
                                    : 'bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 hover:scale-105'
                            }`}
                        >
                            {plan.badge && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                    <span className="px-4 py-1.5 bg-white text-black text-sm font-semibold rounded-full">
                                        {plan.badge}
                                    </span>
                                </div>
                            )}

                            <div className="text-center pb-6 border-b border-white/10">
                                <h3 className="text-white text-2xl font-semibold mb-4">{plan.title}</h3>
                                <div className="mb-3">
                                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                                    {plan.period && <span className="text-white/60 text-lg">{plan.period}</span>}
                                </div>
                                <p className="text-white/60 text-sm">
                                    {plan.description}
                                </p>
                            </div>

                            <div className="flex-1 pt-6">
                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="flex items-start text-white/80">
                                            <CheckCircle className="w-5 h-5 text-white mr-3 flex-shrink-0 mt-0.5" />
                                            <span className="text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <button 
                                className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                                    plan.highlighted
                                        ? 'bg-white text-black hover:bg-gray-200'
                                        : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                                }`}
                            >
                                {plan.buttonText}
                            </button>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <p className="text-white/50 text-sm">
                        All plans include a 14-day free trial. No credit card required.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Pricing;