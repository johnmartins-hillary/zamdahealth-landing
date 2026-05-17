import { useState } from "react";
import { Link } from "react-router-dom";
import { useReveal } from "../hooks/useReveal";
import {
  ArrowRight,
  CheckCircle,
  Monitor,
  ShoppingCart,
  Package,
  Truck,
  BarChart3,
  Users,
  FileText,
  GitBranch,
  WifiOff,
  Shield,
  Brain,
  MessageCircle,
  Heart,
  TrendingUp,
  Lightbulb,
  AlertTriangle,
} from "lucide-react";
import { submitDemoRequest } from "../Api/apicalls";

const coreFeatures = [
  {
    icon: "/images/pos/pos2.png",
    title: "Sales & Checkout",
    desc: "Streamlined POS interface for quick and accurate transaction processing.",
    color: "bg-purple-100",
    iconColor: "text-blue-500",
  },
  {
    icon: "/images/pos/pos3.png",
    title: "Inventory & Expiry Alerts",
    desc: "Real-time stock management, automated reorder points, and expiry notifications.",
    color: "bg-white",
    iconColor: "text-orange-500",
  },
  {
    icon: "/images/pos/pos4.png",
    title: "Supplier Management",
    desc: "Efficiently manage supplier orders, deliveries, and payment schedules.",
    color: "bg-purple-100",
    iconColor: "text-green-500",
  },
  {
    icon: "/images/pos/pos5.png",
    title: "Reports & Analytics",
    desc: "Gain insights into sales trends, inventory performance, and business growth.",
    color: "bg-white",
    iconColor: "text-purple-500",
  },
  {
    icon: "/images/pos/pos6.png",
    title: "Customer & Consultation History",
    desc: "Maintain detailed patient records and consultation logs for personalised care.",
    color: "bg-purple-100",
    iconColor: "text-teal-500",
  },
  {
    icon: "/images/pos/pos7.png",
    title: "Prescription Management",
    desc: "Digital prescription processing and secure patient prescription records.",
    color: "bg-white",
    iconColor: "text-pink-500",
  },
  {
    icon: "/images/pos/pos8.png",
    title: "Multi Branch Management",
    desc: "Maintain related patient records and consultation logs for personalised care.",
    color: "bg-purple-100",
    iconColor: "text-indigo-500",
  },
  {
    icon: "/images/pos/pos9.png",
    title: "Offline-First System",
    desc: "Keep selling even when the internet goes off. ZamPOS saves records and syncs automatically once you're back online.",
    color: "bg-white",
    iconColor: "text-gray-500",
  },
  {
    icon: "/images/pos/pos10.png",
    title: "Staff Management & Controls",
    desc: "Monitor staff activity and protect your sales. Assign roles, track logins, and see who did what — and when.",
    color: "bg-purple-100",
    iconColor: "text-red-500",
  },
];

const aiFeatures = [
  {
    icon: "/images/pos/pos11.png",
    title: "Drug Interaction Alerts",
    desc: "AI checks prescriptions in real-time to detect drug conflicts, dosage issues, and safety risks before dispensing.",
    color: "bg-red-50",
    iconColor: "text-red-500",
  },
  {
    icon: "/images/pos/pos12.png",
    title: "Zam AI Chat Assistant",
    desc: "Ask questions and get instant answers on drug alterations, usage guidelines, and personalised recommendations.",
    color: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  {
    icon: "/images/pos/pos13.png",
    title: "Condition-Based Suggestions",
    desc: "Recommends the right over-the-counter products based on patient symptoms and underlying conditions.",
    color: "bg-pink-50",
    iconColor: "text-pink-500",
  },
  {
    icon: "/images/pos/pos14.png",
    title: "Market Trend Analysis",
    desc: "Stay ahead with alerts on trending medicines driven by seasonal patterns and public health developments.",
    color: "bg-green-50",
    iconColor: "text-green-500",
  },
  {
    icon: "/images/pos/pos15.png",
    title: "Profit & Staff Insights",
    desc: "Track performance, identify top-selling products, and uncover hidden revenue opportunities with AI analytics.",
    color: "bg-pink-50",
    iconColor: "text-yellow-500",
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

export default function POS() {
  useReveal();
  const [billingPeriod, setBillingPeriod] = useState("monthly");
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
  try {
    await submitDemoRequest(demoForm);
    setDemoSubmitted(true);
  } catch (err) {
    console.error(err.message);
  } finally {
    setDemoSubmitting(false);
  }
};

  return (
    <div className="overflow-x-hidden">
      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="pt-28 pb-0 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-up">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-5">
              Complete Pharmacy
              <br />
              Management System
            </h1>
            <p className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              Powerful point-of-sale system designed for modern pharmacies.
              Manage sales, inventory, suppliers, and analytics all in one
              place. Streamline your pharmacy operations with intelligent
              automation and real-time insights.
            </p>
            <button
              onClick={() =>
                document
                  .getElementById("demo")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-all hover:shadow-xl hover:-translate-y-0.5"
            >
              Request Demo
            </button>
          </div>

          {/* Dashboard screenshot */}
          <div className="relative mt-12 px-4 lg:px-10">
            {/* Main dashboard image */}
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-2xl shadow-primary/10">
              <img
                src="/images/pos/pos1.png"
                alt="ZamPOS Dashboard"
                className="w-full h-auto block"
              />
            </div>

            {/* Floating sidebar — right overlap */}
            <div className="absolute -right-2 lg:right-2 top-6 w-24 lg:w-28 rounded-xl bg-white border border-gray-200 shadow-xl hidden lg:flex flex-col gap-2 p-3">
              {["Dashboard", "Sales", "Inventory", "Reports", "Settings"].map(
                (item) => (
                  <div
                    key={item}
                    className="h-5 rounded bg-lavender flex items-center px-2"
                  >
                    <span className="text-[9px] text-primary font-medium">
                      {item}
                    </span>
                  </div>
                ),
              )}
            </div>

            {/* Floating stat card — bottom left overlap */}
            <div className="absolute -bottom-5 left-4 lg:left-8 bg-white rounded-xl shadow-xl p-3 lg:p-4 border border-gray-100">
              <p className="text-[10px] text-gray-400 mb-0.5">
                Today's Transactions
              </p>
              <p className="font-black text-primary text-sm lg:text-base">
                ₦ 2,450,000
              </p>
            </div>

            {/* Extra padding bottom so stat card isn't clipped */}
            <div className="h-6" />
          </div>
        </div>
      </section>

      {/* ── CORE FEATURES ─────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 reveal">
            <span className="inline-block px-4 py-1.5 bg-lavender text-primary text-xs font-bold rounded-full mb-4 tracking-wide uppercase">
              Features
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Everything you need to
              <br />
              know about the ZamPOS
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreFeatures.map(({ icon, title, desc, color, iconColor }, i) => (
              <div
                key={title}
                className={`reveal delay-${(i % 3) * 100 + 100} rounded-2xl p-6 border  ${color} hover:shadow-lg hover:border-primary/20 transition-all group flex flex-col-reverse`}
              >
                <div
                  className={`w-full aspect-[3/2] rounded-xl flex items-center justify-center mb-5 group-hover:scale-[1.02] transition-transform`}
                >
                  <div className="text-center ">
                    <img src={icon} alt="" srcset="" width={200} height={200} />
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">
                  {title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ZAM AI FEATURES ───────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#F8F9FF]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 reveal">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-purple-100 text-purple-600 text-xs font-bold rounded-full mb-4 tracking-wide uppercase">
              <Brain size={12} /> Powered by Zam AI
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              Zam AI Powered Features
            </h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto">
              Smarter decisions, safer dispensing, and better business outcomes
              with Zam AI.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {aiFeatures
              .slice(0, 3)
              .map(({ icon, title, desc, color, iconColor }, i) => (
                <div
                  key={title}
                  className={`reveal delay-${i * 100 + 100} rounded-2xl p-6 bg-white border ${color}border-gray-100 hover:shadow-lg hover:border-purple-200 transition-all group flex flex-col-reverse`}
                >
                  <div
                    className={`w-full aspect-[3/2] rounded-xl  flex items-center justify-center mb-5`}
                  >
                    <div className="text-center">
                      <img
                        src={icon}
                        alt=""
                        srcset=""
                        width={200}
                        height={200}
                      />
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-sm">
                    {title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {desc}
                  </p>
                </div>
              ))}
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {aiFeatures
              .slice(3)
              .map(({ icon, title, desc, color, iconColor }, i) => (
                <div
                  key={title}
                  className={`reveal delay-${i * 100 + 100} rounded-2xl p-6 bg-white border ${color} border-gray-100 hover:shadow-lg hover:border-purple-200 transition-all flex flex-col-reverse`}
                >
                  <div
                    className={`w-full aspect-[16/6] rounded-xl  flex items-center justify-center mb-5`}
                  >
                    <div className="text-center">
                      <img
                        src={icon}
                        alt=""
                        srcset=""
                        width={200}
                        height={200}
                      />
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-sm">
                    {title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {desc}
                  </p>
                </div>
              ))}
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
              Select the perfect plan that suits your need for smooth pharmacy
              operations.
            </p>
            <div className="inline-flex items-center gap-1 bg-gray-100 rounded-xl p-1">
              {["monthly", "annual"].map((p) => (
                <button
                  key={p}
                  onClick={() => setBillingPeriod(p)}
                  className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all capitalize ${billingPeriod === p ? "bg-white text-primary shadow-sm" : "text-gray-500"}`}
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
                  className={`reveal delay-${i * 100 + 100} rounded-2xl p-7 flex flex-col relative ${highlight ? "bg-primary shadow-2xl shadow-primary/30 -mt-3" : "bg-white border border-gray-200"}`}
                >
                  {badge && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-white text-primary text-xs font-bold rounded-full shadow border border-gray-100">
                      {badge}
                    </span>
                  )}
                  <h3
                    className={`font-bold text-lg mb-1 ${highlight ? "text-white" : "text-gray-900"}`}
                  >
                    {name}
                  </h3>
                  <div className="flex items-baseline gap-1 mb-5">
                    <span
                      className={`text-3xl font-black ${highlight ? "text-white" : "text-gray-900"}`}
                    >
                      {billingPeriod === "monthly" ? price : annualPrice}
                    </span>
                    <span
                      className={`text-xs ${highlight ? "text-white/60" : "text-gray-400"}`}
                    >
                      {period}
                    </span>
                  </div>
                  <Link
                    to="/contact"
                    className={`block text-center py-2.5 rounded-xl font-semibold text-sm transition-all mb-6 ${highlight ? "bg-white text-primary hover:bg-lavender" : "border-2 border-primary text-primary hover:bg-primary hover:text-white"}`}
                  >
                    Get started
                  </Link>
                  <ul className="flex flex-col gap-2.5 flex-1">
                    {features.map(({ text, included }, j) => (
                      <li key={j} className="flex items-center gap-2.5">
                        <CheckCircle
                          size={14}
                          className={`flex-shrink-0 ${included ? (highlight ? "text-accent-light" : "text-primary") : "text-gray-200"}`}
                        />
                        <span
                          className={`text-xs ${included ? (highlight ? "text-white/90" : "text-gray-700") : highlight ? "text-white/25" : "text-gray-300"}`}
                        >
                          {text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* ── BOOK A DEMO ──────────────────────────────────────────────────────── */}
      <section id="demo" className="py-20 bg-[#F8F9FF]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="reveal-left hidden lg:block bg-white p-4">
              <span className="inline-block px-4 py-1.5 bg-lavender text-primary text-xs font-bold rounded-full mb-3 tracking-wide uppercase">
                Request Demo
              </span>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                Book a Demo For Free
              </h2>
              <p className="text-gray-500 text-sm mb-6">
                Our team will guide you through setup.
              </p>
              <div className="">
                <img src="/images/home/home8.png" alt="" srcset="" />
              </div>
            </div>

            <div className="reveal-right">
              <div className="lg:hidden mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-1">
                  Book a Demo For Free
                </h2>
                <p className="text-gray-500 text-sm">
                  Our team will guide you through setup.
                </p>
              </div>
              {demoSubmitted ? (
                <div className="bg-white rounded-2xl p-10 text-center border border-gray-200">
                  <CheckCircle
                    size={48}
                    className="text-green-500 mx-auto mb-4"
                  />
                  <h3 className="font-bold text-gray-900 mb-2">
                    Demo Request Received!
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Our team will reach out within 24 hours.
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
                        placeholder: "Enter your name",
                      },
                      {
                        label: "Email",
                        name: "email",
                        type: "email",
                        placeholder: "your@email.com",
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
                      "Book Demo"
                    )}
                  </button>
                  <p className="text-center text-xs text-gray-400 mt-3">
                    Our team will guide you through setup.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
