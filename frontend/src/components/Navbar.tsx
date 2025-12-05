'use client'

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Reviews", href: "#testimonials" }
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Detect scroll
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav
            className={`
                fixed top-0 left-0 w-full z-50
                transition-all duration-300
                ${scrolled ? "opacity-0" : "bg-transparent py-6"}
                ${isOpen ? "bg-gray-800 py-4" : "py-6"}
            `}
        >
            <div className="px-6 flex items-center justify-between">
                <Image
                    src="/assets/logo/white.png"
                    width={128}
                    height={24}
                    alt="Logo"
                />

                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map(link => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-gray-300 hover:text-white transition"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button className="bg-gray-700 text-white">Get Started</Button>
                </div>

                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen((p) => !p)}
                >
                    {isOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
            </div>

            {/* Mobile expanding menu */}
            <div
                className={`
                    overflow-hidden transition-all duration-500 md:hidden
                    ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
                `}
            >
                <ul className="flex flex-col gap-4 px-6 pt-4 pb-6">
                    {navLinks.map(link => (
                        <li key={link.name}>
                            <Link
                                href={link.href}
                                className="block text-lg text-gray-200 hover:text-white"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                    <Button className="w-full bg-gray-700 text-white mt-2">
                        Get Started
                    </Button>
                </ul>
            </div>
        </nav>
    );
}
