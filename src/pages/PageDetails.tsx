import React, { useState } from "react";
import { Copy, Code } from "lucide-react";
import { useParams } from "react-router-dom";

const PageDetails = ({ heroes }) => {
  const [openId, setOpenId] = useState(null);
  const id = useParams();

  const copyCode = (code) => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">

      {heroes.map((hero) => hero.id == id.id && (
        <div
          key={hero.id}
          className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-lg p-6"
        >

          {/* Preview */}
          <div className="rounded-lg overflow-hidden border border-white/10 mb-6">
            <img
              src={hero.image}
              alt={hero.title}
              className="w-full object-cover"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-3">

            <button
              onClick={() =>
                setOpenId(openId === hero.id ? null : hero.id)
              }
              className="flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm hover:bg-white/20 transition"
            >
              <Code className="h-4 w-4" />
              {openId === hero.id ? "Hide Code" : "Show Code"}
            </button>

            <button
              onClick={() => copyCode(hero.code)}
              className="flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm hover:bg-white/10 transition"
            >
              <Copy className="h-4 w-4" />
              Copy Code
            </button>

          </div>

          {/* Code */}
          {openId === hero.id && (
            <div className="mt-6 bg-gray-900 rounded-lg p-6 overflow-x-auto">
              <pre className="text-green-400 text-sm whitespace-pre-wrap">
                {hero.code}
              </pre>
            </div>
          )}

        </div>
      ))}

    </div>
  );
};

export default PageDetails;