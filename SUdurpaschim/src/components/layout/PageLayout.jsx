import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

export default function PageLayout() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative overflow-x-hidden bg-transparent text-[#1f241d]">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-[-10rem] top-[18rem] h-[24rem] w-[24rem] rounded-full bg-[#e3b06a]/12 blur-3xl" />
        <div className="absolute right-[-8rem] top-[34rem] h-[26rem] w-[26rem] rounded-full bg-[#214135]/10 blur-3xl" />
        <div className="absolute left-1/2 top-[58rem] h-[20rem] w-[38rem] -translate-x-1/2 rounded-full bg-white/30 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(23,49,40,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(23,49,40,0.35) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage:
              "linear-gradient(180deg, rgba(0,0,0,0.9), rgba(0,0,0,0.45) 38%, transparent 78%)",
          }}
        />
      </div>
      <ScrollToTop />
      <Navbar isScrolled={isScrolled} />
      <main className="relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
