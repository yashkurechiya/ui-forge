export interface UIComponent {
  id: string;
  name: string;
  description: string;
  category: string;
  code: string;
}

export const categories = [
  "Hero", "Login", "Navbar", "Footer", "Form", "Testimonials", "Grid Design", "About", "Contact Us"
];

export const components: UIComponent[] = [
 {
  id: "official-hero-section",
  name: "Hero Pages",
  description: "High-impact landing sections featuring official branding, emergency alerts, and primary call-to-action for citizens.",
  category: "Layouts",
  code: `import React from "react";
import { ArrowRight, AlertCircle } from "lucide-react";

export const HeroSection = () => {
  return (
    <div className="relative min-h-[600px] flex items-center bg-slate-900 overflow-hidden">
      {/* Cityscape Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1570160897040-30430aac2280?auto=format&fit=crop&q=80&w=2000" 
          className="w-full h-full object-cover opacity-40"
          alt="Smart City"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
            <AlertCircle size={16} />
            <span>Digital India Initiative</span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Smart Urban <span className="text-blue-500">Governance</span> Platform
          </h1>
          
          <p className="text-lg text-slate-300 max-w-lg">
            "Your Digital Bridge to Transparent Municipal Administration." Register complaints, track resolutions, and pay taxes seamlessly.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold flex items-center gap-2 transition-all transform hover:scale-105 shadow-lg shadow-red-600/20">
              Register Complaint <ArrowRight size={20} />
            </button>
            <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl font-bold backdrop-blur-md transition-all">
              Explore Services
            </button>
          </div>
        </div>

        {/* Right Content: Mayor/Official Highlight */}
        <div className="hidden lg:flex justify-end">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl max-w-sm text-center">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full border-4 border-orange-500 p-1">
              <img 
                src="https://via.placeholder.com/150" 
                className="w-full h-full rounded-full object-cover"
                alt="Mayor"
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-1">Mr. Pushyamitra Bhargav</h3>
            <p className="text-orange-500 text-sm font-bold mb-4 uppercase tracking-widest">Mayor, IMC Indore</p>
            <p className="text-slate-400 italic text-sm leading-relaxed">
              "Our city has achieved unparalleled successes which are the result of your hard work and collective effort."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};`,
},
  {
    id: "info-card",
    name: "Info Card",
    description: "A clean card component for displaying content with title, description, and optional image.",
    category: "Cards",
    code: `interface CardProps {
  title: string;
  description: string;
  image?: string;
}

export const InfoCard = ({ title, description, image }: CardProps) => (
  <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
    {image && <img src={image} alt={title} className="mb-4 rounded-lg w-full h-40 object-cover" />}
    <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
    <p className="mt-2 text-sm text-gray-500">{description}</p>
  </div>
);`,
    
  },
  {
    id: "text-input",
    name: "Text Input",
    description: "A styled text input with label and optional error message.",
    category: "Inputs",
    code: `interface InputProps {
  label: string;
  placeholder?: string;
  error?: string;
  value: string;
  onChange: (val: string) => void;
}

export const TextInput = ({ label, placeholder, error, value, onChange }: InputProps) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-sm font-medium text-gray-700">{label}</label>
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={\`rounded-lg border px-3 py-2 text-sm outline-none transition \${
        error ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:border-indigo-500 focus:ring-indigo-200"
      } focus:ring-2\`}
    />
    {error && <span className="text-xs text-red-500">{error}</span>}
  </div>
);`,
    
  },
  {
    id: "contact-form",
    name: "Contact Form",
    description: "A complete contact form with validation-ready structure.",
    category: "Forms",
    code: `export const ContactForm = () => (
  <form className="mx-auto max-w-md space-y-4 rounded-xl border p-6">
    <h2 className="text-xl font-semibold">Contact Us</h2>
    <input placeholder="Name" className="w-full rounded-lg border px-3 py-2 text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none" />
    <input placeholder="Email" type="email" className="w-full rounded-lg border px-3 py-2 text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none" />
    <textarea placeholder="Message" rows={4} className="w-full rounded-lg border px-3 py-2 text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none resize-none" />
    <button className="w-full rounded-lg bg-indigo-600 py-2 text-white font-medium hover:bg-indigo-700 transition">Send Message</button>
  </form>
);`,
     
  },
  {
    id: "navbar",
    name: "Navigation Bar",
    description: "A responsive top navigation bar with logo, links, and action buttons.",
    category: "Navigation",
    code: `export const Navbar = () => (
  <nav className="flex items-center justify-between border-b px-6 py-3">
    <span className="text-xl font-bold">Brand</span>
    <div className="flex items-center gap-6 text-sm text-gray-600">
      <a href="#" className="hover:text-gray-900">Home</a>
      <a href="#" className="hover:text-gray-900">About</a>
      <a href="#" className="hover:text-gray-900">Contact</a>
      <button className="rounded-lg bg-indigo-600 px-4 py-1.5 text-white text-sm hover:bg-indigo-700">Sign In</button>
    </div>
  </nav>
);`,
   
  },
  {
    id: "modal-dialog",
    name: "Modal Dialog",
    description: "An accessible modal dialog with backdrop overlay.",
    category: "Modals",
    code: `interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const Modal = ({ open, onClose, title, children }: ModalProps) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">✕</button>
        </div>
        {children}
      </div>
    </div>
  );
};`,
     
  },
  {
    id: "two-column-layout",
    name: "Two Column Layout",
    description: "A responsive two-column layout component.",
    category: "Layout",
    code: `interface TwoColProps {
  left: React.ReactNode;
  right: React.ReactNode;
}

export const TwoColumnLayout = ({ left, right }: TwoColProps) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div>{left}</div>
    <div>{right}</div>
  </div>
);`,
    
  },
  {
    id: "fade-in-animation",
    name: "Fade In Animation",
    description: "A wrapper component that animates children with a fade-in effect.",
    category: "Animations",
    code: `interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
}

export const FadeIn = ({ children, delay = 0 }: FadeInProps) => (
  <div
    className="animate-fade-in opacity-0"
    style={{ animationDelay: \`\${delay}ms\` }}
  >
    {children}
  </div>
);`,
     
  },
];
