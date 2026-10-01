import React, { useState } from 'react';
import { FaCalendarAlt, FaUser, FaArrowRight, FaSearch } from 'react-icons/fa';

const Insights = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Cyber Crime', 'Legal Updates', 'Case Studies', 'Industry News', 'Expert Opinions'];

  const articles = [
    {
      id: 1,
      title: 'Understanding Bank Account Freeze: Your Rights and Legal Remedies',
      category: 'Cyber Crime',
      date: 'January 15, 2024',
      author: 'Adv. Roshan Kumar',
      excerpt: 'Bank account freezes can happen due to various reasons including cyber fraud investigations. Learn about your legal rights and how to get your account defrozen quickly.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Recent Amendments in Indian Cyber Crime Laws: What You Need to Know',
      category: 'Legal Updates',
      date: 'January 10, 2024',
      author: 'Juris Associates',
      excerpt: 'The Indian government has introduced several amendments to cyber crime laws. This article covers the key changes and their implications for businesses and individuals.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
      readTime: '7 min read'
    },
    {
      id: 3,
      title: 'Crypto Fraud Cases: How to Protect Yourself and Seek Legal Recourse',
      category: 'Cyber Crime',
      date: 'January 5, 2024',
      author: 'Adv. Roshan Kumar',
      excerpt: 'With the rise in cryptocurrency trading, fraud cases have increased significantly. Learn how to identify scams and what legal options are available if you become a victim.',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'Corporate Compliance in 2024: Key Regulatory Changes',
      category: 'Legal Updates',
      date: 'December 28, 2023',
      author: 'Juris Associates',
      excerpt: 'Stay updated with the latest corporate compliance requirements and regulatory changes that affect businesses in India.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
      readTime: '8 min read'
    },
    {
      id: 5,
      title: 'Case Study: Successful Recovery of Frozen Bank Account',
      category: 'Case Studies',
      date: 'December 20, 2023',
      author: 'Juris Associates',
      excerpt: 'A detailed case study of how we successfully helped a client recover their frozen bank account within 48 hours through proper legal procedures.',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80',
      readTime: '10 min read'
    },
    {
      id: 6,
      title: 'Employment Law Updates: New Labour Codes and Their Impact',
      category: 'Legal Updates',
      date: 'December 15, 2023',
      author: 'Juris Associates',
      excerpt: 'The new labour codes have significant implications for both employers and employees. Understand what has changed and how it affects you.',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80',
      readTime: '6 min read'
    },
    {
      id: 7,
      title: 'Online Investment Fraud: Red Flags and Prevention Strategies',
      category: 'Cyber Crime',
      date: 'December 10, 2023',
      author: 'Adv. Roshan Kumar',
      excerpt: 'Learn to identify common red flags in online investment schemes and how to protect yourself from falling victim to fraud.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      readTime: '5 min read'
    },
    {
      id: 8,
      title: 'Dispute Resolution: Choosing Between Litigation and Arbitration',
      category: 'Expert Opinions',
      date: 'December 5, 2023',
      author: 'Juris Associates',
      excerpt: 'An expert analysis of when to choose litigation versus arbitration for resolving commercial disputes.',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80',
      readTime: '7 min read'
    }
  ];

  const filteredArticles = selectedCategory === 'All' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#0f0f0f] pt-24">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-white text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-bold mb-6 leading-tight">
              Legal <span className="text-[#c9a870]">Insights</span>
            </h1>
            <p className="text-gray-300 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Stay informed with expert legal insights, case studies, and updates on cyber crime law, corporate compliance, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
        <div className="max-w-[1400px] mx-auto">
          
          {/* Category Filter */}
          <div className="mb-12 flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-[#c9a870] text-[#1a1a1a]'
                    : 'bg-[#1a1a1a] text-gray-400 border border-[#2a2a2a] hover:border-[#c9a870]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                className="bg-[#1a1a1a] rounded-[20px] overflow-hidden border border-[#2a2a2a] hover:border-[#c9a870] transition-all duration-300 group cursor-pointer"
              >
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#c9a870] text-[#1a1a1a] px-3 py-1 rounded-full text-xs font-bold">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-4 text-gray-400 text-xs sm:text-sm mb-4">
                    <div className="flex items-center gap-2">
                      <FaCalendarAlt />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaUser />
                      <span>{article.author}</span>
                    </div>
                  </div>
                  <h3 className="text-white text-xl sm:text-2xl font-bold mb-3 group-hover:text-[#c9a870] transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-[15px] leading-relaxed mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-xs">{article.readTime}</span>
                    <button className="text-[#c9a870] font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                      Read More
                      <FaArrowRight />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Subscription */}
          <div className="mt-16 sm:mt-20 bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-[20px] p-8 sm:p-10 md:p-12 border border-[#c9a870]/20">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-white text-[28px] sm:text-[32px] md:text-[36px] font-bold mb-4">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-gray-400 mb-8 text-[15px] sm:text-[16px]">
                Get the latest legal insights, case studies, and updates delivered directly to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 bg-[#0f0f0f] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#c9a870] transition-colors"
                />
                <button
                  type="submit"
                  className="bg-[#c9a870] hover:bg-[#b89860] text-[#1a1a1a] px-8 py-3 rounded-lg font-bold transition-all duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Insights;

