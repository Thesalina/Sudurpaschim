export default function PageHero({ title, eyebrow, description, image }) {
  return (
    <section className="relative overflow-hidden bg-[#10231c] px-5 pb-16 pt-32 text-[#fff3e3] sm:px-8 lg:px-[min(7vw,84px)]">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-80"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(7,15,13,0.84), rgba(7,15,13,0.48)), url(${image})`,
        }}
      />
      <div className="relative z-10 mx-auto max-w-[1400px]">
        <div className="mb-4 inline-block text-[0.8rem] font-extrabold uppercase tracking-[0.22em] text-[#e0ae72]">
          {eyebrow}
        </div>
        <h1 className="max-w-[10ch] font-[Cormorant_Garamond] text-[clamp(3.8rem,9vw,6.4rem)] leading-[0.92] tracking-[-0.04em]">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-[1.05rem] text-[#fff3e3]/85">
          {description}
        </p>
      </div>
    </section>
  );
}
