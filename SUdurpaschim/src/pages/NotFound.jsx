import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="px-5 pb-20 pt-36 sm:px-8 lg:px-[min(7vw,84px)]">
      <div className="mx-auto max-w-3xl rounded-[2rem] bg-white/70 p-8 text-center">
        <h1 className="font-[Cormorant_Garamond] text-6xl text-[#173128]">
          Page not found
        </h1>
        <p className="mt-4 text-[#4e564b]">
          The route exists in the frontend shell, but this URL is not mapped.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex rounded-full bg-[#de7d33] px-5 py-3 font-semibold text-white"
        >
          Return home
        </Link>
      </div>
    </section>
  );
}
