import { useState } from "react";
import { useReveal } from "../hooks/useReveal";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  CheckCircle,
  Send,
} from "lucide-react";
import { submitContactForm } from "../Api/apicalls";

const FbIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="white">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const IgIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="22"
    height="22"
    fill="none"
    stroke="white"
    strokeWidth="2"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);
const TwIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="white">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
const TkIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="white">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.28 6.28 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
  </svg>
);
const LiIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="white">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const YtIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="white">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="black" />
  </svg>
);

const contactCards = [
  {
    icon: Phone,
    label: "Call us",
    value: "+234 8100521930",
    href: "tel:+2348100521930",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    cardBg: "bg-blue-50/50",
  },
  {
    icon: Mail,
    label: "Email us",
    value: "admin@zamdahealth.com",
    href: "mailto:admin@zamdahealth.com",
    iconBg: "bg-teal-100",
    iconColor: "text-teal-600",
    cardBg: "bg-teal-50/50",
  },
  {
    icon: MapPin,
    label: "Visit us",
    value: "i268 Road 5, Ikota Shopping Complex, VGC, Lagos",
    href: "#",
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-600",
    cardBg: "bg-yellow-50/50",
  },
];

const socials = [
  {
    label: "Facebook",
    handle: "@Zamdahealth",
    href: " https://www.facebook.com/share/1CKMtSAbpT/",
    bg: "bg-blue-600",
    Icon: FbIcon,
  },
  {
    label: "Instagram",
    handle: "@zamdahealth",
    href: "https://www.instagram.com/zamdahealth?igsh=MXFsMmd6M2tydThycQ==",
    bg: "bg-gradient-to-br from-pink-500 to-yellow-400",
    Icon: IgIcon,
  },
  {
    label: "Twitter/X",
    handle: "@Zamdahealth",
    href: " https://x.com/Zamdahealth1",
    bg: "bg-gray-900",
    Icon: TwIcon,
  },
  {
    label: "TikTok",
    handle: "@Zamdahealth",
    href: "https://www.tiktok.com/@zamdahealth5?_r=1&_d=ei924c7m1lg619&sec_uid=MS4wLjABAAAA-2bNq6P2g-yhiASaOrWZsThQWm2gULc1o99cZpfHPiOeI2czkpzJSS2A8wLix6dt&share_author_id=7558212087459169288&sharer_language=en&source=h5_m&u_code=emkcfc3fefm4ee&timestamp=1773215708&user_id=7558212087459169288&sec_user_id=MS4wLjABAAAA-2bNq6P2g-yhiASaOrWZsThQWm2gULc1o99cZpfHPiOeI2czkpzJSS2A8wLix6dt&item_author_type=1&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7615878206474979092&share_link_id=2127c8a9-a9b8-4ddd-9c4f-d2c50f895a84&share_app_id=1233&ugbiz_name=ACCOUNT&ug_btm=b8727%2Cb7360&social_share_type=5&enable_checksum=1",
    bg: "bg-gray-900",
    Icon: TkIcon,
  },
  {
    label: "LinkedIn",
    handle: "Zamdahealth",
    href: "https://www.linkedin.com/in/zamda-health-b63924309?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    bg: "bg-blue-700",
    Icon: LiIcon,
  },
  {
    label: "Youtube",
    handle: "@Zamdahealth",
    href: "https://www.youtube.com/channel/UCa9XeyTpQLzKaXrvlY4EHFg",
    bg: "bg-red-600",
    Icon: YtIcon,
  },
];

const countryCodes = ["+234", "+1", "+44", "+27", "+254", "+233"];

export default function Contact() {
  useReveal();
  const [form, setForm] = useState({
    fullName: "",
    company: "",
    phone: "",
    countryCode: "+234",
    email: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await submitContactForm(form);
      setSubmitted(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="overflow-x-hidden">
      {/* HERO */}
      <section className="pt-28  bg-lavender">
        <div className="max-w-5xl mx-auto px-4 sm:pt-6 lg:pt-8 text-center">
          <div className="animate-fade-up">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-4">
              We'd Love to Hear From You
            </h1>
            <p className="text-gray-500 text-base leading-relaxed max-w-xl mx-auto mb-10">
              Whether you have a question about our products, want to book a
              demo, or just want to say hello — our team is here and ready to
              help.
            </p>
          </div>

          {/* 3 staggered photos */}
          <div className="flex items-end justify-center gap-3 sm:gap-4">
            <img src="/images/contact/contact1.png" alt="" srcset="" />
          </div>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-4">
            {contactCards.map(
              (
                { icon: Icon, label, value, href, iconBg, iconColor, cardBg },
                i,
              ) => (
                <a
                  key={label}
                  href={href}
                  className={`reveal delay-${i * 100 + 100} ${cardBg} rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-lg transition-all group border border-gray-100`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}
                  >
                    <Icon size={22} className={iconColor} />
                  </div>
                  <p className="text-xs text-gray-400 font-medium mb-1">
                    {label}
                  </p>
                  <p className="font-bold text-gray-900 text-sm">{value}</p>
                </a>
              ),
            )}
          </div>
        </div>
      </section>

      {/* WHATSAPP BANNER */}
      <section className="pb-8 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal bg-primary rounded-2xl px-6 py-5 flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                <MessageCircle size={24} className="text-white" />
              </div>
              <div>
                <p className="font-bold text-white text-base">
                  Chat with us on WhatsApp
                </p>
                <p className="text-white/70 text-xs mt-0.5">
                  Get instant replies — no waiting on hold. Our team responds
                  fast!
                </p>
              </div>
            </div>
            <a
              href="https://wa.me/2348100521930"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-white text-primary font-bold rounded-xl text-sm hover:bg-lavender transition-all flex-shrink-0"
            >
              <MessageCircle size={16} className="text-green-500" /> Start
              WhatsApp chat
            </a>
          </div>
        </div>
      </section>

      {/* SOCIAL MEDIA */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="reveal mb-10">
            <span className="inline-block text-primary text-xs font-bold tracking-wide uppercase mb-3">
              Follow and Connect
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              Find Us on Social Media
            </h2>
            <p className="text-gray-500 text-sm max-w-sm mx-auto">
              Stay up to date with news, product updates, health tips and more
              across all our channels.
            </p>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-6">
            {socials.map(({ label, handle, href, bg, Icon }, i) => (
              <a
                key={label}
                href={href}
                className={`reveal delay-${(i % 3) * 100 + 100} flex flex-col items-center gap-2 group`}
              >
                <div
                  className={`w-14 h-14 rounded-2xl ${bg} flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}
                >
                  <Icon />
                </div>
                <p className="font-bold text-gray-900 text-xs">{label}</p>
                <p className="text-gray-400 text-[10px]">{handle}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="py-16 bg-lavender">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            {/* Left */}
            <div className="reveal-left">
              <span className="inline-block text-primary text-xs font-bold tracking-wide uppercase mb-3">
                Send us a Message
              </span>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Tell Us What's On Your Mind
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                Fill out the form and our team will get back to you within 24
                hours. For urgent matters, reach us directly via WhatsApp or
                phone.
              </p>
              <div className="flex flex-col gap-4">
                {[
                  "Quick Response guaranteed",
                  "Dedicated support specialists",
                  "Your information is protected",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <CheckCircle size={14} className="text-white" />
                    </div>
                    <p className="text-gray-700 text-sm font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Form */}
            <div className="reveal-right">
              {submitted ? (
                <div className="bg-white rounded-2xl p-10 text-center shadow-sm border border-gray-100">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} className="text-green-500" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-500 text-sm mb-6">
                    Thank you for reaching out. We'll get back to you within 24
                    hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({
                        fullName: "",
                        company: "",
                        phone: "",
                        countryCode: "+234",
                        email: "",
                        message: "",
                      });
                    }}
                    className="px-6 py-2.5 bg-primary text-white font-semibold rounded-xl text-sm hover:bg-primary-dark transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
                >
                  {error && (
                    <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-xs">
                      {error}
                    </div>
                  )}

                  <div className="mb-4">
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Full Name<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={form.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Enter company name"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                        Phone Number<span className="text-red-500">*</span>
                      </label>
                      <div className="flex gap-2">
                        <select
                          name="countryCode"
                          value={form.countryCode}
                          onChange={handleChange}
                          className="px-2 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-primary bg-white text-gray-700 flex-shrink-0"
                        >
                          {countryCodes.map((c) => (
                            <option key={c} value={c}>
                              {c}
                            </option>
                          ))}
                        </select>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="Phone Number"
                          className="flex-1 min-w-0 px-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Email<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="example@gmail.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Message<span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell us how we can help you..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-all text-sm flex items-center justify-center gap-2 disabled:opacity-60 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30"
                  >
                    {submitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
