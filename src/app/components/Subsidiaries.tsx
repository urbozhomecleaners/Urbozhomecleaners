import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";

export function Subsidiaries() {
  return (
    <div className="size-full overflow-y-auto bg-white">
      <div className="min-h-screen flex flex-col items-center justify-center px-6">
        <Link
          to="/"
          className="absolute top-8 left-8 flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>

        <div className="text-center max-w-2xl">
          <h1 className="text-5xl md:text-7xl mb-8">
            Subsidiaries
          </h1>
          <p className="text-2xl md:text-3xl text-gray-500">
            Coming Soon
          </p>
        </div>
      </div>
    </div>
  );
}
