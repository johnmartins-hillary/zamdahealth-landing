import { useReveal } from "../hooks/useReveal";
import { Link } from "react-router-dom";
import {
  Download,
  Smartphone,
  Heart,
  Pill,
  Calendar,
  MessageCircle,
  MapPin,
  Brain,
  Clipboard,
  BookOpen,
  CheckCircle,
  ArrowRight,
  AlertTriangle,
  Lightbulb,
  FileText,
  Shield,
} from "lucide-react";

// ── App features ──────────────────────────────────────────────────────────────
const appFeatures = [
  {
    icon: "/images/mobile/mobile2.png",
    title: "Medicine Ordering & Delivery",
    desc: "Order medicines from trusted pharmacies and get them delivered to your doorstep.",
    color: "bg-purple-100",
    iconColor: "text-blue-500",
  },
  {
    icon: "/images/mobile/mobile3.png",
    title: "Health Records Access",
    desc: "Secure access to your personal health records and history.",
    color: "bg-white",
    iconColor: "text-green-500",
  },
  {
    icon: "/images/mobile/mobile4.png",
    title: "Doctor Consultation",
    desc: "Connect with healthcare professionals for online consultations and advice.",
    color: "bg-purple-100",
    iconColor: "text-purple-500",
  },
  {
    icon: "/images/mobile/mobile5.png",
    title: "Appointment Booking",
    desc: "Schedule appointments with doctors or health services with ease.",
    color: "bg-white",
    iconColor: "text-orange-500",
  },
  {
    icon: "/images/mobile/mobile6.png",
    title: "Medicine Ordering & Delivery",
    desc: "Order medicines from trusted pharmacies and get them delivered to your doorstep.",
    color: "bg-purple-100",
    iconColor: "text-teal-500",
  },
  {
    icon: "/images/mobile/mobile7.png",
    title: "Zam AI Health Assistant",
    desc: "Your personal AI assistant for health queries, symptom checks, and wellness tips.",
    color: "bg-white",
    iconColor: "text-pink-500",
  },
];

// ── AI features ───────────────────────────────────────────────────────────────
const aiFeatures = [
  {
    icon: "/images/mobile/icon3.png",
    title: "Symptom Checker",
    desc: "Describe how you feel and get instant, reliable AI guidance on your symptoms — before you even visit a doctor. Zam AI analyses your inputs, suggests possible conditions, and recommends your next step.",
    color: "bg-white",
    iconColor: "text-white",
    featured: true,
  },
  {
    icon: "/images/mobile/icon1.png",
    title: "Personalized Health Tips",
    desc: "Receive tailored wellness, nutrition, and preventive care advice based on your profile.",
    color: "bg-white",
    iconColor: "text-white",
    featured: false,
  },
  {
    icon: "/images/mobile/icon2.png",
    title: "Prescription Assistant",
    desc: "Upload your prescription to find the most available, generic, or more affordable alternatives.",
    color: "bg-blue-50",
    iconColor: "text-white",
    featured: false,
  },
  {
    icon: "/images/mobile/icon3.png",
    title: "Medication Education",
    desc: "Get detailed information on any drug — uses, side effects, and drug interactions made simple.",
    color: "bg-teal-50",
    iconColor: "text-teal-500",
    featured: false,
  },
];

// ── How it works steps ────────────────────────────────────────────────────────
const stepsLeft = [
  {
    num: "1",
    title: "Find Your Medicine Easily",
    desc: "Users open the app and search for medicines by name, category, symptom, or health condition.",
  },
  {
    num: "2",
    title: "Upload a Prescription",
    desc: "If a medicine requires a prescription, users simply take or upload a photo of the slip. Zamda securely sends it to a nearby partner pharmacy for verification and fulfilment.",
  },
  {
    num: "3",
    title: "Get Matched to the Nearest Pharmacy",
    desc: "Using location services, Zamda connects users to the closest verified pharmacy with the medicine in stock.",
  },
];

const stepsRight = [
  {
    num: "4",
    title: "Choose Delivery or Pickup",
    desc: "Users select what works best for them: Home delivery, or In-store pickup.",
  },
  {
    num: "5",
    title: "Pay Securely in the App",
    desc: "Users pay with card, bank transfer, mobile money, or wallet balance. Receipts and invoices are automatically saved for future reference.",
  },
  {
    num: "6",
    title: "Track Orders in Real Time",
    desc: "From order confirmation to payment and delivery, users get live updates inside the app.",
  },
];

export default function MobileApp() {
  useReveal();

  return (
    <div className="overflow-x-hidden">
      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="pt-28 pb-0 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left text */}
            <div className="animate-fade-up">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-5">
                Your Healthcare and Pharmacy,
                <br />
                <span className="text-primary">Now on Your Phone</span>
              </h1>
              <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-lg">
                The Zamda Mobile App lets customers order medicines, upload
                prescriptions, and get delivery or pickup from nearby pharmacies
                — all without leaving home.
              </p>

              {/* App store buttons */}
              <div className="flex flex-wrap gap-3 mb-6">
                <a
                  href="#"
                  className="flex items-center gap-3 px-5 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-all hover:-translate-y-0.5 shadow-lg"
                >
                  <Download size={18} />
                  <div className="text-left">
                    <p className="text-[10px] text-gray-400 leading-none mb-0.5">
                      Download on the
                    </p>
                    <p className="font-bold text-sm leading-none">App Store</p>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 px-5 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-all hover:-translate-y-0.5 shadow-lg"
                >
                  <Download size={18} />
                  <div className="text-left">
                    <p className="text-[10px] text-gray-400 leading-none mb-0.5">
                      Get it on
                    </p>
                    <p className="font-bold text-sm leading-none">
                      Google Play
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Right — phone mockup with floating cards */}
            <div className="reveal-right relative flex justify-center pb-8">
              {/* Floating notification cards */}
              <div className="absolute left-0 top-8 z-10 bg-white rounded-xl shadow-xl border border-gray-100 p-3 max-w-[160px] animate-float">
                <p className="text-[10px] font-bold text-gray-700">
                  Refill Reminder
                </p>
                <p className="text-[9px] text-gray-400 mt-0.5">
                  Time to refill your Amoxicillin!
                </p>
              </div>
              <div
                className="absolute right-0 top-1/3 z-10 bg-white rounded-xl shadow-xl border border-gray-100 p-3 max-w-[160px]"
                style={{ animationDelay: "0.5s" }}
              >
                <p className="text-[10px] font-bold text-gray-700">Reminder</p>
                <p className="text-[9px] text-gray-400 mt-0.5">
                  Time to take your Antihypertensive
                </p>
              </div>
              <div className="absolute left-2 bottom-12 z-10 bg-white rounded-xl shadow-xl border border-gray-100 p-3 max-w-[160px]">
                <p className="text-[10px] font-bold text-gray-700">
                  Upload Prescriptions
                </p>
                <p className="text-[9px] text-gray-400 mt-0.5">
                  Get the best price and skip the queue
                </p>
              </div>
              <div className="absolute right-2 bottom-4 z-10 bg-white rounded-xl shadow-xl border border-gray-100 p-3 max-w-[160px]">
                <p className="text-[10px] font-bold text-gray-700">
                  Appointment booking
                </p>
                <p className="text-[9px] text-gray-400 mt-0.5">
                  got easier, book now
                </p>
              </div>

              {/* Phone mockup */}
              <div className="relative  mx-auto">
                <img src="/images/mobile/mobile1.png" alt="" srcset="" />
              </div>

              {/* Floating action buttons */}
              <div className="absolute right-0 top-8 flex flex-col gap-2">
                <div className="w-10 h-10 rounded-full bg-green-400 flex items-center justify-center shadow-lg">
                  <span className="text-white text-lg font-bold">↓</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-lg">
                  <Smartphone size={16} className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lavender wave bottom */}
        <div className="bg-lavender mt-16 py-2" style={{ height: 8 }} />
      </section>

      {/* ── APP FEATURES ──────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 reveal">
            <span className="inline-block px-4 py-1.5 bg-lavender text-primary text-xs font-bold rounded-full mb-4 tracking-wide uppercase">
              Features
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Everything you need to know
              <br />
              about the Zamda Mobile App
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {appFeatures.map(({ icon, title, desc, color, iconColor }, i) => (
              <div
                key={`${title}-${i}`}
                className={`reveal delay-${(i % 3) * 100 + 100} rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all group ${color} flex flex-col-reverse`}
              >
                <div
                  className={`w-full aspect-[3/2] rounded-xl  flex items-center justify-center mb-5 group-hover:scale-[1.02] transition-transform`}
                >
                  <div className="text-center">
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

          <div className="text-center reveal">
            <button className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-all hover:shadow-xl hover:-translate-y-0.5">
              Explore Full Features <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* ── ZAM AI POWERED ────────────────────────────────────────────────────── */}
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

          {/* Featured — Symptom Checker */}
          <div className="reveal mb-6">
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all">
              <div className="grid lg:grid-cols-2">
                <div className="p-8">
                  <span className="inline-block px-3 py-1 bg-purple-100 text-purple-600 text-xs font-bold rounded-full mb-4">
                    Top Rated
                  </span>
                  <h3 className="font-bold text-gray-900 text-xl mb-3">
                    Symptom Checker
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {aiFeatures[0].desc}
                  </p>
                </div>
                <div
                  className=" flex items-center justify-center"
                  style={{ minHeight: 200 }}
                >
                  <div className="text-center  py-10">
                    <img src="/images/mobile/mobile8.png" alt="" srcset="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Other AI features */}
          <div className="grid md:grid-cols-3 gap-6">
            {aiFeatures
              .slice(1)
              .map(({ icon, title, desc, color, iconColor }, i) => (
                <div
                  key={title}
                  className={`reveal delay-${i * 100 + 100} bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:border-purple-200 transition-all group  ${color} `}
                >
                  <div className={`w-full rounded-xl mb-5`}>
                    <div className="text-center opacity-40">
                      <img src={icon} alt="" srcset="" />
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

      {/* ── HOW IT WORKS ──────────────────────────────────────────────────────── */}
      <section
        className="py-20"
        style={{
          backgroundImage: `
      linear-gradient(180deg, rgba(239, 238, 253, 1) 0%, rgba(255, 255, 255, 1) 100%)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="inline-block px-4 py-1.5 bg-lavender text-primary text-xs font-bold rounded-full mb-4 tracking-wide uppercase">
              How it Works
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Learn How the Zamda
              <br />
              Mobile App Works
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Left steps */}
            <div className="flex flex-col gap-8">
              {stepsLeft.map(({ num, title, desc }) => (
                <div key={num} className="reveal flex flex-col gap-4">
                  <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center flex-shrink-0 text-white font-black text-sm mt-0.5">
                    {num}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1.5 text-sm">
                      {title}
                    </h4>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Center phone mockup */}
            <div className="reveal flex justify-center">
              <div className="relative">
                <img src="/images/mobile/mobile9.png" alt="" srcset="" />
                {/* Decorative dots */}
                <div className="absolute -left-6 top-1/3 w-3 h-3 rounded-full bg-primary" />
                <div className="absolute -right-6 top-2/3 w-3 h-3 rounded-full bg-accent-light" />
              </div>
            </div>

            {/* Right steps */}
            <div className="flex flex-col gap-8">
              {stepsRight.map(({ num, title, desc }) => (
                <div key={num} className="reveal flex flex-col gap-4">
                  <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center flex-shrink-0 text-white font-black text-sm mt-0.5">
                    {num}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1.5 text-sm">
                      {title}
                    </h4>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Download Now button */}
          <div className="text-center mt-14 reveal">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-all hover:shadow-xl hover:-translate-y-0.5"
            >
              <Download size={18} /> Download Now
            </a>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ────────────────────────────────────────────────────────── */}
      <section className="pt-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-accent/20 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-accent-light/10 blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left text */}
            <div className="reveal-left text-white">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Be First to Experience the Zamda Mobile App
              </h2>
              <p className="text-white/70 text-sm mb-8 max-w-md">
                Download the Mobile App and be a part of the future of health
                care.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#"
                  className="flex items-center gap-3 px-5 py-3 bg-white text-gray-900 rounded-xl hover:bg-lavender transition-all font-semibold"
                >
                  <Download size={18} />
                  <div className="text-left">
                    <p className="text-[10px] text-gray-500 leading-none mb-0.5">
                      Download on the
                    </p>
                    <p className="font-bold text-sm leading-none">App Store</p>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 px-5 py-3 bg-white text-gray-900 rounded-xl hover:bg-lavender transition-all font-semibold"
                >
                  <Download size={18} />
                  <div className="text-left">
                    <p className="text-[10px] text-gray-500 leading-none mb-0.5">
                      Get it on
                    </p>
                    <p className="font-bold text-sm leading-none">
                      Google Play
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Right — phone mockup */}
            <div className="reveal-right flex justify-center lg:justify-end">
             <img src="/images/mobile/mobile10.png" alt="" srcset="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
