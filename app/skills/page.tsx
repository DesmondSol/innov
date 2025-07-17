
'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { useState } from 'react';

export default function SkillsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Skills', icon: 'ri-apps-line' },
    { id: 'development', name: 'Development', icon: 'ri-code-line' },
    { id: 'design', name: 'Design', icon: 'ri-palette-line' },
    { id: 'marketing', name: 'Marketing', icon: 'ri-megaphone-line' },
    { id: 'data', name: 'Data & Analytics', icon: 'ri-bar-chart-line' },
    { id: 'business', name: 'Business', icon: 'ri-briefcase-line' },
    { id: 'content', name: 'Content & Writing', icon: 'ri-quill-pen-line' }
  ];

  const professionals = [
    {
      id: 1,
      name: 'Hana Tesfaye',
      title: 'Full Stack Developer',
      category: 'development',
      skills: ['React', 'Node.js', 'Python', 'AWS'],
      rating: 4.9,
      reviews: 47,
      hourlyRate: '$35',
      location: 'Addis Ababa',
      availability: 'Available',
      certified: true,
      image: 'https://readdy.ai/api/search-image?query=Professional%20Ethiopian%20female%20software%20developer%20with%20modern%20laptop%20in%20contemporary%20office%20setting%2C%20confident%20and%20skilled%20technology%20professional%2C%20clean%20background%20with%20natural%20lighting%2C%20professional%20headshot%20style%20portrait&width=300&height=300&seq=prof1&orientation=squarish'
    },
    {
      id: 2,
      name: 'Dawit Bekele',
      title: 'UX/UI Designer',
      category: 'design',
      skills: ['Figma', 'Adobe XD', 'User Research', 'Prototyping'],
      rating: 4.8,
      reviews: 32,
      hourlyRate: '$30',
      location: 'Addis Ababa',
      availability: 'Available',
      certified: true,
      image: 'https://readdy.ai/api/search-image?query=Professional%20Ethiopian%20male%20UX%20designer%20working%20on%20interface%20design%2C%20creative%20workspace%20with%20design%20tools%20and%20sketches%2C%20modern%20office%20environment%2C%20professional%20portrait%20style%20with%20clean%20background&width=300&height=300&seq=prof2&orientation=squarish'
    },
    {
      id: 3,
      name: 'Meron Alemayehu',
      title: 'Digital Marketing Specialist',
      category: 'marketing',
      skills: ['SEO', 'Google Ads', 'Social Media', 'Analytics'],
      rating: 4.9,
      reviews: 28,
      hourlyRate: '$25',
      location: 'Hawassa',
      availability: 'Available',
      certified: true,
      image: 'https://readdy.ai/api/search-image?query=Professional%20Ethiopian%20female%20digital%20marketing%20specialist%20with%20laptop%20and%20marketing%20analytics%20charts%2C%20confident%20business%20professional%20in%20modern%20office%20setting%2C%20clean%20professional%20portrait%20with%20natural%20lighting&width=300&height=300&seq=prof3&orientation=squarish'
    },
    {
      id: 4,
      name: 'Samuel Girma',
      title: 'Data Scientist',
      category: 'data',
      skills: ['Python', 'Machine Learning', 'SQL', 'Tableau'],
      rating: 4.8,
      reviews: 41,
      hourlyRate: '$40',
      location: 'Addis Ababa',
      availability: 'Busy',
      certified: true,
      image: 'https://readdy.ai/api/search-image?query=Professional%20Ethiopian%20male%20data%20scientist%20with%20multiple%20monitors%20showing%20data%20visualizations%20and%20code%2C%20analytical%20professional%20in%20modern%20tech%20workspace%2C%20professional%20portrait%20with%20clean%20background&width=300&height=300&seq=prof4&orientation=squarish'
    },
    {
      id: 5,
      name: 'Bethlehem Tadesse',
      title: 'Content Writer & Strategist',
      category: 'content',
      skills: ['Content Strategy', 'SEO Writing', 'Copywriting', 'Research'],
      rating: 4.9,
      reviews: 35,
      hourlyRate: '$20',
      location: 'Bahir Dar',
      availability: 'Available',
      certified: true,
      image: 'https://readdy.ai/api/search-image?query=Professional%20Ethiopian%20female%20content%20writer%20with%20laptop%20and%20notebooks%2C%20creative%20writing%20workspace%20with%20books%20and%20plants%2C%20modern%20office%20environment%2C%20professional%20portrait%20style%20with%20natural%20lighting&width=300&height=300&seq=prof5&orientation=squarish'
    },
    {
      id: 6,
      name: 'Yohannes Mulugeta',
      title: 'Business Analyst',
      category: 'business',
      skills: ['Business Intelligence', 'Process Optimization', 'Strategy', 'Excel'],
      rating: 4.7,
      reviews: 23,
      hourlyRate: '$32',
      location: 'Mekelle',
      availability: 'Available',
      certified: false,
      image: 'https://readdy.ai/api/search-image?query=Professional%20Ethiopian%20male%20business%20analyst%20with%20financial%20charts%20and%20business%20documents%2C%20corporate%20professional%20in%20modern%20office%20setting%2C%20confident%20portrait%20with%20clean%20background%20and%20natural%20lighting&width=300&height=300&seq=prof6&orientation=squarish'
    }
  ];

  const filteredProfessionals = professionals.filter(prof => {
    const matchesCategory = activeCategory === 'all' || prof.category === activeCategory;
    const matchesSearch = prof.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         prof.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         prof.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-20 text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(31, 61, 58, 0.8), rgba(31, 61, 58, 0.8)), url('https://readdy.ai/api/search-image?query=Ethiopian%20professionals%20working%20together%20in%20modern%20coworking%20space%2C%20diverse%20team%20of%20developers%20designers%20and%20business%20professionals%20collaborating%2C%20contemporary%20office%20with%20laptops%20and%20creative%20workspace%2C%20professional%20atmosphere%20showcasing%20Ethiopian%20talent%20and%20innovation&width=1920&height=600&seq=skillshero&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">InHub Skills Marketplace</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Connect with Ethiopia's top-tier professionals across technology, design, marketing, and business domains
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#browse" className="bg-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 transition-colors whitespace-nowrap cursor-pointer">
              Browse Talent
            </Link>
            <Link href="/contact" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-[#1F3D3A] transition-colors whitespace-nowrap cursor-pointer">
              Post a Project
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#1F3D3A] mb-2">2,500+</div>
              <div className="text-gray-600">Skilled Professionals</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#1F3D3A] mb-2">850+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#1F3D3A] mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#1F3D3A] mb-2">4.8</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Browse Section */}
      <section id="browse" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1F3D3A] mb-4">Browse Top Talent</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find certified professionals ready to help you achieve your business goals
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-12">
            <div className="max-w-md mx-auto mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by name, skill, or expertise..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#1F3D3A] text-sm"
                />
                <i className="ri-search-line absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center px-6 py-3 rounded-full transition-colors whitespace-nowrap cursor-pointer ${
                    activeCategory === category.id
                      ? 'bg-[#1F3D3A] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <i className={`${category.icon} mr-2`}></i>
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Professionals Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProfessionals.map((professional) => (
              <div key={professional.id} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-start mb-4">
                  <div 
                    className="w-16 h-16 rounded-full bg-gray-200 mr-4 flex-shrink-0"
                    style={{
                      backgroundImage: `url('${professional.image}')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  ></div>
                  <div className="flex-grow">
                    <div className="flex items-center mb-1">
                      <h3 className="font-bold text-[#1F3D3A] mr-2">{professional.name}</h3>
                      {professional.certified && (
                        <div className="w-5 h-5 flex items-center justify-center bg-green-100 rounded-full">
                          <i className="ri-shield-check-fill text-xs text-green-600"></i>
                        </div>
                      )}
                    </div>
                    <p className="text-gray-600 text-sm mb-1">{professional.title}</p>
                    <p className="text-gray-500 text-xs">{professional.location}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <div className="flex items-center mr-4">
                      <i className="ri-star-fill text-yellow-400 text-sm mr-1"></i>
                      <span className="text-sm font-semibold">{professional.rating}</span>
                      <span className="text-xs text-gray-500 ml-1">({professional.reviews} reviews)</span>
                    </div>
                    <div className={`px-2 py-1 rounded-full text-xs ${
                      professional.availability === 'Available'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {professional.availability}
                    </div>
                  </div>
                  <div className="text-lg font-bold text-[#1F3D3A]">{professional.hourlyRate}/hour</div>
                </div>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {professional.skills.slice(0, 3).map((skill, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                        {skill}
                      </span>
                    ))}
                    {professional.skills.length > 3 && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                        +{professional.skills.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 bg-[#1F3D3A] text-white py-2 px-4 rounded-full text-sm font-medium hover:bg-[#2a5248] transition-colors whitespace-nowrap cursor-pointer">
                    View Profile
                  </button>
                  <button className="flex-1 border border-[#1F3D3A] text-[#1F3D3A] py-2 px-4 rounded-full text-sm font-medium hover:bg-[#1F3D3A] hover:text-white transition-colors whitespace-nowrap cursor-pointer">
                    Contact
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredProfessionals.length === 0 && (
            <div className="text-center py-12">
              <i className="ri-search-line text-6xl text-gray-300 mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No professionals found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1F3D3A] mb-4">How InHub Skills Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple, secure, and efficient way to connect with Ethiopian talent
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#1F3D3A] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-bold text-[#1F3D3A] mb-4">Post Your Project</h3>
              <p className="text-gray-600">
                Describe your project requirements and budget. Our team will help you define the scope and timeline.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[#1F3D3A] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-bold text-[#1F3D3A] mb-4">Get Matched</h3>
              <p className="text-gray-600">
                Receive curated proposals from verified professionals who match your specific requirements and budget.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[#1F3D3A] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-bold text-[#1F3D3A] mb-4">Work & Pay Securely</h3>
              <p className="text-gray-600">
                Collaborate using our built-in tools and pay securely through our integrated wallet system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1F3D3A] mb-4">Why Choose InHub Skills</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Premium features designed for successful project collaboration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: 'ri-shield-check-line',
                title: 'Verified Professionals',
                description: 'All talents go through rigorous verification including skill assessments and background checks.'
              },
              {
                icon: 'ri-wallet-line',
                title: 'Integrated Wallet',
                description: 'Secure payment system with escrow protection and multiple payment options including mobile money.'
              },
              {
                icon: 'ri-graduation-cap-line',
                title: 'Continuous Training',
                description: 'Our professionals receive ongoing training to stay current with latest technologies and trends.'
              },
              {
                icon: 'ri-customer-service-line',
                title: '24/7 Support',
                description: 'Dedicated support team available around the clock to help resolve any issues or concerns.'
              },
              {
                icon: 'ri-time-line',
                title: 'Quality Assurance',
                description: 'Built-in quality control processes ensure deliverables meet your standards and expectations.'
              },
              {
                icon: 'ri-global-line',
                title: 'Local & Global Ready',
                description: 'Professionals equipped to work on both local Ethiopian projects and international assignments.'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 flex items-center justify-center bg-[#1F3D3A]/10 rounded-2xl mb-6">
                  <i className={`${feature.icon} text-2xl text-[#1F3D3A]`}></i>
                </div>
                <h3 className="text-xl font-bold text-[#1F3D3A] mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1F3D3A]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Find Your Perfect Match?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses that trust InHub Skills for their talent needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 transition-colors whitespace-nowrap cursor-pointer">
              Post Your First Project
            </Link>
            <Link href="/contact" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-[#1F3D3A] transition-colors whitespace-nowrap cursor-pointer">
              Join as Professional
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
