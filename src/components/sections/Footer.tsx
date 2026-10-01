import Link from "next/link";

const InstagramIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

const PinterestIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M8 21c1.5-3 2.5-6 2.5-8 0-2.5 1.5-4 3-4s2.5 1.5 2.5 3.5c0 3-2 5.5-4 5.5" />
  </svg>
);

const navLinks = [
  { label: "Work", href: "/#work" },
  { label: "Studio", href: "/#studio" },
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/#contact" },
];

const socialLinks = [
  { label: "Instagram", href: "#", Icon: InstagramIcon },
  { label: "LinkedIn", href: "#", Icon: LinkedinIcon },
  { label: "Facebook", href: "#", Icon: FacebookIcon },
  { label: "YouTube", href: "#", Icon: YoutubeIcon },
  { label: "Pinterest", href: "#", Icon: PinterestIcon },
];

const contactInfo = [
  { label: "Address", value: "New Delhi, India" },
  { label: "Email", value: "studio@interior.co" },
  { label: "WhatsApp", value: "+91 98765 43210" },
];

export default function Footer() {
  return (
    <footer className="px-[clamp(1.5rem,4vw,4rem)]" aria-label="Footer">
      <div className="max-w-[1440px] mx-auto">
        <div className="border-t border-[#2a2925] py-12 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            <div className="sm:col-span-2 lg:col-span-1">
              <span className="font-body text-[0.7rem] font-medium tracking-[0.3em] uppercase text-[#f0ebe3] block mb-4">
                Atelier Noir
              </span>
              <p className="font-body text-[0.8rem] leading-relaxed text-[#6b6358] max-w-[280px]">
                Interior architecture studio crafting timeless residential,
                hospitality, and commercial spaces.
              </p>
            </div>

            <div>
              <p className="font-body text-[0.6rem] font-medium tracking-[0.25em] uppercase text-[#c9a96e] mb-5">
                Navigation
              </p>
              <nav className="flex flex-col gap-3" aria-label="Footer navigation">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="font-body text-[0.8rem] text-[#6b6358] hover:text-[#f0ebe3] transition-colors duration-300 w-fit"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <p className="font-body text-[0.6rem] font-medium tracking-[0.25em] uppercase text-[#c9a96e] mb-5">
                Contact
              </p>
              <div className="flex flex-col gap-3">
                {contactInfo.map((item) => (
                  <div key={item.label}>
                    <p className="font-body text-[0.65rem] text-[#6b6358] uppercase tracking-[0.1em]">
                      {item.label}
                    </p>
                    <p className="font-body text-[0.8rem] text-[#a09889]">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="font-body text-[0.6rem] font-medium tracking-[0.25em] uppercase text-[#c9a96e] mb-5">
                Social
              </p>
              <div className="flex flex-col gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 text-[#6b6358] hover:text-[#f0ebe3] transition-colors duration-300 w-fit"
                  >
                    <span className="transition-transform duration-300 group-hover:-translate-y-0.5">
                      <social.Icon />
                    </span>
                    <span className="font-body text-[0.8rem]">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#2a2925] py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-[0.7rem] text-[#6b6358]">
            &copy; {new Date().getFullYear()} Atelier Noir. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="font-body text-[0.7rem] text-[#6b6358] hover:text-[#f0ebe3] transition-colors duration-300"
            >
              Privacy
            </a>
            <a
              href="#"
              className="font-body text-[0.7rem] text-[#6b6358] hover:text-[#f0ebe3] transition-colors duration-300"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
