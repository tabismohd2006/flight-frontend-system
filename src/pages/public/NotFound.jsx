import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <div className="text-center">
        <h1 className="text-7xl font-bold text-blue-600">
          404
        </h1>

        <h2 className="mt-4 text-3xl font-bold text-slate-800">
          Page Not Found
        </h2>

        <p className="mt-3 text-slate-500">
          The page you are looking for doesn't exist.
        </p>

        <Link
          to="/"
          className="inline-block mt-8 bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition"
        >
          Go Home
        </Link>
      </div>
    </section>
  );
}

export default NotFound;