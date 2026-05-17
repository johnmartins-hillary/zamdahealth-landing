import { useState } from "react";
import { Link } from "react-router-dom";
import { useReveal } from "../hooks/useReveal";
import {
  ArrowRight,
  CheckCircle,
  Star,
  ChevronDown,
  ChevronUp,
  Download,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const heroSlides = [
  {
    badge: "Pharmacy Management",
    heading: (
      <>
        Powering Pharmacies.
        <br />
        <span className="text-primary">Simplifying Medication</span> Access.
      </>
    ),
    subtext:
      "Zamda Health combines a pharmacy suite front of ZamPOS with a Patients Mobile App, helping you track inventory, Manage Sales, and see medical records with ease.",
    stats: [
      { value: "100k+", label: "Registered Pharmacies" },
      { value: "1000+", label: "Trusted by Pharmacies" },
      { value: "100%", label: "Customer Satisfaction" },
    ],
    cta: { label: "Download App", icon: true, href: "#" },
    image: "/images/home/banner1.png",
    imageClass:
      "w-full h-[280px] sm:h-[380px] object-cover object-center rounded-t-2xl",
  },
  {
    badge: "ZamPOS",
    heading: (
      <>
        Complete Pharmacy
        <br />
        <span className="text-primary">Management System</span>
      </>
    ),
    subtext:
      "Powerful point-of-sale system designed for modern pharmacies. Manage sales, inventory, suppliers, and analytics all in one place.",
    stats: [
      { value: "9+", label: "Core Features" },
      { value: "99.9%", label: "Uptime" },
      { value: "5min", label: "Setup Time" },
    ],
    cta: { label: "Request Demo", icon: false, href: "/pos" },
    image: "/images/home/banner2.svg",
    imageClass:
      "w-full h-[280px] sm:h-[380px] object-cover object-top rounded-t-2xl",
  },
  {
    badge: "Mobile App",
    heading: (
      <>
        Your Healthcare and Pharmacy,
        <br />
        <span className="text-primary">Now on Your Phone</span>
      </>
    ),
    subtext:
      "The Zamda Mobile App lets customers order medicines, upload prescriptions, and get delivery or pickup from nearby pharmacies — all without leaving home.",
    stats: [
      { value: "50K+", label: "App Downloads" },
      { value: "4.8★", label: "App Rating" },
      { value: "24/7", label: "Availability" },
    ],
    cta: { label: "Download App", icon: true, href: "#" },
    image: "/images/home/banner3.png",
    imageClass:
      "w-full h-[240px] sm:h-[400px] object-contain object-center  rounded-t-2xl",
  },
];

const trustedLogos = [
  "Pauprix Pharm.",
  "Ephre-Kings Pharm.",
  "Benbol Pharm.",
  "Jolufed Pharm.",
  "Nascare Pharm.",
  "Sylney Pharm.",
  "Rockaid Pharm.",
];

const whyUs = [
  {
    icon: "/images/home/iconoir_healthcare.svg",
    emoji: "🏥",
    title: "Complete Healthcare Ecosystem",
    desc: "ZamPOS manages your pharmacy operations on a unified platform. ZamPOS manages your pharmacy business and medical records to streamline your entire operation.",
    color: "bg-white",
    iconColor: "bg-primary",
    image: "/images/home/home3.png",
  },
  {
    icon: "/images/home/ix_ai.svg",
    emoji: "🤖",
    title: "AI-Powered Intelligence",
    desc: "Our AI provides intelligent insights that help you make better decisions, from inventory prediction to patient care recommendations to optimize ICT.",
    color: "bg-white",
    iconColor: "bg-primary",
    image: "/images/home/home4.png",
  },
  {
    icon: "/images/home/solar_cloud-linear.svg",
    emoji: "☁️",
    title: "Cloud-Based & Always Accessible",
    desc: "Access your pharmacy from anywhere, anytime. Real-time data sync across all your devices and branches with automatic backups and 99.9% uptime.",
    color: "bg-white",
    iconColor: "bg-primary",
    image: "/images/home/home5.png",
  },
  {
    icon: "/images/home/Vector.svg",
    emoji: "⚡",
    title: "Fast & Easy Setup",
    desc: "Get started in minutes, not months. Our onboarding process is streamlined and our support team is on hand to get you up and running smoothly.",
    color: "bg-white",
    iconColor: "bg-primary",
    image: "/images/home/home6.png",
  },
];

const plans = [
  {
    name: "Basic",
    price: "₦2,500",
    annualPrice: "₦27,000",
    period: "/month",
    highlight: false,
    features: [
      { text: "Fast checkouts", included: true },
      { text: "Stock & expiry alerts", included: true },
      { text: "inventory Management", included: true },
      { text: "Staff & shift controls", included: true },
      { text: "Multi-branch sync", included: false },
      { text: "App orders & pickup", included: false },
      { text: "B2B & e-Rix integrations", included: false },
      { text: "AI restocking & insights", included: false },
      { text: "Audit & reports", included: false },
      { text: "Multi-branch management", included: false },
    ],
  },
  {
    name: "Pro",
    price: "₦3,500",
    annualPrice: "₦36,600",
    period: "/month",
    highlight: true,
    badge: "Most Popular",
    features: [
      { text: "Fast checkouts", included: true },
      { text: "Credit sales & remittance", included: true },
      { text: "Stock & expiry alerts", included: true },
      { text: "inventory Management", included: true },
      { text: "Multi-branch sync", included: true },
      { text: "Staff & shift controls", included: true },
      { text: "App orders & pickup", included: true },
      { text: "B2B & e-Rix integrations", included: true },
      { text: "AI restocking & insights", included: true },
      { text: "Audit & reports", included: true },
      { text: "Multi-branch management", included: false },
    ],
  },
  {
    name: "Enterprise",
    price: "₦4,500",
    annualPrice: "₦48,600",
    period: "/month",
    highlight: false,
    features: [
      { text: "Fast checkouts", included: true },
      { text: "Stock & expiry alerts", included: true },
      { text: "inventory Management", included: true },
      { text: "Multi-branch sync", included: true },
      { text: "Staff & shift controls", included: true },
      { text: "App orders & pickup", included: true },
      { text: "B2B & e-Rix integrations", included: true },
      { text: "AI restocking & insights", included: true },
      { text: "Audit & reports", included: true },
      { text: "Multi-branch management", included: true },
    ],
  },
];

const faqs = [
  {
    q: "What is Zamda Health?",
    a: "Zamdahealth is a complete pharmacy management platform combining ZamPOS with a Patients Mobile App, helping you track inventory, manage sales, and connect with patients.",
  },
  {
    q: "What is the Zamda Mobile App used for?",
    a: "The Zamda Mobile App allows patients to order medications, book consultations with doctors, track their health, and connect with verified pharmacies near them.",
  },
  {
    q: "Can ZamPOS work without internet?",
    a: "Yes. ZamPOS is built with an offline-first architecture. You can continue selling even without internet, and all data syncs automatically when you're back online.",
  },
  {
    q: "Is ZamPOS difficult to set up or train my staff on?",
    a: "Not at all. Most pharmacies are fully set up within 1–2 days. The interface is intuitive and we provide dedicated onboarding support throughout.",
  },
];

const testimonials = [
  {
    name: "Pharmacy Okonkwo",
    role: "Pharmacy Owner",
    text: "Before ZamPOS, we struggled with manual records and stock errors. Now everything: sales, staff, suppliers, and reports is in one place. The Zamda Mobile App is perfect for our customers.",
  },
  {
    name: "Dr. Adaeze Nwosu",
    role: "Head Pharmacist, Abuja",
    text: "The mobile app is incredible. I can monitor everything in real-time even when I'm not at the pharmacy. Sales are up 40% and inventory losses are down significantly.",
  },
  {
    name: "Fatima Al-Hassan",
    role: "CEO, MedPlus Chain",
    text: "Managing 12 branches has never been easier. The analytics dashboard is a game-changer for our business. I recommend Zamdahealth to every pharmacy owner.",
  },
];

export default function Home() {
  useReveal();
  const [billingPeriod, setBillingPeriod] = useState("monthly");
  const [openFaq, setOpenFaq] = useState(0);
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [demoForm, setDemoForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
  });
  const [demoSubmitting, setDemoSubmitting] = useState(false);
  const [demoSubmitted, setDemoSubmitted] = useState(false);

  const handleDemoSubmit = async (e) => {
    e.preventDefault();
    setDemoSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setDemoSubmitted(true);
    setDemoSubmitting(false);
  };

  return (
    <div className="overflow-x-hidden">
      {/* ── HERO CAROUSEL ────────────────────────────────────────────────────── */}
      <section className="pt-24 pb-0 bg-white">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop
          className="w-full"
        >
          {heroSlides.map(
            ({ badge, heading, subtext, stats, cta, image, imageClass }, i) => (
              <SwiperSlide key={i}>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                  {/* Top — text content */}
                  <div className="text-center max-w-3xl mx-auto pt-6 pb-10">
                    {badge && (
                      <span className="inline-block px-4 py-1.5 bg-lavender text-primary text-xs font-bold rounded-full mb-4 tracking-wide uppercase">
                        {badge}
                      </span>
                    )}
                    <h1 className="text-4xl sm:text-5xl lg:text-[3.2rem] font-bold text-gray-900 leading-tight mb-5">
                      {heading}
                    </h1>
                    <p className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
                      {subtext}
                    </p>

                    {/* Stats */}
                    <div className="flex justify-center gap-10 sm:gap-16 mb-8">
                      {stats.map(({ value, label }) => (
                        <div key={label} className="text-center">
                          <p className="text-2xl sm:text-3xl font-black text-primary">
                            {value}
                          </p>
                          <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                            {label}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <a
                      href={cta.href}
                      className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-all hover:shadow-xl hover:-translate-y-0.5"
                    >
                      {cta.icon && <Download size={18} />}
                      {cta.label}
                    </a>
                  </div>

                  {/* Bottom — image */}
                  <div className="w-full overflow-hidden">
                    <img src={image} alt={badge} className={imageClass} />
                  </div>
                </div>
              </SwiperSlide>
            ),
          )}
        </Swiper>

        <style>{`
    .swiper-pagination { bottom: 8px !important; }
    .swiper-pagination-bullet { background: #cbd5e1; opacity: 1; }
    .swiper-pagination-bullet-active { background: #1B1F8A !important; width: 20px; border-radius: 4px; }
  `}</style>

        {/* Trusted by strip — fixed below carousel */}
        <div
          className="py-6 overflow-hidden mt-0"
          style={{
            backgroundImage: `
      linear-gradient(90deg, rgba(0, 16, 238, 0.85) 0%, rgba(7, 6, 46, 1) 100%),
      url('/images/home/home7.png')
    `,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex items-center whitespace-nowrap">
            {[0, 1].map((copy) => (
              <div
                key={copy}
                className="flex items-center gap-10 animate-scroll-left flex-shrink-0"
              >
                <span className="text-white/60 text-xs font-medium flex-shrink-0">
                  Trusted by these Pharmacies
                </span>
                {trustedLogos.map((logo, i) => (
                  <span
                    key={i}
                    className="text-white/60 text-xs font-bold tracking-widest uppercase flex-shrink-0"
                  >
                    {logo}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT ZAMDA OFFERS ────────────────────────────────────────────────── */}
      <section className="pt-20 mt-10 max-w-6xl mx-auto flex flex-col items-center justify-center bg-lavender">
        <div className=" px-4 sm:px-6 lg:px-8 text-center">
          <div className="reveal">
            <span className="inline-block px-4 py-1.5 border border-gray-200 shadow-xl bg-green-100 text-primary text-xs font-bold rounded-full mb-4 tracking-wide uppercase">
              Product to Us
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              What Zamda Health Offers
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed mb-6">
              ZamPOS is a personal Point of Sale{" "}
              <strong className="text-gray-700">GomPOS</strong> system for
              pharmacies. It includes sales management, Inventory Management and
              more. ZamPOS also has other digital features that enables
              pharmacies which combines pharmacies and a comprehensive system
              that enables pharmacies that run more smoothly.
            </p>
            <Link
              to="/pos"
              className="inline-flex items-center gap-2 px-6 py-2.5 border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary hover:text-white transition-all text-sm"
            >
              See ZamPOS Features <ArrowRight size={15} />
            </Link>
          </div>

          <img src="/images/home/home1.png" alt="" srcset="" />
        </div>
      </section>

      {/* ── GET TO KNOW US ────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <span className="inline-block px-4 py-1.5 bg-lavender text-primary text-xs font-bold rounded-full mb-3 tracking-wide uppercase">
              About Us
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Get to know us
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="reveal-left">
              <div className=" rounded-2xl  flex items-center justify-center">
                <img src="/public/images/home/home2.png" alt="" srcset="" />
              </div>
            </div>
            <div className="reveal-right">
              <p className="text-gray-600 leading-relaxed text-sm mb-4">
                Zamda Health was built to solve real problems African pharmacies
                face. We started as a small team passionate about improving
                healthcare access through technology.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm mb-4">
                After helping thousands of pharmacies digitize their operations,
                we expanded to include a patient mobile app — connecting
                pharmacies directly to the people they serve.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm mb-6">
                Today, we're a fast-growing healthcare technology company
                serving pharmacies across Nigeria and beyond, with a mission to
                make medication access simple, transparent, and efficient for
                everyone.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-all text-sm hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30"
              >
                Learn More About Us <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ─────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#F8F9FF]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 reveal">
            <span className="inline-block px-4 py-1.5 bg-lavender text-primary text-xs font-bold rounded-full mb-3 tracking-wide uppercase">
              Why Choose Us
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              Why Zamda Health?
            </h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto">
              We build tools that understand the unique challenges of running a
              pharmacy in Africa.
            </p>
          </div>

          <div className="flex flex-col gap-20">
            {whyUs.map(
              ({ icon: Icon, emoji, title, desc, color, iconColor }, i) => (
                <div
                  key={title}
                  className={`reveal grid lg:grid-cols-2 gap-12 items-center`}
                >
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 text-2xl ${iconColor}`}
                    >
                      <img
                        src={Icon}
                        alt={title}
                        srcset=""
                        className={`w-7 h-7 `}
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-5">
                      {desc}
                    </p>
                    <button className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm hover:gap-3 transition-all">
                      Learn more <ArrowRight size={15} />
                    </button>
                  </div>
                  <div
                    className={`${i % 2 === 1 ? "lg:order-1" : ""} aspect-[4/3] rounded-2xl ${color} flex items-center justify-center`}
                  >
                    <img src={whyUs[i].image} alt={whyUs[i].title} srcset="" />
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* ── PRICING ───────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <span className="inline-block px-4 py-1.5 bg-lavender text-primary text-xs font-bold rounded-full mb-3 tracking-wide uppercase">
              ZamPOS Pricing
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              Plans For Every Pharmacy
            </h2>
            <p className="text-gray-500 text-sm max-w-lg mx-auto mb-6">
              Simple, transparent pricing. No hidden fees.
            </p>
            <div className="inline-flex items-center gap-1 bg-gray-100 rounded-xl p-1">
              {["monthly", "annual"].map((p) => (
                <button
                  key={p}
                  onClick={() => setBillingPeriod(p)}
                  className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all capitalize ${
                    billingPeriod === p
                      ? "bg-white text-primary shadow-sm"
                      : "text-gray-500"
                  }`}
                >
                  {p}
                  {p === "annual" && (
                    <span className="ml-1 text-xs text-green-600 font-bold">
                      -10%
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-start">
            {plans.map(
              (
                {
                  name,
                  price,
                  annualPrice,
                  period,
                  features,
                  highlight,
                  badge,
                },
                i,
              ) => (
                <div
                  key={name}
                  className={`reveal delay-${i * 100 + 100} rounded-2xl p-7 flex flex-col relative ${
                    highlight
                      ? "bg-primary text-white shadow-2xl shadow-primary/30 -mt-2"
                      : "bg-white border border-gray-200"
                  }`}
                >
                  {badge && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-white text-primary text-xs font-bold rounded-full shadow border border-gray-100">
                      {badge}
                    </span>
                  )}
                  <div className="mb-1">
                    <p
                      className={`text-xs font-semibold mb-1 ${highlight ? "text-white/60" : "text-gray-400"}`}
                    >
                      {highlight
                        ? "⭐ Best Value"
                        : name === "Basic"
                          ? "Starter"
                          : "Scale"}
                    </p>
                    <h3
                      className={`font-bold text-lg ${highlight ? "text-white" : "text-gray-900"}`}
                    >
                      {name}
                    </h3>
                  </div>
                  <div className="flex items-baseline gap-1 mb-6 mt-2">
                    <span
                      className={`text-3xl font-black ${highlight ? "text-white" : "text-gray-900"}`}
                    >
                      {billingPeriod === "monthly" ? price : annualPrice}
                    </span>
                    <span
                      className={`text-sm ${highlight ? "text-white/60" : "text-gray-400"}`}
                    >
                      {period}
                    </span>
                  </div>
                  <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                    {features.map(({ text, included }, j) => (
                      <li key={j} className="flex items-center gap-2.5">
                        <CheckCircle
                          size={15}
                          className={
                            included
                              ? highlight
                                ? "text-accent-light"
                                : "text-primary"
                              : "text-gray-200"
                          }
                        />
                        <span
                          className={`text-sm ${
                            included
                              ? highlight
                                ? "text-white/90"
                                : "text-gray-700"
                              : highlight
                                ? "text-white/25"
                                : "text-gray-300"
                          }`}
                        >
                          {text}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`block text-center py-3 rounded-xl font-semibold text-sm transition-all ${
                      highlight
                        ? "bg-white text-primary hover:bg-lavender"
                        : "bg-primary text-white hover:bg-primary-dark"
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────────── */}
      <section
        className="py-20 relative overflow-hidden"
        style={{
          backgroundImage: `
      linear-gradient(135deg, rgba(0, 16, 238, 0.85) 0%, rgba(7, 6, 46, 1) 100%),
      url('/images/home/home7.png')
    `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-accent/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-accent-light/10 blur-3xl" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
          <span className="inline-block px-4 py-1.5 bg-white/15 text-white text-xs font-bold rounded-full mb-5 tracking-wide uppercase">
            Testimonials
          </span>
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-8">
            What our Customers have to say
          </h2>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 mb-6">
            <div className="flex justify-center gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className="text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>
            <p className="text-white/90 text-base leading-relaxed mb-6 italic">
              "{testimonials[testimonialIdx].text}"
            </p>
            <p className="text-white font-bold text-sm">
              {testimonials[testimonialIdx].name}
            </p>
            <p className="text-white/60 text-xs mt-0.5">
              {testimonials[testimonialIdx].role}
            </p>
          </div>
          <div className="flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setTestimonialIdx(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  testimonialIdx === i ? "bg-white w-6" : "bg-white/30 w-2"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ + DOWNLOAD ───────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid reverse lg:grid-cols-2 gap-14">
            <div className="reveal-left">
              <span className="inline-block px-4 py-1.5 bg-lavender text-primary text-xs font-bold rounded-full mb-4 tracking-wide uppercase">
                FAQ
              </span>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">
                Lets Answers some of your Questions
              </h2>
              <div className="flex flex-col gap-3">
                {faqs.map(({ q, a }, i) => (
                  <div
                    key={i}
                    className="border border-gray-200 rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                      className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-gray-900 text-sm pr-4">
                        {q}
                      </span>
                      {openFaq === i ? (
                        <ChevronUp
                          size={16}
                          className="text-primary flex-shrink-0"
                        />
                      ) : (
                        <ChevronDown
                          size={16}
                          className="text-gray-400 flex-shrink-0"
                        />
                      )}
                    </button>
                    {openFaq === i && (
                      <div className="px-5 pb-4 text-gray-500 text-sm leading-relaxed border-t border-gray-100 pt-3">
                        {a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal-right">
              <div className="bg-lavender rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Download Zamda Mobile App
                </h3>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                  Access your pharmacy, order medications, consult doctors and
                  manage your health on the go.
                </p>
                {/* <div className="rounded-xl bg-white border border-lavender-dark justify-center mb-6">
                  <p></p>
                 <img src="/images/home/home8.png" alt="" srcset="" />
                </div> */}
                <div className="flex flex-col  gap-3">
                  <a
                    href="#"
                    className="flex items-center justify-center gap-2 px-5 py-3 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-gray-800 transition-all"
                  >
                    <Download size={16} /> Download Zamda Mobile App
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center gap-2 px-5 py-3 bg-none text-gray-700 rounded-xl text-sm font-semibold hover:bg-primary hover:text-white transition-all border border-gray-300"
                  >
                    Request Zampos Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BOOK A DEMO ──────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#F8F9FF]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="reveal-left hidden lg:block">
              <div className="rounded-2xl bg-lavender border border-lavender-dark flex flex-col ">
                <p className="text-primary font-semibold p-2">
                  Book a Demo For Free
                </p>
                <p className="text-black p-2">
                  Our team will guide you through setup
                </p>
                <img src="/images/home/home8.png" alt="" srcset="" />
              </div>
            </div>
            <div className="reveal-right">
              <span className="inline-block px-4 py-1.5 bg-lavender text-primary text-xs font-bold rounded-full mb-4 tracking-wide uppercase">
                Request Demo
              </span>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                Book a Demo For Free
              </h2>

              {demoSubmitted ? (
                <div className="bg-white rounded-2xl p-8 text-center border border-gray-200">
                  <CheckCircle
                    size={48}
                    className="text-green-500 mx-auto mb-4"
                  />
                  <h3 className="font-bold text-gray-900 mb-2">
                    Request Received!
                  </h3>
                  <p className="text-gray-500 text-sm">
                    We'll reach out within 24 hours to schedule your demo.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleDemoSubmit}
                  className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm"
                >
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    {[
                      {
                        label: "Full Name",
                        name: "name",
                        type: "text",
                        placeholder: "John Doe",
                      },
                      {
                        label: "Email",
                        name: "email",
                        type: "email",
                        placeholder: "john@pharmacy.com",
                      },
                      {
                        label: "Company Name",
                        name: "company",
                        type: "text",
                        placeholder: "Your Pharmacy",
                      },
                      {
                        label: "Phone Number",
                        name: "phone",
                        type: "tel",
                        placeholder: "+234 000 000 0000",
                      },
                    ].map(({ label, name, type, placeholder }) => (
                      <div key={name}>
                        <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                          {label}
                        </label>
                        <input
                          type={type}
                          value={demoForm[name]}
                          onChange={(e) =>
                            setDemoForm((p) => ({
                              ...p,
                              [name]: e.target.value,
                            }))
                          }
                          placeholder={placeholder}
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                        />
                      </div>
                    ))}
                  </div>
                  <button
                    type="submit"
                    disabled={demoSubmitting}
                    className="w-full py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-all text-sm flex items-center justify-center gap-2 disabled:opacity-60"
                  >
                    {demoSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />{" "}
                        Booking...
                      </>
                    ) : (
                      "Book Now"
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
