import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CodeBlock } from "@/components/CodeBlock";
import { components } from "@/data/components";

const ComponentDetailPage = () => {
  const { id } = useParams();
  const component = components.find((c) => c.id === id);

  if (!component) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="container py-20 text-center flex-1">
          <h1 className="text-2xl font-bold">Component not found</h1>
          <Link to="/components" className="text-primary hover:underline mt-4 inline-block">
            Back to components
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container py-10 flex-1">
        <Link to="/components" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-6 transition">
          <ArrowLeft className="h-3.5 w-3.5" /> Back to components
        </Link>

        <div className="mb-6">
          <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
            {component.category}
          </span>
          <h1 className="mt-3 text-3xl font-bold">{component.name}</h1>
          <p className="mt-2 text-muted-foreground">{component.description}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Preview */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">Preview</h2>
            <div className="rounded-xl border bg-secondary/30 p-8 flex items-center justify-center min-h-[250px]">
              <div className="text-center">
                <span className="font-mono text-sm text-muted-foreground">{`<${component.name.replace(/\s/g, "")} />`}</span>
                <p className="mt-2 text-xs text-muted-foreground">Live preview placeholder</p>
              </div>
            </div>
          </div>

          {/* Code */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">Code</h2>
            <CodeBlock code={component.code} />
          </div>
        </div>

        {/* Props */}
        {component.props.length > 0 && (
          <div className="mt-10">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">Props</h2>
            <div className="rounded-lg border overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-secondary/50">
                  <tr>
                    <th className="text-left px-4 py-2.5 font-medium">Prop</th>
                    <th className="text-left px-4 py-2.5 font-medium">Type</th>
                    <th className="text-left px-4 py-2.5 font-medium">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {component.props.map((prop) => (
                    <tr key={prop.name} className="border-t">
                      <td className="px-4 py-2.5 font-mono text-xs text-primary">{prop.name}</td>
                      <td className="px-4 py-2.5 font-mono text-xs text-muted-foreground">{prop.type}</td>
                      <td className="px-4 py-2.5 text-muted-foreground">{prop.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Usage */}
        <div className="mt-10">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">Example Usage</h2>
          <CodeBlock
            code={`import { ${component.name.replace(/\s/g, "")} } from "./components/${component.name.replace(/\s/g, "")}";

export default function App() {
  return <${component.name.replace(/\s/g, "")} />;
}`}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ComponentDetailPage;
