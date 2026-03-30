import { useState } from "react";
import PageHero from "../components/shared/PageHero";
import { submitContactMessage } from "../lib/api";
import { contactDetails, siteVisuals } from "../data/siteData";

const initialForm = {
  name: "",
  email: "",
  message: "",
};

export default function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
    setSubmitError("");
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const nextErrors = {};

    if (!formData.name.trim()) {
      nextErrors.name = "Name is required.";
    }

    if (!formData.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (formData.message.trim().length < 20) {
      nextErrors.message = "Message should be at least 20 characters.";
    }

    setErrors(nextErrors);
    setIsSubmitted(false);
    setSubmitError("");

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    try {
      setIsSubmitting(true);
      await submitContactMessage(formData);
      setIsSubmitted(true);
      setFormData(initialForm);
    } catch (error) {
      setSubmitError(error.message || "Failed to send message.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Contact and connection"
        title="Ask, Plan, and Learn More"
        description="Ask about routes, culture, partnerships, or anything you need to plan time in Sudurpashchim."
        image={siteVisuals.gaura}
      />
      <section className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 lg:px-[min(7vw,84px)]">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-4">
            {contactDetails.map((item) => (
              <div
                key={item.label}
                className="rounded-[1.4rem] border border-[#173128]/10 bg-white/70 p-5"
              >
                <div className="text-[0.72rem] font-extrabold uppercase tracking-[0.14em] text-[#d79556]">
                  {item.label}
                </div>
                <div className="mt-2 text-[#173128]">{item.value}</div>
              </div>
            ))}
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-[2rem] bg-[linear-gradient(135deg,#163128_0%,#214135_100%)] p-8 text-white"
          >
            <h2 className="font-[Cormorant_Garamond] text-5xl">Start a conversation</h2>
            <p className="mt-4 max-w-xl text-white/75">
              Ask about places, share an idea, or plan a visit. We’ll get back with practical answers.
            </p>

            <div className="mt-6 grid gap-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full rounded-full border border-white/15 bg-white/10 px-5 py-3.5 outline-none placeholder:text-white/65"
                />
                {errors.name ? (
                  <p className="mt-2 text-sm text-[#ffd3b0]">{errors.name}</p>
                ) : null}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email address"
                  className="w-full rounded-full border border-white/15 bg-white/10 px-5 py-3.5 outline-none placeholder:text-white/65"
                />
                {errors.email ? (
                  <p className="mt-2 text-sm text-[#ffd3b0]">{errors.email}</p>
                ) : null}
              </div>

              <div>
                <textarea
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me what you want to know about Sudurpashchim"
                  className="w-full rounded-[1.4rem] border border-white/15 bg-white/10 px-5 py-4 outline-none placeholder:text-white/65"
                />
                {errors.message ? (
                  <p className="mt-2 text-sm text-[#ffd3b0]">{errors.message}</p>
                ) : null}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-full bg-[#de7d33] px-6 py-3.5 font-bold text-[#fff7eb] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Sending..." : "Send message"}
              </button>

              {submitError ? (
                <div className="rounded-[1.2rem] border border-[#ffd3b0]/25 bg-[#7a2f1f]/25 px-5 py-4 text-sm text-[#ffe4d1]">
                  {submitError}
                </div>
              ) : null}

              {isSubmitted ? (
                <div className="rounded-[1.2rem] border border-white/12 bg-white/10 px-5 py-4 text-sm text-white/85">
                  Thanks for reaching out. We’ll reply soon.
                </div>
              ) : null}
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
