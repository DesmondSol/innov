'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { useState } from 'react';

type Project = {
  id: number;
  title: string;
  category: string;
  type: string;
  client: string;
  year: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
  tags: string[];
};


export default function DesignPage() {




  const [activePortfolioTab, setActivePortfolioTab] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const portfolioCategories = [
    { id: 'all', name: 'All Projects' },
    { id: 'uiux', name: 'UI/UX Design' },
    { id: 'branding', name: 'Brand Identity' },
    { id: 'industrial', name: 'Industrial Design' },
    { id: 'web', name: 'Web Design' },
    { id: 'mobile', name: 'Mobile Apps' }
  ];

  const projects = [
    {
      id: 1,
      title: 'EthioBank Mobile Banking App',
      category: 'uiux',
      type: 'UI/UX Design',
      client: 'EthioBank',
      year: '2024',
      description: 'Complete redesign of mobile banking experience with focus on Ethiopian user needs and financial behaviors.',
      challenge: 'Create intuitive banking interface for users with varying digital literacy levels while ensuring security and compliance.',
      solution: 'Developed progressive disclosure UI with visual cues, local language support, and simplified transaction flows.',
      results: [
        '85% increase in mobile app adoption',
        '60% reduction in customer support calls',
        '95% user satisfaction rating',
        'Winner of African Mobile Banking Design Award'
      ],
      image: 'https://readdy.ai/api/search-image?query=Modern%20Ethiopian%20mobile%20banking%20app%20interface%20design%20showing%20clean%20dashboard%20with%20financial%20transactions%20and%20balance%20information%2C%20professional%20UI%2FUX%20design%20with%20contemporary%20visual%20elements%20and%20user-friendly%20navigation%2C%20smartphone%20mockup%20with%20Ethiopian%20banking%20context&width=600&height=400&seq=design1&orientation=landscape',
      tags: ['Mobile Design', 'Fintech', 'User Research', 'Accessibility']
    },
    {
      id: 2,
      title: 'Addis Coffee Brand Identity',
      category: 'branding',
      type: 'Brand Identity',
      client: 'Addis Coffee Co.',
      year: '2024',
      description: 'Complete brand identity system for premium Ethiopian coffee export company targeting international markets.',
      challenge: 'Balance authentic Ethiopian coffee heritage with modern international appeal for global market penetration.',
      solution: 'Created sophisticated brand system celebrating Ethiopian coffee culture with contemporary design language.',
      results: [
        'Successful launch in 15 international markets',
        '200% increase in premium product sales',
        'Featured in International Design Awards',
        'Brand recognition increased by 300%'
      ],
      image: 'https://readdy.ai/api/search-image?query=Premium%20Ethiopian%20coffee%20brand%20identity%20design%20showing%20elegant%20packaging%2C%20logo%20design%2C%20and%20brand%20materials%20with%20sophisticated%20typography%20and%20Ethiopian%20coffee%20cultural%20elements%2C%20professional%20brand%20identity%20showcase%20with%20coffee%20beans%20and%20modern%20packaging%20design&width=600&height=400&seq=design2&orientation=landscape',
      tags: ['Brand Identity', 'Packaging', 'Export', 'Cultural Design']
    },
    {
      id: 3,
      title: 'Smart Agriculture IoT Dashboard',
      category: 'web',
      type: 'Web Design',
      client: 'AgriTech Solutions',
      year: '2024',
      description: 'Comprehensive web dashboard for IoT-enabled smart farming solutions targeting Ethiopian agricultural sector.',
      challenge: 'Design complex agricultural data visualization that farmers and agronomists can easily understand and act upon.',
      solution: 'Developed intuitive dashboard with real-time monitoring, predictive analytics, and actionable insights.',
      results: [
        '40% improvement in crop management efficiency',
        'Adoption by 500+ commercial farms',
        '25% reduction in water usage',
        'Best AgTech Design Award 2024'
      ],
      image: 'https://readdy.ai/api/search-image?query=Modern%20agricultural%20IoT%20dashboard%20interface%20showing%20farm%20monitoring%20data%2C%20charts%2C%20and%20analytics%20on%20laptop%20screen%2C%20clean%20web%20design%20with%20data%20visualization%20for%20smart%20farming%2C%20contemporary%20dashboard%20with%20Ethiopian%20agricultural%20context%20and%20professional%20presentation&width=600&height=400&seq=design3&orientation=landscape',
      tags: ['Dashboard Design', 'Data Visualization', 'IoT', 'Agriculture']
    },
    {
      id: 4,
      title: 'Traditional Coffee Maker Redesign',
      category: 'industrial',
      type: 'Industrial Design',
      client: 'Heritage Appliances',
      year: '2024',
      description: 'Modern interpretation of traditional Ethiopian coffee brewing equipment for contemporary kitchens.',
      challenge: 'Preserve authentic coffee ceremony experience while creating modern appliance for international markets.',
      solution: 'Innovative design blending traditional clay pot aesthetics with modern materials and brewing technology.',
      results: [
        'CES Innovation Award winner',
        'Pre-orders exceeded 10,000 units',
        'Licensed to 3 major appliance manufacturers',
        'Featured in international design museums'
      ],
      image: 'https://readdy.ai/api/search-image?query=Modern%20Ethiopian%20coffee%20maker%20industrial%20design%20product%20photography%20showing%20sleek%20contemporary%20appliance%20inspired%20by%20traditional%20clay%20coffee%20pots%2C%20professional%20product%20design%20with%20clean%20lines%20and%20cultural%20heritage%20elements%2C%20studio%20lighting%20on%20clean%20background&width=600&height=400&seq=design4&orientation=landscape',
      tags: ['Product Design', 'Cultural Heritage', 'Innovation', 'Manufacturing']
    },
    {
      id: 5,
      title: 'EduTech Learning Platform',
      category: 'mobile',
      type: 'Mobile App',
      client: 'LearnEthio',
      year: '2024',
      description: 'Mobile-first educational platform designed for Ethiopian students with offline capabilities and local content.',
      challenge: 'Create engaging learning experience that works with limited internet connectivity and diverse learning styles.',
      solution: 'Gamified learning interface with offline content sync, progress tracking, and culturally relevant educational content.',
      results: [
        '50,000+ active student users',
        '78% improvement in learning outcomes',
        'Partnerships with 200+ schools',
        'UNESCO Digital Learning Recognition'
      ],
      image: 'https://readdy.ai/api/search-image?query=Ethiopian%20educational%20mobile%20app%20interface%20design%20showing%20engaging%20learning%20modules%20and%20student%20progress%20tracking%2C%20colorful%20and%20intuitive%20mobile%20UI%20design%20with%20educational%20content%20and%20gamification%20elements%2C%20smartphone%20mockup%20with%20Ethiopian%20educational%20context&width=600&height=400&seq=design5&orientation=landscape',
      tags: ['Educational Design', 'Mobile UI', 'Gamification', 'Offline-First']
    },
    {
      id: 6,
      title: 'Healthcare Telemedicine Platform',
      category: 'uiux',
      type: 'UI/UX Design',
      client: 'TeleMed Ethiopia',
      year: '2024',
      description: 'Comprehensive telemedicine platform connecting rural patients with urban healthcare providers.',
      challenge: 'Design healthcare interface that works for users with limited digital experience while maintaining medical accuracy.',
      solution: 'Simple, icon-based interface with voice navigation and multi-language support for accessible healthcare delivery.',
      results: [
        '15,000+ patients connected to healthcare',
        '90% patient satisfaction rate',
        '50% reduction in travel for medical care',
        'WHO Digital Health Innovation Award'
      ],
      image: 'https://readdy.ai/api/search-image?query=Ethiopian%20telemedicine%20platform%20interface%20design%20showing%20doctor-patient%20video%20consultation%20and%20health%20monitoring%20dashboard%2C%20professional%20healthcare%20UI%20design%20with%20medical%20information%20and%20communication%20tools%2C%20clean%20modern%20interface%20for%20healthcare%20delivery&width=600&height=400&seq=design6&orientation=landscape',
      tags: ['Healthcare Design', 'Telemedicine', 'Accessibility', 'Rural Healthcare']
    }
  ];

  const services = [
    {
      icon: 'ri-smartphone-line',
      title: 'UI/UX Design',
      description: 'User-centered design for web and mobile applications that deliver exceptional user experiences.',
      features: [
        'User research and persona development',
        'Information architecture and wireframing',
        'Interactive prototyping and testing',
        'Design system creation',
        'Usability testing and optimization'
      ],
      deliverables: 'Wireframes, Prototypes, Design Systems, User Testing Reports',
      timeline: '4-8 weeks',
      pricing: 'Starting from $3,500'
    },
    {
      icon: 'ri-palette-line',
      title: 'Brand Identity Design',
      description: 'Comprehensive brand identity systems that capture your essence and resonate with your audience.',
      features: [
        'Brand strategy and positioning',
        'Logo design and visual identity',
        'Brand guidelines and standards',
        'Packaging and collateral design',
        'Brand application across touchpoints'
      ],
      deliverables: 'Logo Suite, Brand Guidelines, Stationery, Marketing Materials',
      timeline: '3-6 weeks',
      pricing: 'Starting from $2,500'
    },
    {
      icon: 'ri-tools-line',
      title: 'Industrial Design',
      description: 'Innovative product design combining functionality, aesthetics, and manufacturability.',
      features: [
        'Concept development and ideation',
        '3D modeling and visualization',
        'Prototyping and testing',
        'Manufacturing consultation',
        'Regulatory compliance support'
      ],
      deliverables: '3D Models, Technical Drawings, Prototypes, Manufacturing Specs',
      timeline: '8-16 weeks',
      pricing: 'Starting from $8,000'
    },
    {
      icon: 'ri-computer-line',
      title: 'Web Design',
      description: 'Modern, responsive websites that engage users and drive business results.',
      features: [
        'Responsive design for all devices',
        'Performance optimization',
        'SEO-friendly architecture',
        'Content management systems',
        'E-commerce integration'
      ],
      deliverables: 'Website Design, Development, CMS Setup, Training',
      timeline: '6-12 weeks',
      pricing: 'Starting from $4,500'
    }
  ];

  const filteredProjects = activePortfolioTab === 'all'
    ? projects
    : projects.filter(project => project.category === activePortfolioTab);

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(31, 61, 58, 0.8), rgba(31, 61, 58, 0.8)), url('https://readdy.ai/api/search-image?query=Ethiopian%20creative%20design%20studio%20with%20designers%20working%20on%20UI%2FUX%20projects%20and%20brand%20identity%20designs%2C%20modern%20creative%20workspace%20with%20design%20tools%2C%20multiple%20monitors%20showing%20design%20work%2C%20contemporary%20office%20environment%20with%20creative%20materials%20and%20professional%20atmosphere&width=1920&height=1080&seq=designhero&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            InHub <span className="text-green-400">Design</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
            Ethiopia's premier creative studio specializing in UI/UX design, brand identity, and industrial design innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#portfolio" className="bg-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 transition-colors whitespace-nowrap cursor-pointer">
              View Portfolio
            </Link>
            <Link href="/contact" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-[#1F3D3A] transition-colors whitespace-nowrap cursor-pointer">
              Start Project
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1F3D3A] mb-4">Design Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive design solutions from concept to execution
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 flex items-center justify-center bg-[#1F3D3A]/10 rounded-2xl mr-6 flex-shrink-0">
                    <i className={`${service.icon} text-2xl text-[#1F3D3A]`}></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#1F3D3A] mb-3">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-[#1F3D3A] mb-3">Service Includes:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <i className="ri-check-line text-green-500 mr-2"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3 mb-6 text-sm">
                  <div><span className="font-medium text-[#1F3D3A]">Deliverables:</span> {service.deliverables}</div>
                  <div><span className="font-medium text-[#1F3D3A]">Timeline:</span> {service.timeline}</div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <div className="text-2xl font-bold text-[#1F3D3A]">{service.pricing}</div>
                  <Link href="/contact" className="bg-[#1F3D3A] text-white px-6 py-3 rounded-full hover:bg-[#2a5248] transition-colors whitespace-nowrap cursor-pointer">
                    Get Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1F3D3A] mb-4">Featured Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Award-winning designs that drive business success and user delight
            </p>
          </div>

          {/* Portfolio Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {portfolioCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActivePortfolioTab(category.id)}
                className={`px-6 py-3 rounded-full transition-colors whitespace-nowrap cursor-pointer ${activePortfolioTab === category.id
                  ? 'bg-[#1F3D3A] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div
                  className="h-48 bg-gray-200"
                  style={{
                    backgroundImage: `url('${project.image}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                ></div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-[#1F3D3A]/10 text-[#1F3D3A] rounded-full text-sm font-medium">
                      {project.type}
                    </span>
                    <span className="text-gray-500 text-sm">{project.year}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#1F3D3A] mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 2).map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full bg-[#1F3D3A] text-white py-3 rounded-full hover:bg-[#2a5248] transition-colors whitespace-nowrap cursor-pointer"
                  >
                    View Case Study
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-[#1F3D3A]">{selectedProject.title}</h2>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors cursor-pointer"
                >
                  <i className="ri-close-line text-xl"></i>
                </button>
              </div>

              <div
                className="h-64 rounded-xl mb-6"
                style={{
                  backgroundImage: `url('${selectedProject.image}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              ></div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="mb-6">
                    <h3 className="font-semibold text-[#1F3D3A] mb-2">Project Overview</h3>
                    <p className="text-gray-600">{selectedProject.description}</p>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-semibold text-[#1F3D3A] mb-2">Challenge</h3>
                    <p className="text-gray-600">{selectedProject.challenge}</p>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-semibold text-[#1F3D3A] mb-2">Solution</h3>
                    <p className="text-gray-600">{selectedProject.solution}</p>
                  </div>
                </div>

                <div>
                  <div className="mb-6">
                    <h3 className="font-semibold text-[#1F3D3A] mb-3">Key Results</h3>
                    <ul className="space-y-2">
                      {selectedProject.results.map((result, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <i className="ri-check-line text-green-500 mr-2"></i>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-semibold text-[#1F3D3A] mb-3">Project Details</h3>
                    <div className="space-y-2 text-sm">
                      <div><span className="font-medium">Client:</span> {selectedProject.client}</div>
                      <div><span className="font-medium">Year:</span> {selectedProject.year}</div>
                      <div><span className="font-medium">Type:</span> {selectedProject.type}</div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#1F3D3A] mb-3">Technologies & Tools</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag, index) => (
                        <span key={index} className="px-3 py-1 bg-[#1F3D3A]/10 text-[#1F3D3A] rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-8 pt-6 border-t border-gray-100">
                <Link href="/contact" className="flex-1 bg-[#1F3D3A] text-white py-3 rounded-full text-center hover:bg-[#2a5248] transition-colors whitespace-nowrap cursor-pointer">
                  Start Similar Project
                </Link>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="flex-1 border border-[#1F3D3A] text-[#1F3D3A] py-3 rounded-full hover:bg-[#1F3D3A] hover:text-white transition-colors whitespace-nowrap cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1F3D3A] mb-4">Our Design Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures exceptional results every time
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Research & Discovery',
                description: 'Deep dive into user needs, market research, and competitive analysis',
                icon: 'ri-search-line'
              },
              {
                step: '02',
                title: 'Concept & Ideation',
                description: 'Creative brainstorming, concept development, and initial sketches',
                icon: 'ri-lightbulb-line'
              },
              {
                step: '03',
                title: 'Design & Prototype',
                description: 'Visual design creation, interactive prototypes, and user testing',
                icon: 'ri-pencil-ruler-line'
              },
              {
                step: '04',
                title: 'Refine & Deliver',
                description: 'Final refinements, design system creation, and handoff to development',
                icon: 'ri-rocket-line'
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-[#1F3D3A] text-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className={`${process.icon} text-2xl`}></i>
                </div>
                <div className="text-3xl font-bold text-[#1F3D3A] mb-2">{process.step}</div>
                <h3 className="text-xl font-bold text-[#1F3D3A] mb-3">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1F3D3A] mb-4">Awards & Recognition</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our design excellence recognized by industry leaders worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                award: 'Red Dot Design Award',
                year: '2024',
                category: 'Product Design',
                project: 'Traditional Coffee Maker'
              },
              {
                award: 'African Mobile Banking Design',
                year: '2024',
                category: 'UI/UX Design',
                project: 'EthioBank Mobile App'
              },
              {
                award: 'CES Innovation Award',
                year: '2024',
                category: 'Industrial Design',
                project: 'Smart Coffee Brewer'
              },
              {
                award: 'UNESCO Digital Learning',
                year: '2024',
                category: 'Educational Design',
                project: 'EduTech Platform'
              }
            ].map((award, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-yellow-100 rounded-full mx-auto mb-4">
                  <i className="ri-trophy-line text-2xl text-yellow-600"></i>
                </div>
                <h3 className="font-bold text-[#1F3D3A] mb-2">{award.award}</h3>
                <p className="text-gray-600 text-sm mb-1">{award.category} • {award.year}</p>
                <p className="text-gray-500 text-xs">{award.project}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1F3D3A] mb-4">Meet Our Design Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Talented Ethiopian designers creating world-class experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Selamawit Desta',
                role: 'Creative Director',
                specialties: ['Brand Strategy', 'Visual Identity', 'Creative Direction'],
                experience: '8+ years',
                image: 'https://readdy.ai/api/search-image?query=Professional%20Ethiopian%20female%20creative%20director%20with%20confident%20smile%20in%20modern%20design%20studio%2C%20creative%20professional%20with%20design%20materials%20and%20artistic%20workspace%2C%20contemporary%20portrait%20with%20natural%20lighting%20and%20professional%20atmosphere&width=300&height=300&seq=team1&orientation=squarish'
              },
              {
                name: 'Bereket Haile',
                role: 'Senior UX Designer',
                specialties: ['User Research', 'Interaction Design', 'Prototyping'],
                experience: '6+ years',
                image: 'https://readdy.ai/api/search-image?query=Professional%20Ethiopian%20male%20UX%20designer%20working%20with%20design%20tools%20and%20user%20interface%20sketches%2C%20experienced%20design%20professional%20in%20modern%20creative%20workspace%2C%20contemporary%20professional%20portrait%20with%20clean%20background&width=300&height=300&seq=team2&orientation=squarish'
              },
              {
                name: 'Mahlet Solomon',
                role: 'Industrial Designer',
                specialties: ['Product Design', '3D Modeling', 'Manufacturing'],
                experience: '7+ years',
                image: 'https://readdy.ai/api/search-image?query=Professional%20Ethiopian%20female%20industrial%20designer%20with%203D%20models%20and%20product%20prototypes%2C%20skilled%20design%20professional%20in%20modern%20design%20studio%20with%20creative%20tools%2C%20contemporary%20portrait%20with%20professional%20lighting&width=300&height=300&seq=team3&orientation=squarish'
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-center">
                <div
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                  style={{
                    backgroundImage: `url('${member.image}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                ></div>
                <h3 className="text-xl font-bold text-[#1F3D3A] mb-1">{member.name}</h3>
                <p className="text-gray-600 mb-3">{member.role}</p>
                <p className="text-sm text-gray-500 mb-4">{member.experience} experience</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {member.specialties.map((specialty, specialtyIndex) => (
                    <span key={specialtyIndex} className="px-3 py-1 bg-[#1F3D3A]/10 text-[#1F3D3A] rounded-full text-xs">
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1F3D3A]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Create Something Amazing?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Let's collaborate to bring your vision to life with world-class design that drives results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 transition-colors whitespace-nowrap cursor-pointer">
              Start Your Project
            </Link>
            <Link href="/contact" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-[#1F3D3A] transition-colors whitespace-nowrap cursor-pointer">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}