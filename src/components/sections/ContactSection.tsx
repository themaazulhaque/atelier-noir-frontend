"use client";
import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

const PinterestIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M8 21c1.5-3 2.5-6 2.5-8 0-2.5 1.5-4 3-4s2.5 1.5 2.5 3.5c0 3-2 5.5-4 5.5" />
  </svg>
);

const socialLinks = [
  { label: "Instagram", href: "#", icon: InstagramIcon },
  { label: "LinkedIn", href: "#", icon: LinkedinIcon },
  { label: "Facebook", href: "#", icon: FacebookIcon },
  { label: "YouTube", href: "#", icon: YoutubeIcon },
  { label: "Pinterest", href: "#", icon: PinterestIcon },
];

const details = [
  { label: "Address", lines: ["New Delhi, India", "Shahpur Jat, 110049"] },
  { label: "Email", lines: ["studio@interior.co"] },
  { label: "WhatsApp", lines: ["+91 98765 43210"] },
];

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section
      id="contact"
      className="py-[clamp(6rem,10vw,8rem)] px-[clamp(1.5rem,4vw,4rem)]"
      aria-label="Contact"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(3rem,6vw,8rem)]">
          {/* LEFT: Contact Form */}
          <Reveal>
            <div>
              <p className="font-body text-[0.65rem] font-medium tracking-[0.25em] uppercase text-[#6b6358] mb-8">
                Get in Touch
              </p>
              <form onSubmit={handleSubmit} className="space-y-8" noValidate>
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block font-body text-[0.65rem] font-medium tracking-[0.2em] uppercase text-[#a09889] mb-3"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    required
                    className="w-full bg-transparent border-b border-[#2a2925] py-3 font-body text-sm text-[#f0ebe3] placeholder-[#6b6358] outline-none transition-colors duration-300 focus:border-[#c9a96e]"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block font-body text-[0.65rem] font-medium tracking-[0.2em] uppercase text-[#a09889] mb-3"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    required
                    className="w-full bg-transparent border-b border-[#2a2925] py-3 font-body text-sm text-[#f0ebe3] placeholder-[#6b6358] outline-none transition-colors duration-300 focus:border-[#c9a96e]"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-phone"
                    className="block font-body text-[0.65rem] font-medium tracking-[0.2em] uppercase text-[#a09889] mb-3"
                  >
                    WhatsApp / Phone
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    className="w-full bg-transparent border-b border-[#2a2925] py-3 font-body text-sm text-[#f0ebe3] placeholder-[#6b6358] outline-none transition-colors duration-300 focus:border-[#c9a96e]"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block font-body text-[0.65rem] font-medium tracking-[0.2em] uppercase text-[#a09889] mb-3"
                  >
                    Tell Us About Your Space
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    className="w-full bg-transparent border-b border-[#2a2925] py-3 font-body text-sm text-[#f0ebe3] placeholder-[#6b6358] outline-none transition-colors duration-300 focus:border-[#c9a96e] resize-none"
                    placeholder="Describe your project..."
                  />
                </div>
                <div className="pt-4">
                  {submitted ? (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="font-body text-sm text-[#c9a96e] tracking-[0.1em]"
                    >
                      Inquiry ready to send
                    </motion.p>
                  ) : (
                    <button
                      type="submit"
                      className="inline-flex items-center gap-3 border border-[#c9a96e] px-8 py-4 text-sm font-body font-medium tracking-[0.15em] uppercase text-[#c9a96e] transition-all duration-500 hover:bg-[#c9a96e] hover:text-[#1a1915] focus:outline-none focus:ring-1 focus:ring-[#c9a96e] focus:ring-offset-2 focus:ring-offset-[#111110]"
                    >
                      Send Inquiry
                      <span className="text-[0.8em]">→</span>
                    </button>
                  )}
                </div>
              </form>
            </div>
          </Reveal>

          {/* RIGHT: Editorial Content */}
          <Reveal delay={0.15}>
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="font-display font-light leading-[1.05] tracking-[-0.02em] text-[#f0ebe3] mb-10">
                  <span className="block text-[clamp(2.5rem,5vw,4.5rem)]">Have a space</span>
                  <span className="block text-[clamp(2.5rem,5vw,4.5rem)]">
                    worth{" "}
                    <em className="italic text-[#c9a96e]">imagining?</em>
                  </span>
                </h2>

                {/* Social Icons */}
                <div className="flex items-center gap-6 mb-12">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="group/social text-[#6b6358] hover:text-[#c9a96e] transition-colors duration-300"
                      >
                        <span className="transition-transform duration-300 group-hover/social:-translate-y-0.5 inline-block">
                          <Icon />
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Contact Details */}
              <div className="border-t border-[#2a2925] pt-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                  {details.map((d) => (
                    <div key={d.label}>
                      <p className="font-body text-[0.6rem] font-medium tracking-[0.2em] uppercase text-[#c9a96e] mb-3">
                        {d.label}
                      </p>
                      {d.lines.map((line, i) => (
                        <p
                          key={i}
                          className="font-body text-sm text-[#a09889] leading-relaxed"
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
