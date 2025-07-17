'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { useState } from 'react';

export default function CaseStudiesPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All Cases' },
    { id: 'strategy', name: 'Strategy' },
    { id: 'innovation', name: 'Innovation' },
    { id: 'gtm', name: 'Go-To-Market' },
    { id: 'growth', name: 'Growth' },
    { id: 'digital', name: 'Digital Transformation' }
  ];

  const caseStudies = [
    {
      id: 1,
      title: 'TechStart Ethiopia: From Concept to Market Leader',
      category: 'gtm',
      client: 'TechStart Ethiopia',
      industry: 'Technology',
      challenge: 'A promising fintech startup needed to launch their mobile payment solution in Ethiopia\'s competitive market while navigating regulatory requirements.',
      solution: 'Developed comprehensive go-to-market strategy including regulatory compliance roadmap, customer acquisition framework, and partnership strategy with local banks.',
      results: [
        '250% increase in user acquisition within 6 months',
        'Successfully obtained all required licenses',
        'Partnerships with 12 major Ethiopian banks',
        '$2.5M Series A funding secured'
      ],
      duration: '8 months',
      image: 'https://readdy.ai/api/search-image?query=Ethiopian%20fintech%20mobile%20payment%20application%20interface%20on%20smartphone%20with%20modern%20banking%20dashboard%2C%20clean%20professional%20design%20showing%20financial%20transactions%20and%20digital%20payments%2C%20contemporary%20mobile%20app%20UI%20with%20Ethiopian%20context%20and%20professional%20lighting&width=600&height=400&seq=case1&orientation=landscape',
      testimonial: 'InHub\'s strategic guidance was instrumental in our successful market entry. Their deep understanding of the Ethiopian market dynamics helped us avoid costly mistakes and accelerate our growth.',
      clientName: 'Alemayehu Tadesse',
      clientRole: 'CEO, TechStart Ethiopia'
    },
    {
      id: 2,
      title: 'Green Manufacturing Co: Digital Transformation Journey',
      category: 'digital',
      client: 'Green Manufacturing Co',
      industry: 'Manufacturing',
      challenge: 'Traditional manufacturing company needed to modernize operations and implement Industry 4.0 technologies to remain competitive.',
      solution: 'Designed phased digital transformation roadmap including IoT implementation, process automation, and data analytics integration.',
      results: [
        '40% reduction in production costs',
        '60% improvement in operational efficiency',
        '25% decrease in waste generation',
        'ISO 14001 certification achieved'
      ],
      duration: '12 months',
      image: 'https://readdy.ai/api/search-image?query=Modern%20Ethiopian%20manufacturing%20facility%20with%20digital%20displays%20showing%20production%20analytics%20and%20IoT%20sensors%2C%20workers%20using%20tablets%20and%20digital%20interfaces%2C%20contemporary%20industrial%20setting%20with%20green%20technology%20integration%20and%20professional%20lighting&width=600&height=400&seq=case2&orientation=landscape',
      testimonial: 'The transformation exceeded our expectations. InHub helped us not just adopt new technologies, but fundamentally reimagine how we operate.',
      clientName: 'Dr. Meron Bekele',
      clientRole: 'Operations Director, Green Manufacturing Co'
    },
    {
      id: 3,
      title: 'AgriTech Solutions: Innovation Strategy Implementation',
      category: 'innovation',
      client: 'AgriTech Solutions',
      industry: 'Agriculture',
      challenge: 'Agricultural technology company needed to develop innovative solutions for smallholder farmers while building sustainable business model.',
      solution: 'Created innovation framework focusing on user-centered design, developed minimum viable products, and established farmer feedback loops.',
      results: [
        '15,000 farmers onboarded to platform',
        '30% increase in crop yields for users',
        '3 patent applications filed',
        'Expansion to 4 additional regions'
      ],
      duration: '10 months',
      image: 'https://readdy.ai/api/search-image?query=Ethiopian%20farmers%20using%20modern%20agricultural%20technology%20tablets%20and%20mobile%20apps%20in%20green%20farm%20fields%2C%20drone%20technology%20for%20crop%20monitoring%2C%20contemporary%20agritech%20solutions%20with%20traditional%20farming%20landscape%2C%20professional%20documentation%20style%20with%20natural%20lighting&width=600&height=400&seq=case3&orientation=landscape',
      testimonial: 'InHub\'s innovation methodology helped us create solutions that truly serve our farmers. The impact on crop yields and farmer livelihoods has been remarkable.',
      clientName: 'Dawit Hailu',
      clientRole: 'Founder, AgriTech Solutions'
    },
    {
      id: 4,
      title: 'EduCorp International: Growth Strategy Execution',
      category: 'growth',
      client: 'EduCorp International',
      industry: 'Education',
      challenge: 'Educational services company wanted to scale from regional to national presence while maintaining quality standards.',
      solution: 'Developed multi-phase growth strategy including market analysis, operational scaling framework, and quality assurance systems.',
      results: [
        'Expanded from 3 to 15 cities',
        '400% increase in student enrollment',
        'Maintained 95% student satisfaction rate',
        'Successfully raised $5M growth capital'
      ],
      duration: '14 months',
      image: 'https://readdy.ai/api/search-image?query=Modern%20Ethiopian%20educational%20center%20with%20students%20using%20laptops%20and%20interactive%20learning%20technology%2C%20contemporary%20classroom%20setting%20with%20digital%20whiteboards%20and%20collaborative%20learning%20spaces%2C%20professional%20educational%20environment%20with%20natural%20lighting&width=600&height=400&seq=case4&orientation=landscape',
      testimonial: 'InHub\'s growth strategy enabled us to scale rapidly without compromising on our educational quality. Their systematic approach was exactly what we needed.',
      clientName: 'Prof. Sara Wolde',
      clientRole: 'CEO, EduCorp International'
    },
    {
      id: 5,
      title: 'RetailMax: Business Model Innovation',
      category: 'strategy',
      client: 'RetailMax',
      industry: 'Retail',
      challenge: 'Traditional retailer needed to compete with e-commerce while leveraging physical store advantages in omnichannel strategy.',
      solution: 'Redesigned business model to integrate online and offline channels, implemented customer data platform, and optimized supply chain.',
      results: [
        '180% increase in online sales',
        '45% improvement in customer retention',
        '35% reduction in inventory costs',
        'Successful launch of mobile app with 50K downloads'
      ],
      duration: '9 months',
      image: 'https://readdy.ai/api/search-image?query=Modern%20Ethiopian%20retail%20store%20with%20integrated%20digital%20displays%20and%20mobile%20payment%20systems%2C%20customers%20using%20smartphones%20for%20shopping%2C%20contemporary%20retail%20environment%20blending%20traditional%20and%20digital%20commerce%2C%20professional%20retail%20photography%20with%20good%20lighting&width=600&height=400&seq=case5&orientation=landscape',
      testimonial: 'The business model transformation helped us not just survive the digital disruption, but thrive in it. Our customers love the seamless experience.',
      clientName: 'Henok Girma',
      clientRole: 'Managing Director, RetailMax'
    },
    {
      id: 6,
      title: 'HealthTech Innovations: Market Entry Strategy',
      category: 'gtm',
      client: 'HealthTech Innovations',
      industry: 'Healthcare',
      challenge: 'Medical device startup needed to navigate complex healthcare regulations and establish trust with medical professionals.',
      solution: 'Developed regulatory compliance strategy, medical professional engagement program, and evidence-based marketing approach.',
      results: [
        'FDA and Ethiopian FDA approvals obtained',
        'Partnerships with 25 hospitals established',
        '90% physician adoption rate in pilot programs',
        'Featured in 3 major medical conferences'
      ],
      duration: '11 months',
      image: 'https://readdy.ai/api/search-image?query=Ethiopian%20medical%20professionals%20using%20advanced%20healthcare%20technology%20and%20medical%20devices%20in%20modern%20hospital%20setting%2C%20doctors%20with%20tablets%20and%20medical%20equipment%2C%20contemporary%20healthcare%20environment%20with%20professional%20medical%20atmosphere%20and%20clean%20lighting&width=600&height=400&seq=case6&orientation=landscape',
      testimonial: 'InHub\'s expertise in healthcare market entry was invaluable. They helped us build credibility and trust with the medical community from day one.',
      clientName: 'Dr. Rahel Teshome',
      clientRole: 'CEO, HealthTech Innovations'
    }
  ];

  const filteredCases = activeFilter === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === activeFilter);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-20 text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(31, 61, 58, 0.8), rgba(31, 61, 58, 0.8)), url('https://readdy.ai/api/search-image?query=Ethiopian%20business%20professionals%20celebrating%20success%20in%20modern%20boardroom%20with%20charts%20showing%20growth%20metrics%20and%20achievement%20graphs%2C%20contemporary%20corporate%20environment%20with%20laptops%20and%20presentation%20materials%2C%20professional%20atmosphere%20showcasing%20business%20transformation%20and%20innovation%20success&width=1920&height=600&seq=casehero&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Success Stories</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover how we've helped Ethiopian businesses transform, grow, and achieve remarkable results through strategic innovation
          </p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#1F3D3A] mb-2">150+</div>
              <div className="text-gray-600">Successful Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#1F3D3A] mb-2">$50M+</div>
              <div className="text-gray-600">Client Revenue Generated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#1F3D3A] mb-2">95%</div>
              <div className="text-gray-600">Client Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#1F3D3A] mb-2">3.2x</div>
              <div className="text-gray-600">Average ROI Increase</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-[#1F3D3A] mb-4">Featured Case Studies</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real transformations, measurable results, lasting impact
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-full transition-colors whitespace-nowrap cursor-pointer ${
                  activeFilter === category.id
                    ? 'bg-[#1F3D3A] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            {filteredCases.map((study, index) => (
              <div key={study.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div 
                    className="h-96 rounded-2xl"
                    style={{
                      backgroundImage: `url('${study.image}')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  ></div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="flex items-center mb-4">
                    <span className="px-3 py-1 bg-[#1F3D3A]/10 text-[#1F3D3A] rounded-full text-sm font-medium mr-4">
                      {study.industry}
                    </span>
                    <span className="text-gray-500 text-sm">{study.duration}</span>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-[#1F3D3A] mb-4">{study.title}</h3>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-2">Challenge:</h4>
                    <p className="text-gray-600 mb-4">{study.challenge}</p>
                    
                    <h4 className="font-semibold text-gray-800 mb-2">Solution:</h4>
                    <p className="text-gray-600 mb-4">{study.solution}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Key Results:</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center text-gray-600">
                          <i className="ri-check-line text-green-500 mr-2"></i>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <p className="text-gray-700 italic mb-4">"{study.testimonial}"</p>
                    <div className="flex items-center">
                      <div>
                        <div className="font-semibold text-[#1F3D3A]">{study.clientName}</div>
                        <div className="text-gray-600 text-sm">{study.clientRole}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1F3D3A] mb-4">Our Proven Methodology</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A systematic approach that consistently delivers transformational results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Deep Discovery',
                description: 'Comprehensive analysis of your business, market, and competitive landscape'
              },
              {
                step: '02',
                title: 'Strategic Design',
                description: 'Custom strategy development based on data-driven insights and best practices'
              },
              {
                step: '03',
                title: 'Collaborative Implementation',
                description: 'Hands-on execution support with your team to ensure successful deployment'
              },
              {
                step: '04',
                title: 'Continuous Optimization',
                description: 'Ongoing monitoring, measurement, and refinement for sustained success'
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#1F3D3A] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-[#1F3D3A] mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1F3D3A] mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Deep expertise across key sectors driving Ethiopia's economic growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: 'ri-smartphone-line',
                title: 'Technology & Fintech',
                description: 'Digital platforms, mobile payments, and software solutions',
                projects: '35+ Projects'
              },
              {
                icon: 'ri-hospital-line',
                title: 'Healthcare & Biotech',
                description: 'Medical devices, health services, and pharmaceutical innovations',
                projects: '22+ Projects'
              },
              {
                icon: 'ri-plant-line',
                title: 'Agriculture & Food',
                description: 'AgTech solutions, food processing, and supply chain optimization',
                projects: '28+ Projects'
              },
              {
                icon: 'ri-graduation-cap-line',
                title: 'Education & Training',
                description: 'EdTech platforms, skill development, and educational services',
                projects: '18+ Projects'
              },
              {
                icon: 'ri-store-line',
                title: 'Retail & E-commerce',
                description: 'Omnichannel retail, marketplace platforms, and consumer goods',
                projects: '25+ Projects'
              },
              {
                icon: 'ri-settings-line',
                title: 'Manufacturing & Industrial',
                description: 'Process optimization, automation, and Industry 4.0 transformation',
                projects: '22+ Projects'
              }
            ].map((industry, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 flex items-center justify-center bg-[#1F3D3A]/10 rounded-2xl mb-6">
                  <i className={`${industry.icon} text-2xl text-[#1F3D3A]`}></i>
                </div>
                <h3 className="text-xl font-bold text-[#1F3D3A] mb-3">{industry.title}</h3>
                <p className="text-gray-600 mb-4">{industry.description}</p>
                <div className="text-sm font-semibold text-green-600">{industry.projects}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1F3D3A]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Write Your Success Story?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Join the growing list of Ethiopian businesses that have transformed their operations and achieved remarkable growth with InHub.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 transition-colors whitespace-nowrap cursor-pointer">
              Start Your Transformation
            </Link>
            <Link href="/diagnosis" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-[#1F3D3A] transition-colors whitespace-nowrap cursor-pointer">
              Free Business Assessment
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}