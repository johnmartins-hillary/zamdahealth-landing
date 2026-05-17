import { useReveal } from "../hooks/useReveal";
import { Link } from "react-router-dom";
import { Smartphone, Zap, WifiOff, BarChart3, Receipt, Shield, ArrowRight, CheckCircle } from "lucide-react";

const features = [
  { icon: Zap, title: "Instant Sales", desc: "Process sales with barcode scan or product search — anywhere, anytime.", color: "bg-yellow-50 text-yellow-600" },
  { icon: WifiOff, title: "Offline Capable", desc: "Full functionality even without internet. Syncs automatically when back online.", color: "bg-red-50 text-red-600" },
  { icon: BarChart3, title: "Live Dashboard", desc: "Real-time sales, inventory levels, and staff performance on your phone.", color: "bg-purple-50 text-purple-600" },
  { icon: Receipt, title: "Digital Receipts", desc: "Send receipts via SMS or email — no printer needed for mobile transactions.", color: "bg-teal-50 text-teal-600" },
  { icon: Shield, title: "Secure Payments", desc: "Accept cash and card payments with full transaction security and audit logs.", color: "bg-blue-50 text-blue-600" },
  { icon: Smartphone, title: "Any Android Device", desc: "Works on any Android phone or tablet. No expensive hardware required.", color: "bg-green-50 text-green-600" },
];

export default function MobilePOS() {
  useReveal();

  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-24 bg-gradient-to-br from-accent to-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "40px 40px" }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-white animate-fade-up">
              <span className="inline-block px-4 py-1.5 bg-white/20 rounded-full text-sm font-medium mb-6">
                Mobile POS System
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Your Complete POS,{" "}
                <span className="text-yellow-300">In Your Pocket</span>
              </h1>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Transform any Android device into a fully functional pharmacy POS. Process sales, manage stock, and track performance — all from your smartphone.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="px-7 py-3.5 bg-white text-primary font-bold rounded-xl hover:bg-lavender transition-all hover:shadow-xl hover:-translate-y-1 flex items-center gap-2">
                  Get Started <ArrowRight size={18} />
                </Link>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {["No expensive hardware", "Works offline", "Real-time sync", "Any Android device"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-green-300 flex-shrink-0" />
                    <span className="text-white/80 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Phone mockups */}
            <div className="reveal-right flex gap-4 justify-center">
              <div className="w-44 h-80 rounded-[2.5rem] bg-gray-900 border-4 border-gray-800 shadow-2xl flex items-center justify-center overflow-hidden mt-8 animate-float">
                <div className="w-full h-full bg-lavender flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <Smartphone size={32} className="mx-auto mb-2" />
                    <p className="text-xs px-4">Sales Screen</p>
                  </div>
                </div>
              </div>
              <div className="w-44 h-80 rounded-[2.5rem] bg-gray-900 border-4 border-gray-800 shadow-2xl flex items-center justify-center overflow-hidden animate-float" style={{ animationDelay: "0.5s" }}>
                <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <BarChart3 size={32} className="mx-auto mb-2" />
                    <p className="text-xs px-4">Analytics</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Full POS Power on Mobile
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't compromise on features just because you're on mobile. Zamdahealth Mobile POS has everything your desktop system has.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ icon: Icon, title, desc, color }, i) => (
              <div key={title} className={`reveal delay-${(i % 3) * 100 + 100} p-6 rounded-2xl border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all group`}>
                <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon size={22} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-24 bg-lavender">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Desktop vs Mobile POS</h2>
            <p className="text-gray-600">Both are fully featured — pick what works for your setup.</p>
          </div>
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg reveal">
            <div className="grid grid-cols-3 bg-primary text-white text-sm font-semibold">
              <div className="p-4">Feature</div>
              <div className="p-4 text-center">Desktop POS</div>
              <div className="p-4 text-center">Mobile POS</div>
            </div>
            {[
              ["Sales Processing", true, true],
              ["Inventory Management", true, true],
              ["Offline Mode", true, true],
              ["Analytics Dashboard", true, true],
              ["Multi-staff Login", true, true],
              ["Receipt Printing", true, "Digital only"],
              ["Barcode Scanner", "External", "Camera"],
              ["Hardware Required", "Yes", "No"],
            ].map(([feature, desktop, mobile], i) => (
              <div key={feature} className={`grid grid-cols-3 text-sm border-b border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-lavender/30"}`}>
                <div className="p-4 text-gray-700 font-medium">{feature}</div>
                <div className="p-4 text-center text-gray-600">
                  {desktop === true ? <CheckCircle size={16} className="text-green-500 mx-auto" /> : desktop}
                </div>
                <div className="p-4 text-center text-gray-600">
                  {mobile === true ? <CheckCircle size={16} className="text-green-500 mx-auto" /> : mobile}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-20 right-0 w-80 h-80 rounded-full bg-accent/20 blur-3xl" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 text-center reveal">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Start Selling on Mobile Today
          </h2>
          <p className="text-white/70 mb-8">Download the Zamdahealth POS app and start processing sales immediately.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-lavender transition-all hover:shadow-xl hover:-translate-y-1">
            Get Started Free <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
