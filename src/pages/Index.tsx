import { Link } from "react-router-dom";
import { ArrowRight, Eye, Copy, Layers, Zap, Box, Sparkles } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ComponentCard } from "@/components/ComponentCard";
import { TemplateCard } from "@/components/TemplateCard";
import { components, categories } from "@/data/components";
import { templates } from "@/data/templates";

const Index = () => {
  const featured = components.slice(0, 4);
  const popularTemplates = templates.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="container py-20 md:py-28 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border bg-secondary/50 px-3 py-1 text-xs font-medium text-muted-foreground">
            <Sparkles className="h-3 w-3 text-primary" />
            Free & Open Source Components
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Build Better Interfaces{" "}
            <span className="bg-gradient-to-r from-primary to-[hsl(260,70%,58%)] bg-clip-text text-transparent">
              Faster
            </span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-xl mx-auto">
            Ready-to-use React UI components and website templates. Preview, copy the code, and ship your project in minutes.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Link
              to="/components"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
            >
              Browse Components <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/templates"
              className="inline-flex items-center gap-2 rounded-lg border px-5 py-2.5 text-sm font-medium hover:bg-secondary transition"
            >
              Explore Templates
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-y bg-secondary/30">
        <div className="container py-16">
          <h2 className="text-center text-2xl font-bold mb-10">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Eye, title: "Preview", desc: "Browse and preview components with live examples." },
              { icon: Copy, title: "Copy Code", desc: "Grab the React + Tailwind code with one click." },
              { icon: Zap, title: "Use in Project", desc: "Paste into your project and customize to fit." },
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <step.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Components */}
      <section className="container py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Featured Components</h2>
          <Link to="/components" className="text-sm font-medium text-primary hover:underline flex items-center gap-1">
            View all <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featured.map((c) => (
            <ComponentCard key={c.id} component={c} />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="container pb-16">
        <h2 className="text-2xl font-bold mb-8">Component Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {categories.map((cat) => (
            <Link
              key={cat}
              to={`/components?category=${cat}`}
              className="flex items-center gap-3 rounded-lg border p-4 hover:border-primary/30 hover:bg-secondary/50 transition group"
            >
              <Box className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">{cat}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Popular Templates */}
      <section className="container pb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Popular Templates</h2>
          <Link to="/templates" className="text-sm font-medium text-primary hover:underline flex items-center gap-1">
            View all <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {popularTemplates.map((t) => (
            <TemplateCard key={t.id} template={t} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
