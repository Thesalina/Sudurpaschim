export default function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}) {
  return (
    <div className="max-w-3xl">
      <div
        className={`mb-4 inline-block text-[0.78rem] font-extrabold uppercase tracking-[0.22em] ${
          light ? "text-[#efb16c]" : "text-[#d79556]"
        }`}
      >
        {eyebrow}
      </div>
      <h2
        className={`font-[Cormorant_Garamond] text-[clamp(3rem,5vw,4.5rem)] leading-[0.95] tracking-[-0.03em] ${
          light ? "text-[#fff4e7]" : "text-[#173128]"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 max-w-2xl text-base ${
            light ? "text-[#fff4e7]/80" : "text-[#4e564b]"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
