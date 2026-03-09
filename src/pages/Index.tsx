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
    <>
      <div className="min-h-screen flex bg-transparent text-white flex-col">
        <Navbar />



        {/* Hero */}
        <section className="relative py-20 md:py-28 text-white overflow-hidden">

          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/new.png')" }}
          ></div>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/30"></div>

          {/* Bottom Gradient Fade */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div>

          {/* Content */}
          <div className="relative z-20 container mx-auto px-6">

            <div className="mb-4 inline-flex items-center gap-2 rounded-full border bg-secondary/90 px-3 py-1 text-xs font-medium text-muted-foreground">
              <Sparkles className="h-3 w-3 text-primary" />
              Free & Open Source Components
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Build Better <br />
              Interfaces{" "}
              <span className="bg-gradient-to-r from-primary to-[hsl(260,70%,58%)] bg-clip-text text-transparent">
                Faster
              </span>
            </h1>

            <p className="mt-5 text-lg text-gray-200 max-w-xl">
              Ready-to-use React UI components and website templates.
              <br />
              Preview, copy the code, and ship your project in minutes.
            </p>

            <div className="mt-8 flex gap-3">
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
        <div className="relative overflow-hidden">

          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/new2.png')" }}
          ></div>

          {/* Dark Overlay */}


          {/* HOW IT WORKS */}
          <section className="relative text-white py-24 overflow-hidden">

            {/* Top Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black to-black"></div>

            <div className="relative z-10 container mx-auto px-6">

              {/* Title */}
              <h2 className="text-center text-4xl font-bold mb-16">
                How It Works
              </h2>

              {/* Steps */}
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

                {[
                  {
                    icon: Eye,
                    title: "Preview",
                    desc: "Browse and preview components with live examples.",
                  },
                  {
                    icon: Copy,
                    title: "Copy Code",
                    desc: "Grab the React + Tailwind code with one click.",
                  },
                  {
                    icon: Zap,
                    title: "Use in Project",
                    desc: "Paste into your project and customize to fit.",
                  },
                ].map((step, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-10 text-center transition hover:border-white/20 hover:bg-white/10"
                  >

                    {/* Icon */}
                    <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-white/10">
                      <step.icon className="h-6 w-6 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold mb-3">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {step.desc}
                    </p>

                  </div>
                ))}

              </div>
            </div>

          </section>


          {/* FEATURED COMPONENTS */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black to-black"></div>
          <section className="relative z-10 container py-16">
            

            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">Featured Components</h2>

              <Link
                to="/components"
                className="text-sm font-medium text-primary hover:underline flex items-center gap-1"
              >
                View all <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {featured.map((c) => (
                <ComponentCard key={c.id} component={c} />
              ))}
            </div>

          </section>


          {/* CATEGORIES */}
          <section className="relative z-10 container pb-16">

            <h2 className="text-2xl font-bold mb-8">
              Component Categories
            </h2>

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


          {/* POPULAR TEMPLATES */}
          <section className="relative z-10 container pb-16">

            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">Popular Templates</h2>

              <Link
                to="/templates"
                className="text-sm font-medium text-primary hover:underline flex items-center gap-1"
              >
                View all <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {popularTemplates.map((t) => (
                <TemplateCard key={t.id} template={t} />
              ))}
            </div>

          </section>

        </div>

        <Footer />
      </div>
    </>
  );
};

export default Index;
