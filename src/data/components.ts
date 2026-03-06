export interface UIComponent {
  id: string;
  name: string;
  description: string;
  category: string;
  code: string;
  props: { name: string; type: string; description: string }[];
}

export const categories = [
  "Buttons", "Cards", "Forms", "Navigation", "Layout", "Modals", "Inputs", "Animations"
];

export const components: UIComponent[] = [
  {
    id: "primary-button",
    name: "Primary Button",
    description: "A versatile primary action button with hover and focus states.",
    category: "Buttons",
    code: `import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

export const Button = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
}: ButtonProps) => {
  const base = "rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-400",
    outline: "border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 focus:ring-indigo-500",
  };
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button onClick={onClick} className={\`\${base} \${variants[variant]} \${sizes[size]}\`}>
      {children}
    </button>
  );
};`,
    props: [
      { name: "variant", type: '"primary" | "secondary" | "outline"', description: "Visual style of the button" },
      { name: "size", type: '"sm" | "md" | "lg"', description: "Size of the button" },
      { name: "onClick", type: "() => void", description: "Click handler function" },
    ],
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
    props: [
      { name: "title", type: "string", description: "Card title" },
      { name: "description", type: "string", description: "Card description" },
      { name: "image", type: "string", description: "Optional image URL" },
    ],
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
    props: [
      { name: "label", type: "string", description: "Input label text" },
      { name: "error", type: "string", description: "Error message to display" },
      { name: "placeholder", type: "string", description: "Placeholder text" },
    ],
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
    props: [],
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
    props: [],
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
    props: [
      { name: "open", type: "boolean", description: "Controls modal visibility" },
      { name: "onClose", type: "() => void", description: "Called when modal is dismissed" },
      { name: "title", type: "string", description: "Modal title" },
    ],
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
    props: [
      { name: "left", type: "ReactNode", description: "Content for left column" },
      { name: "right", type: "ReactNode", description: "Content for right column" },
    ],
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
    props: [
      { name: "delay", type: "number", description: "Delay in ms before animation starts" },
    ],
  },
];
