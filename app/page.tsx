'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(31, 61, 58, 0.8), rgba(31, 61, 58, 0.8)), url('https://readdy.ai/api/search-image?query=Modern%20Ethiopian%20professionals%20collaborating%20in%20a%20sleek%20innovation%20workspace%20with%20laptops%20and%20digital%20screens%2C%20bright%20natural%20lighting%2C%20contemporary%20office%20environment%20with%20green%20plants%20and%20modern%20furniture%2C%20professional%20atmosphere%20showcasing%20technology%20and%20teamwork%20in%20Ethiopia%2C%20clean%20minimalist%20design&width=1920&height=1080&seq=hero1&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Innovation as a <span className="text-green-400">Service</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
            Ethiopia's premier innovation hub providing comprehensive business solutions, talent marketplace, and creative design services to accelerate your growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/diagnosis" className="bg-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 transition-colors whitespace-nowrap cursor-pointer">
              Start Free Diagnosis
            </Link>
            <Link href="/services" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-[#1F3D3A] transition-colors whitespace-nowrap cursor-pointer">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1F3D3A] mb-4">Core Innovation Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions to transform your business and accelerate growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: 'ri-rocket-line',
                title: 'Go-To-Market Strategy',
                description: 'Launch your products with precision-crafted market entry strategies that maximize impact and minimize risk.'
              },
              {
                icon: 'ri-line-chart-line',
                title: 'Growth Strategy',
                description: 'Scale your business with data-driven growth frameworks tailored to Ethiopian and global markets.'
              },
              {
                icon: 'ri-lightbulb-line',
                title: 'Innovation Strategy',
                description: 'Transform your organization with cutting-edge innovation methodologies and future-focused thinking.'
              },
              {
                icon: 'ri-settings-line',
                title: 'Business Logic Development',
                description: 'Build robust business models with clear value propositions and sustainable competitive advantages.'
              },
              {
                icon: 'ri-product-hunt-line',
                title: 'Product Development',
                description: 'From concept to market with comprehensive product development and validation processes.'
              },
              {
                icon: 'ri-customer-service-line',
                title: 'Service Development',
                description: 'Design and optimize service offerings that delight customers and drive business growth.'
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 flex items-center justify-center bg-[#1F3D3A]/10 rounded-2xl mb-6">
                  <i className={`${service.icon} text-2xl text-[#1F3D3A]`}></i>
                </div>
                <h3 className="text-xl font-bold text-[#1F3D3A] mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="bg-[#1F3D3A] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#2a5248] transition-colors whitespace-nowrap cursor-pointer">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Sub-brands Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1F3D3A] mb-4">Complete Innovation Ecosystem</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three integrated platforms serving all your business innovation needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-12">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-xl mr-4">
                    <i className="ri-team-line text-2xl text-blue-600"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-[#1F3D3A]">InHub Skills</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Ethiopia's premier talent marketplace connecting businesses with skilled professionals across technology, marketing, design, and administration.
                </p>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li className="flex items-center">
                    <i className="ri-check-line text-green-500 mr-2"></i>
                    Curated Ethiopian talent pool
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-green-500 mr-2"></i>
                    Skill certification programs
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-green-500 mr-2"></i>
                    Integrated wallet system
                  </li>
                </ul>
                <Link href="/skills" className="text-[#1F3D3A] font-semibold hover:text-[#2a5248] cursor-pointer">
                  Explore Talent Marketplace →
                </Link>
              </div>

              <div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-purple-100 rounded-xl mr-4">
                    <i className="ri-palette-line text-2xl text-purple-600"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-[#1F3D3A]">InHub Design</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Full-service creative studio specializing in UI/UX design, branding, and industrial product design.
                </p>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li className="flex items-center">
                    <i className="ri-check-line text-green-500 mr-2"></i>
                    UI/UX Design Excellence
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-green-500 mr-2"></i>
                    Brand Identity Creation
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-green-500 mr-2"></i>
                    Industrial Design Innovation
                  </li>
                </ul>
                <Link href="/design" className="text-[#1F3D3A] font-semibold hover:text-[#2a5248] cursor-pointer">
                  View Design Portfolio →
                </Link>
              </div>
            </div>

            <div 
              className="h-96 rounded-2xl"
              style={{
                backgroundImage: `url('https://readdy.ai/api/search-image?query=Ethiopian%20designers%20and%20developers%20working%20together%20in%20a%20modern%20creative%20studio%2C%20multiple%20monitors%20showing%20design%20work%20and%20code%2C%20collaborative%20workspace%20with%20design%20materials%20and%20tech%20equipment%2C%20bright%20contemporary%20office%20environment%20with%20plants%20and%20modern%20furniture%2C%20showcasing%20creativity%20and%20innovation&width=600&height=400&seq=subbrand1&orientation=landscape')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            ></div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1F3D3A]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Start with our free diagnostic tool or book a consultation with our innovation experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/diagnosis" className="bg-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 transition-colors whitespace-nowrap cursor-pointer">
              Free Business Diagnosis
            </Link>
            <Link href="/contact" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-[#1F3D3A] transition-colors whitespace-nowrap cursor-pointer">
              Book Consultation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}