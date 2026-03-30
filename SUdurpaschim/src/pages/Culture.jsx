import { useEffect, useState } from "react";
import PageHero from "../components/shared/PageHero";
import SectionHeading from "../components/shared/SectionHeading";
import { fetchCulturePosts } from "../lib/api";
import { siteVisuals } from "../data/siteData";

export default function Culture() {
  const [culturePosts, setCulturePosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function loadCulturePosts() {
      try {
        setIsLoading(true);
        setError("");

        const data = await fetchCulturePosts();

        if (isMounted) {
          setCulturePosts(data);
        }
      } catch (loadError) {
        if (isMounted) {
          setError(loadError.message || "Failed to load culture content.");
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadCulturePosts();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <PageHero
        eyebrow="Culture and lifestyle"
        title="The Living Cultural Identity of Sudurpashchim"
        description="Understand the rituals, music, community memory, and everyday traditions that shape how the far west is experienced and remembered."
        image={siteVisuals.gaura}
      />
      <section className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 lg:px-[min(7vw,84px)]">
        <SectionHeading
          eyebrow="Cultural pillars"
          title="Festivals, song, and belonging"
          description="Stories that carry memory, music, food, and belief across the far west."
        />

        {isLoading ? (
          <div className="mt-10 rounded-[1.6rem] bg-white/70 p-6 text-[#4e564b]">
            Loading culture posts...
          </div>
        ) : null}

        {error ? (
          <div className="mt-10 rounded-[1.6rem] border border-[#c76b4c]/18 bg-[#fff4ee] p-6 text-[#8a3e28]">
            {error}
          </div>
        ) : null}

        {!error && !isLoading ? (
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {culturePosts.map((item) => (
              <article
                key={item._id || item.title}
                className="overflow-hidden rounded-[1.6rem] bg-white/70 shadow-[0_18px_44px_rgba(16,35,28,0.08)]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="aspect-[1.15/0.95] w-full object-cover"
                />
                <div className="p-6">
                  <div className="mb-3 flex flex-wrap gap-2">
                    <span className="rounded-full bg-[#173128]/7 px-3 py-1 text-[0.72rem] font-semibold text-[#173128]">
                      {item.category}
                    </span>
                    <span className="rounded-full bg-[#de7d33]/12 px-3 py-1 text-[0.72rem] font-semibold text-[#9c5b26]">
                      {item.region}
                    </span>
                  </div>
                  <h2 className="font-[Cormorant_Garamond] text-4xl text-[#173128]">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-[#4e564b]">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        ) : null}
      </section>
    </>
  );
}
