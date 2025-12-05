import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="px-23 border-t border-white/30 py-6 flex justify-center bg-black">
            <Image
                src="/assets/logo/white.png"
                width={128}
                height={24}
                alt="Logo"
            />

        </footer>
    );
}

export default Footer;