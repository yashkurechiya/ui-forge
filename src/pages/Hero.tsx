import React from 'react';
import { Instagram, Youtube, Facebook } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen w-full bg-[#EFECE7] font-serif text-[#2D231E]">
      
      {/* 1. Sophisticated Navigation Bar */}
      <nav className="absolute top-0 w-full z-30 flex justify-between items-center px-12 py-6 border-b border-black/5">
        <div className="flex gap-8 text-[11px] uppercase tracking-widest font-sans font-medium">
          <a href="#" className="hover:opacity-50 transition-opacity">About</a>
          <a href="#" className="hover:opacity-50 transition-opacity">The Building</a>
          <a href="#" className="hover:opacity-50 transition-opacity">Location</a>
          <a href="#" className="hover:opacity-50 transition-opacity">Amenities</a>
        </div>
        
        <div className="text-xl font-semibold tracking-tighter">LP/52</div>
        
        <div className="flex items-center gap-6">
          <button className="border border-[#2D231E] px-8 py-2 text-[10px] uppercase tracking-widest hover:bg-[#2D231E] hover:text-white transition-all">
            Inquire
          </button>
          <div className="flex gap-3 scale-75 opacity-80">
            <Instagram size={20} />
            <Youtube size={20} />
            <Facebook size={20} />
          </div>
        </div>
      </nav>

      {/* 2. Content & Image Wrapper */}
      <main className="relative flex h-screen w-full flex-col md:flex-row pt-20">
        
        {/* Left Side: Editorial Content */}
        <div className="flex flex-1 flex-col justify-center px-12 lg:px-24">
          <div className="max-w-md">
            <p className="italic text-2xl mb-4 text-[#2D231E]/80">Meet me at</p>
            <h1 className="text-[100px] font-bold leading-none tracking-tight uppercase mb-6">
              La Perla
            </h1>
            <p className="text-3xl italic mb-20 opacity-90">52 Brook St.</p>
            
            <div className="max-w-[280px]">
              <p className="text-sm leading-relaxed font-sans mb-8 opacity-70">
                Introducing a new living experience at the best location in town.
              </p>
              <button className="bg-[#2D231E] text-white px-10 py-4 text-xs uppercase tracking-[0.2em] hover:opacity-90 transition-opacity">
                See Video
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: Architectural Visual */}
        <div className="relative flex-[1.5] h-full overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1600" 
            alt="La Perla Architectural Terrace" 
            className="h-full w-full object-cover"
          />
          {/* Subtle overlay to soften the image and match the cream background */}
          <div className="absolute inset-0 bg-[#EFECE7]/10 pointer-events-none"></div>
        </div>

      </main>

      {/* 3. Decorative Bottom Text (Subtle) */}
      <div className="absolute bottom-8 left-12">
         <span className="text-[10px] uppercase tracking-[0.4em] opacity-30">Luxury Living • 2024</span>
      </div>
    </div>
  );
};

export default Hero;