import hero1 from "/assets/hero1.png";
import hero2 from "/assets/hero2.png";
import hero3 from "/assets/hero3.png";
import hero4 from "/assets/hero4.png";
import hero5 from "/assets/hero5.png";


export const heroes = [
  {
    id: "1",
    image: hero1,
    code: `const Hero = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-zinc-100 font-sans selection:bg-yellow-200">
      
      {/* 1. Yellow Navigation Bar */}
      <nav className="relative z-30 flex w-full items-stretch border-b border-zinc-800/10 bg-[#E9E97E]">
        <div className="flex items-center gap-2 px-8 py-5 font-bold text-zinc-900 border-r border-zinc-800/20">
          <div className="flex flex-col leading-none">
            <span className="text-xl tracking-tighter uppercase italic">Aria Blake</span>
          </div>
        </div>
        
        <div className="flex flex-1 items-center justify-center gap-12 text-sm font-medium lowercase">
          <a href="#" className="hover:opacity-60 transition-opacity">listings</a>
          <a href="#" className="hover:opacity-60 transition-opacity">about</a>
          <a href="#" className="hover:opacity-60 transition-opacity">services</a>
        </div>

        <div className="flex items-center px-8 border-l border-zinc-800/20">
          <button className="text-sm font-medium hover:underline">
            Get a Free Consultation
          </button>
        </div>
      </nav>

      {/* 2. Main Hero Section */}
      <div className="relative h-[calc(100vh-68px)] w-full">
        
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=2000')" 
          }}
        >
          {/* Subtle dark gradient for text readability */}
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        {/* 3. Content Overlay */}
        <div className="relative z-10 flex h-full flex-col justify-between p-12">
          
          {/* Main Headline Group */}
          <div className="max-w-4xl pt-10">
            <h1 className="text-[140px] font-serif font-medium leading-[0.85] tracking-tight text-[#E9E97E]">
              Stop Searching.<br />
              Start Living.
            </h1>
            
            <div className="mt-16 max-w-xs">
              <p className="text-lg font-medium leading-tight text-[#E9E97E] drop-shadow-sm">
                Your Direct Path To The Home<br />You Deserve
              </p>
              <button className="mt-6 bg-[#E9E97E] px-8 py-3 text-sm font-bold uppercase tracking-wider text-zinc-900 hover:bg-white transition-colors">
                Contact Now
              </button>
            </div>
          </div>

          {/* 4. Bottom Right Listing Card & Sold Badge */}
          <div className="absolute bottom-16 right-16 flex items-end">
            
            {/* The Overlapping Sold Badge */}
            <div className="z-20 -mr-10 -mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-[#E9E97E] shadow-xl border-4 border-white/20 rotate-12">
              <span className="font-black uppercase tracking-tighter text-zinc-800 text-xl">Sold</span>
            </div>

            {/* The Listing Info Card */}
            <div className="flex w-[480px] bg-white p-4 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=400" 
                alt="House" 
                className="h-36 w-36 object-cover"
              />
              <div className="flex flex-1 flex-col justify-between pl-5 py-1">
                <h3 className="text-xl font-bold leading-tight text-zinc-800">
                  Charming Family Ranch in Greenfield Estates
                </h3>
                <div className="flex justify-between border-t border-zinc-100 pt-3 text-[13px] font-semibold text-zinc-400 uppercase tracking-widest">
                  <span>3 Bed</span>
                  <span>2 Bath</span>
                  <span>167 Sqm</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
`,
  },
  {
    id: "3",
    image: hero2,
    code: `import { HeartOff } from 'lucide-react';
    import React from 'react';
    
    const Hero = () => {
      return (
        <div className="min-h-screen w-full bg-[#E5E2D9] font-serif text-zinc-800">
          {/* 1. Top Navigation */}
          <nav className="absolute top-0 right-0 z-20 flex gap-8 p-10 text-sm font-medium">
            <a href="#" className="hover:opacity-60 transition-opacity">Recipes</a>
            <a href="#" className="hover:opacity-60 transition-opacity">About</a>
            <a href="#" className="hover:opacity-60 transition-opacity underline underline-offset-4">Join the Blog</a>
          </nav>
    
          <main className="flex min-h-screen flex-col md:flex-row">
            
            {/* LEFT COLUMN: Content */}
            <div className="relative flex flex-1 flex-col justify-between p-12 md:p-20">
              {/* Logo Section */}
              <div className="flex flex-col gap-2">
                <span className="text-xl font-medium italic">The Sear</span>
                <div className="h-12 w-12 rounded-full border-2 border-zinc-800 flex items-center justify-center">
                   {/* Simplified SVG Logo */}
                   <div className="grid grid-cols-2 gap-0.5 rotate-45">
                     {[...Array(4)].map((_, i) => (
                       <div key={i} className="h-2 w-2 rounded-full bg-zinc-800" />
                     ))}
                   </div>
                </div>
              </div>
    
              {/* Main Headline */}
              <div className="my-12">
                <h1 className="text-7xl md:text-8xl lg:text-[120px] leading-[0.9] tracking-tight">
                  Recipes<br />
                  That Actually<br />
                  Work
                </h1>
              </div>
    
              {/* Bio / Description */}
              <div className="max-w-md">
                <p className="text-sm leading-relaxed font-sans text-zinc-700">
                  Hi, I'm Elena. I'm a home cook, recipe developer, and the voice behind The Sear. 
                  I've been cooking since I could reach the stove, and I've never stopped. 
                  Every recipe here has been tested multiple times in my home kitchen before it makes it to the site.
                </p>
              </div>
            </div>
    
            {/* RIGHT COLUMN: Image & Featured Card */}
            <div className="relative flex-1">
              <img 
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=1200" 
                alt="Elena cooking in kitchen" 
                className="h-full w-full object-cover grayscale-[10%]"
              />
    
              {/* Featured Recipe Card Overlay */}
              <div className="absolute bottom-10 right-10 z-10 w-72 bg-[#F7F6F2] p-6 shadow-2xl">
                <div className="mb-4 flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-zinc-800" />
                  <span className="text-[10px] font-bold uppercase tracking-widest font-sans">New This Week</span>
                </div>
                
                <h3 className="mb-4 text-xl font-medium leading-tight">
                  Braised Short Ribs with Creamy Polenta
                </h3>
    
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-white mb-4">
                   <img 
                     src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=400" 
                     alt="Short Ribs" 
                     className="h-full w-full object-cover"
                   />
                </div>
    
                <button className="group flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest font-sans">
                  <span>View Recipe</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </button>
              </div>
            </div>
    
          </main>
        </div>
      );
    };
    
    export default Hero;`,
  },
  {
    id: "2",
    image: hero3,
    code: `import React from 'react';
import { ShoppingBag, User, Menu, ArrowUpRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-white font-sans text-zinc-900">
    
      <nav className="flex items-center justify-between px-6 py-4 border-b border-zinc-100">
        <div className="flex items-center gap-6">
          <span className="text-xl font-medium tracking-tighter">(A)</span>
          <button className="rounded-full border border-zinc-300 px-6 py-1.5 text-xs font-medium uppercase tracking-widest hover:bg-zinc-50 transition-colors">
            Book Now
          </button>
        </div>
        
        <div className="flex items-center gap-6">
          <ShoppingBag size={20} strokeWidth={1.5} className="cursor-pointer" />
          <User size={20} strokeWidth={1.5} className="cursor-pointer" />
          <Menu size={20} strokeWidth={1.5} className="cursor-pointer" />
        </div>
      </nav>
 
      <main className="relative h-[calc(100vh-68px)] w-full overflow-hidden">
        
     
        <div 
          className="absolute inset-0 bg-cover bg-center grayscale-[20%]"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=2000')" 
          }}
        />

       
        <div className="relative grid h-full w-full grid-cols-4 grid-rows-3 border-zinc-200/30 [&>div]:border-r [&>div]:border-b [&>div]:border-white/20">
          
        
          <div className="border-l border-white/20"></div>
          <div></div>
          <div></div>
          <div className="border-r-0"></div>

         
          <div className="col-span-1 bg-white flex flex-col justify-center px-10 border-l">
            <h1 className="text-7xl font-light leading-[0.9] tracking-tight text-zinc-800">
              Allemande<br />Clinic
            </h1>
            <p className="mt-4 text-xs font-medium text-zinc-500 uppercase tracking-widest">
              Advanced Aesthetics, Naturally You
            </p>
          </div>
          <div></div>
          <div></div>
          <div className="border-r-0"></div>

      
          <div className="border-l border-white/20"></div>
          <div></div>
          <div className="bg-white p-8 flex flex-col justify-end">
             <div className="flex justify-between items-end group cursor-pointer">
                <span className="text-xs font-bold uppercase tracking-widest leading-tight">
                  Explore<br />Treatments
                </span>
                <ArrowUpRight size={48} strokeWidth={1} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
             </div>
          </div>
          <div className="border-r-0"></div>

        </div>
      </main>
    </div>
  );
};

export default Hero;`,
  },
  {
    id: 4,
    image: hero4,
    code: `const RenovationHero = () => {
  return (
    <div className="relative min-h-screen w-full bg-zinc-900 font-sans text-white overflow-hidden">
      
      {/* 1. Subtle Dark Navigation */}
      <nav className="absolute top-0 w-full z-30 flex justify-between items-center px-10 py-6 bg-gradient-to-b from-black/40 to-transparent">
        <div className="text-xl font-bold tracking-tight">Real&Done</div>
        <div className="flex gap-10 text-sm font-medium tracking-wide">
          <a href="#" className="hover:text-orange-200 transition-colors">About</a>
          <a href="#" className="hover:text-orange-200 transition-colors">Work</a>
          <a href="#" className="hover:text-orange-200 transition-colors">Services</a>
          <a href="#" className="hover:text-orange-200 transition-colors">Contact</a>
        </div>
      </nav>

      {/* 2. Full Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://plus.unsplash.com/premium_photo-1676823547752-1d24e8597047?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D" 
          alt="Modern renovated interior" 
          className="h-full w-full object-cover opacity-80"
        />
        {/* Darkening overlay for text legibility */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* 3. Main Content Container */}
      <div className="relative z-10 flex h-screen w-full flex-col justify-center px-10 lg:px-20">
        
        <div className="max-w-5xl">
          {/* Main Headline */}
          <h1 className="text-[12vw] font-bold leading-[0.85] tracking-tighter mb-6">
            Real&Done
          </h1>
          <p className="text-2xl md:text-4xl font-semibold max-w-xl leading-snug text-white/90">
            Exceptional Home Remodeling & Renovations
          </p>
        </div>

        {/* 4. Floating 'Get a Quote' Form */}
        <div className="absolute bottom-10 right-10 lg:right-20 w-full max-w-md bg-white p-10 rounded-sm shadow-2xl text-zinc-900">
          <h2 className="text-3xl font-serif italic mb-8 text-zinc-800">Get a Quote</h2>
          
          <form className="grid grid-cols-2 gap-x-6 gap-y-8">
            <div className="flex flex-col border-b border-zinc-300 pb-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1">First Name*</label>
              <input type="text" className="bg-transparent outline-none text-sm" />
            </div>
            <div className="flex flex-col border-b border-zinc-300 pb-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1">Last Name*</label>
              <input type="text" className="bg-transparent outline-none text-sm" />
            </div>
            <div className="flex flex-col border-b border-zinc-300 pb-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1">Email*</label>
              <input type="email" className="bg-transparent outline-none text-sm" />
            </div>
            <div className="flex flex-col border-b border-zinc-300 pb-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1">Phone Number</label>
              <input type="tel" className="bg-transparent outline-none text-sm" />
            </div>
            <div className="col-span-2 flex flex-col border-b border-zinc-300 pb-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1">Message</label>
              <textarea className="bg-transparent outline-none text-sm resize-none h-12"></textarea>
            </div>
          </form>
        </div>

        {/* 5. Review Badge (Bottom Left) */}
        <div className="absolute bottom-10 left-10 lg:left-20 bg-[#FDF2E3] p-4 rounded-md shadow-lg text-zinc-900">
          <div className="flex text-zinc-800 mb-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-xs">★</span>
            ))}
            <span className="ml-2 text-[10px] font-bold">(4.9)</span>
          </div>
          <p className="text-[10px] font-bold uppercase tracking-widest opacity-70">
            Based on 3,538 Reviews
          </p>
        </div>

      </div>
    </div>
  );
};

export default RenovationHero;`,
  },
  {
    id: 5,
    image: hero5,
    code: `const Hero = () => {
  return (
    <div className="relative min-h-screen w-full bg-black font-sans text-white overflow-hidden">
      
      {/* 1. Transparent Navigation */}
      <nav className="absolute top-0 w-full z-30 flex justify-between items-center px-10 py-8">
        <div className="text-xl font-bold tracking-tight">Tri.wi</div>
        <div className="flex items-center gap-10 text-sm font-medium">
          <a href="#" className="hover:text-gray-400 transition-colors">Products</a>
          <a href="#" className="hover:text-gray-400 transition-colors">Company</a>
          <a href="#" className="hover:text-gray-400 transition-colors">Careers</a>
          <button className="border border-white/30 px-5 py-2 rounded-md hover:bg-white hover:text-black transition-all">
            Pre-Order Now
          </button>
        </div>
      </nav>

      {/* 2. Background Image with Focal Point */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2000" 
          alt="Security technology user" 
          className="h-full w-full object-cover opacity-60 object-right md:object-center"
        />
        {/* Gradient overlay to ensure text readability on the left */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
      </div>

      {/* 3. Main Content Content */}
      <div className="relative z-10 flex h-screen w-full flex-col justify-center px-10 lg:px-24">
        
        <div className="max-w-2xl">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-semibold leading-[1.1] tracking-tight mb-8">
            Finally, Security<br />
            You Can Hold and Trust
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-lg leading-relaxed mb-10">
            Tri.wi moves protection from the abstract cloud to your hand, 
            offering tangible peace of mind in a digital world.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-black px-8 py-4 rounded-md font-bold text-sm uppercase tracking-widest hover:bg-gray-200 transition-colors">
              Pre-Order Now
            </button>
            <button className="border border-white/40 bg-white/5 backdrop-blur-md px-8 py-4 rounded-md font-bold text-sm uppercase tracking-widest hover:bg-white/10 transition-colors">
              The Technology
            </button>
          </div>
        </div>

        {/* 4. Bottom Logo Bar (Social Proof) */}
        <div className="absolute bottom-12 left-10 lg:left-24 right-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="flex flex-col gap-6">
             <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500">
               Acknowledged by industry leaders
             </span>
             <div className="flex items-center gap-12 grayscale opacity-60">
                {/* Mockup SVG Logos */}
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 border-2 border-white rounded-sm flex items-center justify-center font-bold italic">G</div>
                  <span className="text-sm font-bold tracking-tighter">CyberAI</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 border-2 border-dashed border-white rounded-full"></div>
                  <span className="text-sm font-bold tracking-tighter">GBS Finance</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-white"></div>
                  <span className="text-sm font-bold tracking-tighter">LION BIO BANK</span>
                </div>
                <div className="border-2 border-white px-3 py-1 text-xs font-black tracking-widest">R C R</div>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;`,
  },
  {
    id: 5,
    image: hero5,
    code: `import { Instagram, Youtube, Facebook } from 'lucide-react';

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

export default Hero;`,
  },
];