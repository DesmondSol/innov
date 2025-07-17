'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      icon: 'ri-rocket-line',
      title: 'Go-To-Market Strategy',
      description: 'Launch your products with precision-crafted market entry strategies that maximize impact and minimize risk.',
      features: [
        'Market research and analysis',
        'Customer persona development',
        'Competitive positioning',
        'Launch timeline and milestones',
        'Performance metrics and KPIs'
      ],
      price: 'Starting from $2,500'
    },
    {
      icon: 'ri-line-chart-line',
      title: 'Growth Strategy',
      description: 'Scale your business with data-driven growth frameworks tailored to Ethiopian and global markets.',
      features: [
        'Growth opportunity identification',
        'Market expansion planning',
        'Revenue optimization',
        'Customer acquisition strategies',
        'Scalability assessment'
      ],
      price: 'Starting from $3,000'
    },
    {
      icon: 'ri-lightbulb-line',
      title: 'Innovation Strategy',
      description: 'Transform your organization with cutting-edge innovation methodologies and future-focused thinking.',
      features: [
        'Innovation audit and assessment',
        'Technology roadmap development',
        'Innovation culture building',
        'R&D strategy formulation',
        'Digital transformation planning'
      ],
      price: 'Starting from $4,000'
    },
    {
      icon: 'ri-settings-line',
      title: 'Business Logic Development',
      description: 'Build robust business models with clear value propositions and sustainable competitive advantages.',
      features: [
        'Business model canvas creation',
        'Value proposition design',
        'Revenue stream optimization',
        'Cost structure analysis',
        'Partnership strategy'
      ],
      price: 'Starting from $2,000'
    },
    {
      icon: 'ri-product-hunt-line',
      title: 'Product Development',
      description: 'From concept to market with comprehensive product development and validation processes.',
      features: [
        'Product ideation and validation',
        'Prototype development',
        'User testing and feedback',
        'Product-market fit analysis',
        'Launch support'
      ],
      price: 'Starting from $5,000'
    },
    {
      icon: 'ri-customer-service-line',
      title: 'Service Development',
      description: 'Design and optimize service offerings that delight customers and drive business growth.',
      features: [
        'Service design methodology',
        'Customer journey mapping',
        'Service blueprint creation',
        'Quality assurance frameworks',
        'Performance optimization'
      ],
      price: 'Starting from $2,500'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-20 text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(31, 61, 58, 0.9), rgba(31, 61, 58, 0.9)), url('https://readdy.ai/api/search-image?query=Professional%20Ethiopian%20business%20consultants%20presenting%20strategy%20documents%20and%20innovation%20frameworks%20in%20a%20modern%20boardroom%2C%20laptops%20and%20presentation%20screens%2C%20contemporary%20office%20setting%20with%20strategic%20planning%20materials%2C%20collaborative%20business%20environment%20showcasing%20expertise%20and%20professionalism&width=1920&height=600&seq=services1&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Innovation Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive business solutions designed to accelerate your growth and transform your organization with proven methodologies.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 flex items-center justify-center bg-[#1F3D3A]/10 rounded-2xl mr-6 flex-shrink-0">
                    <i className={`${service.icon} text-2xl text-[#1F3D3A]`}></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#1F3D3A] mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-[#1F3D3A] mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <i className="ri-check-line text-green-500 mr-2"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <div className="text-2xl font-bold text-[#1F3D3A]">{service.price}</div>
                  <Link href="/contact" className="bg-[#1F3D3A] text-white px-6 py-3 rounded-full hover:bg-[#2a5248] transition-colors whitespace-nowrap cursor-pointer">
                    Request Plan
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1F3D3A] mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology that delivers results through strategic thinking and execution excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'Deep dive into your business, market, and challenges'
              },
              {
                step: '02',
                title: 'Strategy',
                description: 'Develop tailored solutions and actionable roadmaps'
              },
              {
                step: '03',
                title: 'Implementation',
                description: 'Execute strategies with ongoing support and guidance'
              },
              {
                step: '04',
                title: 'Optimization',
                description: 'Monitor, measure, and continuously improve performance'
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#1F3D3A] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-[#1F3D3A] mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1F3D3A]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Book a consultation to discuss your specific needs and get a custom plan tailored to your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 transition-colors whitespace-nowrap cursor-pointer">
              Book Consultation
            </Link>
            <Link href="/diagnosis" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-[#1F3D3A] transition-colors whitespace-nowrap cursor-pointer">
              Start Free Diagnosis
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}