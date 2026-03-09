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
          <div className="relative z-20 container mx-auto mt-20 px-6">

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
            {/* <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black to-black"></div> */}

            <div className="bg-zic-500 relative z-10 py-20 borde border-gray-100">
              <div className="container mx-auto px-6 max-w-6xl">
                {/* Clean, Three-Column Grid */}
                <div className="grid md:grid-cols-3 divide-x divide-gray-100 text-center">

                  {/* Coded Elements Stat */}
                  <div className="px-10 flex flex-col items-center">
                    <h2 className="text-5xl font-extrabold text-blue-600 mb-4 tracking-tight">
                      70+
                    </h2>
                    <h3 className="text-xl font-bold text-slate-800 mb-3">
                      Coded Elements
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed max-w-[250px]">
                      From buttons, to inputs, navbars, alerts or cards, you are covered
                    </p>
                  </div>

                  {/* Design Blocks Stat */}
                  <div className="px-10 flex flex-col items-center border-x border-gray-100">
                    <h2 className="text-5xl font-extrabold text-blue-600 mb-4 tracking-tight">
                      15+
                    </h2>
                    <h3 className="text-xl font-bold text-slate-800 mb-3">
                      Design Blocks
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed max-w-[250px]">
                      Mix the sections, change the colors and unleash your creativity
                    </p>
                  </div>

                  {/* Pages Stat */}
                  <div className="px-10 flex flex-col items-center">
                    <h2 className="text-5xl font-extrabold text-blue-600 mb-4 tracking-tight">
                      4
                    </h2>
                    <h3 className="text-xl font-bold text-slate-800 mb-3">
                      Pages
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed max-w-[250px]">
                      Save 3-4 weeks of work when you use our pre-made pages for your website
                    </p>
                  </div>

                </div>
              </div>
            </div>

          </section>


          {/* FEATURED COMPONENTS */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black to-black"></div>
          <section className="relative z-10 container py-16">


            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">Featured Pages</h2>

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
