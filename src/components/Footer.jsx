import { Link } from "react-router-dom";
// Remove Instagram, Twitter, Tiktok from lucide import
import { Mail, Phone, MapPin } from "lucide-react";

// Add these SVG components
const IgIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="18"
    height="18"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const TwIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const TkIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.28 6.28 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
  </svg>
);

const FbIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const LiIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const YtIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
  </svg>
);

const footerLinks = {
  Company: [
    // { label: "About Us", path: "/about" },
    // { label: "Careers", path: "/careers" },
    // { label: "Blog", path: "/blog" },
    { label: "Contact Us", path: "/contact" },
  ],
  Products: [
    { label: "POS System", path: "/pos" },
    { label: "Mobile App", path: "/mobile" },
    { label: "Mobile POS", path: "/mobile-pos" },
    // { label: "Analytics", path: "/" },
  ],
  Support: [
    { label: "+234 8100521930", path: "/" },
    { label: "admin@zamdahealth.com", path: "/" },
    { label: "i26 Road 5, Ikota Shopping Complex, VGC, Lagos", path: "/" },
    { label: "Terms of Service", path: "/" },
  ],
};

const socials = [
  {
    icon: IgIcon,
    href: "https://www.instagram.com/zamdahealth?igsh=MXFsMmd6M2tydThycQ==",
    label: "Instagram",
  },
  { icon: TwIcon, href: "https://x.com/Zamdahealth1", label: "Twitter" },
  {
    icon: TkIcon,
    href: "https://www.tiktok.com/@zamdahealth5?_r=1&_d=ei924c7m1lg619&sec_uid=MS4wLjABAAAA-2bNq6P2g-yhiASaOrWZsThQWm2gULc1o99cZpfHPiOeI2czkpzJSS2A8wLix6dt&share_author_id=7558212087459169288&sharer_language=en&source=h5_m&u_code=emkcfc3fefm4ee&timestamp=1773215708&user_id=7558212087459169288&sec_user_id=MS4wLjABAAAA-2bNq6P2g-yhiASaOrWZsThQWm2gULc1o99cZpfHPiOeI2czkpzJSS2A8wLix6dt&item_author_type=1&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7615878206474979092&share_link_id=2127c8a9-a9b8-4ddd-9c4f-d2c50f895a84&share_app_id=1233&ugbiz_name=ACCOUNT&ug_btm=b8727%2Cb7360&social_share_type=5&enable_checksum=1",
    label: "Tiktok",
  },
  // { icon: Link2, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer
      className="bg-primary-dark text-white"
      style={{
        backgroundImage: `
      linear-gradient(180deg, rgba(0, 16, 238, 1) 0%, rgba(7, 6, 46, 1) 100%),
      url('/images/home/home7.png')
    `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src="/images/footer-logo.png" alt="" srcset="" />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-xs">
              Simplifying healthcare for pharmacies and patients with innovative
              technology.
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-2">
              <a
                href="mailto:hello@zamdahealth.com"
                className="flex items-center gap-2 text-white/60 text-sm hover:text-white transition-colors"
              >
                <Mail size={14} /> admin@zamdahealth.com
              </a>
              <a
                href="tel:+234 8100521930 "
                className="flex items-center gap-2 text-white/60 text-sm hover:text-white transition-colors"
              >
                <Phone size={14} /> +234 8100521930
              </a>
              <p className="flex items-center gap-2 text-white/60 text-sm">
                <MapPin size={14} /> Lagos, Nigeria
              </p>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-sm mb-4 text-white">{title}</h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-white/60 text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Zamdahealth. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-white/40 text-sm hover:text-white/70 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-white/40 text-sm hover:text-white/70 transition-colors"
            >
              Terms of service
            </a>
            {/* <a
              href="#"
              className="text-white/40 text-sm hover:text-white/70 transition-colors"
            >
              Cookies
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
