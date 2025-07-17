'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#1F3D3A] text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold mb-4" style={{ fontFamily: '"Pacifico", serif' }}>
              InHub
            </div>
            <p className="text-gray-300 mb-4">
              Ethiopia's leading innovation hub providing comprehensive business solutions and talent marketplace.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 transition-colors cursor-pointer">
                <i className="ri-linkedin-fill text-lg"></i>
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 transition-colors cursor-pointer">
                <i className="ri-twitter-fill text-lg"></i>
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 transition-colors cursor-pointer">
                <i className="ri-facebook-fill text-lg"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors">Go-To-Market Strategy</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors">Growth Strategy</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors">Innovation Strategy</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors">Business Logic Development</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors">Product Development</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/warehouse" className="text-gray-300 hover:text-white transition-colors">Assessment Tools</Link></li>
              <li><Link href="/warehouse" className="text-gray-300 hover:text-white transition-colors">Innovation Frameworks</Link></li>
              <li><Link href="/warehouse" className="text-gray-300 hover:text-white transition-colors">Playbooks</Link></li>
              <li><Link href="/warehouse" className="text-gray-300 hover:text-white transition-colors">Webinars</Link></li>
              <li><Link href="/warehouse" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/case-studies" className="text-gray-300 hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link href="/skills" className="text-gray-300 hover:text-white transition-colors">InHub Skills</Link></li>
              <li><Link href="/design" className="text-gray-300 hover:text-white transition-colors">InHub Design</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 InHub Ethiopia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}