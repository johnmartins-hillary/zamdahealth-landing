import { useState } from "react";
import { useReveal } from "../hooks/useReveal";
import { MapPin, Clock, ArrowRight, Briefcase, Users, Zap, Heart } from "lucide-react";

const values = [
  { icon: Zap, title: "Move Fast", desc: "We ship fast, iterate quickly, and believe in getting things done." },
  { icon: Users, title: "Team First", desc: "We win together. Collaboration and mutual respect are non-negotiable." },
  { icon: Heart, title: "Impact-Driven", desc: "Every line of code improves healthcare access for millions of people." },
  { icon: Briefcase, title: "Own Your Work", desc: "We trust our people to own their domains and make big decisions." },
];

const jobs = [
  { title: "Senior Frontend Engineer", dept: "Engineering", location: "Lagos, Nigeria", type: "Full-time" },
  { title: "Backend Engineer (Node.js)", dept: "Engineering", location: "Remote", type: "Full-time" },
  { title: "Product Designer", dept: "Design", location: "Lagos, Nigeria", type: "Full-time" },
  { title: "Product Manager", dept: "Product", location: "Lagos / Remote", type: "Full-time" },
  { title: "Sales Executive", dept: "Sales", location: "Abuja, Nigeria", type: "Full-time" },
  { title: "Customer Success Manager", dept: "Operations", location: "Lagos, Nigeria", type: "Full-time" },
  { title: "Data Analyst", dept: "Engineering", location: "Remote", type: "Contract" },
  { title: "Content Writer", dept: "Marketing", location: "Remote", type: "Part-time" },
];

const depts = ["All", "Engineering", "Design", "Product", "Sales", "Operations", "Marketing"];

const perks = [
  "Competitive salary", "Remote-friendly", "Health insurance", "Learning budget",
  "Stock options", "Flexible hours", "Annual retreats", "Laptop provided",
];

export default function Careers() {
  useReveal();
  const [activeDept, setActiveDept] = useState("All");

  const filtered = jobs.filter((j) => activeDept === "All" || j.dept === activeDept);

  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-accent/20 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-accent-light/10 blur-3xl" />
          <div className="absolute inset-0 opacity-5"
            style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "40px 40px" }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-white animate-fade-up">
              <span className="inline-block px-4 py-1.5 bg-white/15 rounded-full text-sm font-medium mb-6">
                We're Hiring
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                We'd Love to Have{" "}
                <span className="text-accent-light">You</span> on the Team
              </h1>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Join a team building the future of healthcare technology in Africa. We're passionate, fast-moving, and deeply committed to impact.
              </p>
              <a href="#openings" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-primary font-bold rounded-xl hover:bg-lavender transition-all hover:shadow-xl hover:-translate-y-1">
                View Open Roles <ArrowRight size={18} />
              </a>
            </div>

            {/* Team photo grid */}
            <div className="reveal-right hidden lg:grid grid-cols-2 gap-4">
              {["Team Member 1", "Team Member 2", "Team Member 3", "Team Member 4"].map((label, i) => (
                <div key={label} className={`aspect-square rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center ${i === 1 ? "mt-6" : ""}`}>
                  <div className="text-center text-white/40">
                    <Users size={28} className="mx-auto mb-2" />
                    <p className="text-xs">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">How We Work</h2>
            <p className="text-gray-600">Our values shape everything — from how we build to how we treat each other.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <div key={title} className={`reveal delay-${i * 100 + 100} text-center p-6`}>
                <div className="w-14 h-14 rounded-2xl bg-lavender flex items-center justify-center mx-auto mb-4">
                  <Icon size={24} className="text-primary" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="py-16 bg-lavender">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Benefits & Perks</h2>
            <p className="text-gray-600 text-sm">We take care of our team so they can focus on building great things.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {perks.map((perk, i) => (
              <div key={perk} className={`reveal delay-${(i % 4) * 100} bg-white rounded-xl px-4 py-3 text-center text-sm font-medium text-gray-700 shadow-sm`}>
                {perk}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job listings */}
      <section id="openings" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Open <span className="gradient-text">Positions</span>
            </h2>
            <p className="text-gray-600">Find your next adventure at Zamdahealth.</p>
          </div>

          {/* Dept filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-10 reveal">
            {depts.map((dept) => (
              <button
                key={dept}
                onClick={() => setActiveDept(dept)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeDept === dept
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-lavender hover:text-primary"
                }`}
              >
                {dept}
              </button>
            ))}
          </div>

          {/* Jobs */}
          <div className="flex flex-col gap-4 max-w-4xl mx-auto">
            {filtered.map(({ title, dept, location, type }, i) => (
              <div key={title} className={`reveal delay-${(i % 4) * 100} flex items-center justify-between p-6 rounded-2xl border border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all group`}>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors">{title}</h3>
                    <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                      type === "Full-time" ? "bg-green-50 text-green-700" :
                      type === "Part-time" ? "bg-yellow-50 text-yellow-700" :
                      "bg-blue-50 text-blue-700"
                    }`}>{type}</span>
                  </div>
                  <div className="flex items-center gap-4 text-gray-500 text-sm">
                    <span className="flex items-center gap-1.5"><Briefcase size={13} /> {dept}</span>
                    <span className="flex items-center gap-1.5"><MapPin size={13} /> {location}</span>
                  </div>
                </div>
                <button className="flex-shrink-0 px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-xl hover:bg-primary-dark transition-all hover:-translate-y-0.5 flex items-center gap-2">
                  Apply <ArrowRight size={15} />
                </button>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-12 text-gray-400">
              <Briefcase size={40} className="mx-auto mb-3 opacity-40" />
              <p>No open positions in this department right now.</p>
              <p className="text-sm mt-1">Check back soon or send a general application.</p>
            </div>
          )}

          {/* General application */}
          <div className="mt-16 reveal text-center bg-lavender rounded-3xl p-10">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Don't See a Role for You?</h3>
            <p className="text-gray-600 mb-6 max-w-lg mx-auto">
              We're always looking for exceptional people. Send us your CV and we'll reach out when the right opportunity comes up.
            </p>
            <a
              href="mailto:careers@zamdahealth.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-all hover:-translate-y-0.5"
            >
              Send General Application <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
