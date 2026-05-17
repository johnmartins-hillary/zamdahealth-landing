import { useState } from "react";
import { useReveal } from "../hooks/useReveal";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, Search, Tag } from "lucide-react";

const categories = ["All", "Technology", "Healthcare", "Business", "AI", "Updates"];

const posts = [
  { id: 1, title: "How AI is Revolutionizing Pharmacy Management in Africa", excerpt: "Artificial intelligence is transforming how pharmacies operate, from inventory prediction to patient care optimization.", category: "AI", date: "May 10, 2025", readTime: "5 min read", featured: true },
  { id: 2, title: "5 Ways to Reduce Medication Waste in Your Pharmacy", excerpt: "Learn practical strategies to minimize expiry losses and optimize your medication inventory effectively.", category: "Business", date: "May 5, 2025", readTime: "4 min read", featured: false },
  { id: 3, title: "The Future of Digital Healthcare in Nigeria", excerpt: "Nigeria's healthcare sector is undergoing a digital transformation. Here's what pharmacy owners need to know.", category: "Healthcare", date: "Apr 28, 2025", readTime: "6 min read", featured: false },
  { id: 4, title: "Zamdahealth Mobile POS: A Complete Guide", excerpt: "Everything you need to know about setting up and using the Zamdahealth Mobile POS system for your pharmacy.", category: "Technology", date: "Apr 20, 2025", readTime: "8 min read", featured: false },
  { id: 5, title: "Understanding Pharmacy Analytics: A Beginner's Guide", excerpt: "Make sense of your sales data and turn insights into actions that grow your pharmacy business.", category: "Business", date: "Apr 15, 2025", readTime: "5 min read", featured: false },
  { id: 6, title: "Zamdahealth v2.0: What's New", excerpt: "We've shipped our biggest update yet. Here's a walkthrough of all the new features and improvements.", category: "Updates", date: "Apr 1, 2025", readTime: "3 min read", featured: false },
];

export default function Blog() {
  useReveal();
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = posts.filter((p) => {
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) || p.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const featured = posts.find((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);

  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-lavender">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-up">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
              Our Blog
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Latest News & <span className="gradient-text">Articles</span>
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
              Insights, guides, and updates from the Zamdahealth team on pharmacy management, healthcare technology, and business growth.
            </p>
            {/* Search */}
            <div className="max-w-lg mx-auto relative">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 bg-white text-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-6 bg-white border-b border-gray-100 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-3 overflow-x-auto pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-lavender hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured post */}
          {featured && activeCategory === "All" && !search && (
            <div className="reveal mb-12">
              <div className="grid lg:grid-cols-2 gap-8 bg-lavender rounded-3xl overflow-hidden">
                <div className="aspect-video lg:aspect-auto rounded-2xl bg-lavender-dark flex items-center justify-center m-4">
                  <div className="text-center text-gray-400">
                    <Tag size={40} className="mx-auto mb-2" />
                    <p className="text-sm">Featured Article Image</p>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full w-fit mb-4">
                    <Tag size={12} /> {featured.category}
                  </span>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">{featured.title}</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">{featured.excerpt}</p>
                  <div className="flex items-center gap-4 text-gray-400 text-sm mb-6">
                    <span className="flex items-center gap-1.5"><Calendar size={14} /> {featured.date}</span>
                    <span className="flex items-center gap-1.5"><Clock size={14} /> {featured.readTime}</span>
                  </div>
                  <Link to={`/blog/${featured.id}`} className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                    Read Article <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map(({ id, title, excerpt, category, date, readTime }, i) => (
              <article key={id} className={`reveal delay-${(i % 3) * 100 + 100} group rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg hover:border-primary/20 transition-all`}>
                <div className="aspect-video bg-lavender flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <Tag size={28} className="mx-auto mb-1" />
                    <p className="text-xs">Article Image</p>
                  </div>
                </div>
                <div className="p-6">
                  <span className="inline-block text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full mb-3">
                    {category}
                  </span>
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-2">{excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-gray-400 text-xs">
                      <span className="flex items-center gap-1"><Calendar size={12} /> {date}</span>
                      <span className="flex items-center gap-1"><Clock size={12} /> {readTime}</span>
                    </div>
                    <Link to={`/blog/${id}`} className="text-primary text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                      Read <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-gray-400">
              <Search size={40} className="mx-auto mb-4 opacity-40" />
              <p className="font-medium">No articles found</p>
              <p className="text-sm mt-1">Try a different search term or category</p>
            </div>
          )}

          {/* Newsletter */}
          <div className="mt-16 reveal bg-primary rounded-3xl p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute -top-10 -right-10 w-60 h-60 rounded-full bg-accent/20 blur-3xl" />
            </div>
            <div className="relative">
              <h3 className="text-2xl font-bold mb-3">Stay in the Loop</h3>
              <p className="text-white/70 mb-6">Get the latest pharmacy insights delivered to your inbox weekly.</p>
              <div className="flex max-w-md mx-auto gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 text-sm focus:outline-none focus:border-white/40"
                />
                <button className="px-6 py-3 bg-white text-primary font-bold rounded-xl hover:bg-lavender transition-all text-sm flex-shrink-0">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
