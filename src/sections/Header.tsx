'use client'
import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/digihealth_logo.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";

export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20" onClick={() => window.location.href = 'https://www.google.com'}>
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">Découvrez l'enseignement du numérique en Santé</p>
        <div className="inline-flex gap-1 items-center">
          <p>Inscrivez-vous gratuitement</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>

      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image src={Logo} alt="Saas logo" height={40} width={40} />
            <MenuIcon className="h-5 w-5 hidden" />
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <a href="https://www.google.com">Programme</a>
              <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight">
                S'inscrire gratuitement
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
