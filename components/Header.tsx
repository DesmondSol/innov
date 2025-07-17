'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-[#1F3D3A]" style={{ fontFamily: '"Pacifico", serif' }}>
            InHub
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/services" className="text-gray-700 hover:text-[#1F3D3A] transition-colors">
              Services
            </Link>
            <Link href="/case-studies" className="text-gray-700 hover:text-[#1F3D3A] transition-colors">
              Case Studies
            </Link>
            <Link href="/warehouse" className="text-gray-700 hover:text-[#1F3D3A] transition-colors">
              Warehouse
            </Link>
            <Link href="/diagnosis" className="text-gray-700 hover:text-[#1F3D3A] transition-colors">
              Diagnosis
            </Link>
            <Link href="/skills" className="text-gray-700 hover:text-[#1F3D3A] transition-colors">
              InHub Skills
            </Link>
            <Link href="/design" className="text-gray-700 hover:text-[#1F3D3A] transition-colors">
              InHub Design
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-[#1F3D3A] transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-[#1F3D3A] transition-colors">
              Contact
            </Link>
            <Link href="/contact" className="bg-[#1F3D3A] text-white px-6 py-2 rounded-full hover:bg-[#2a5248] transition-colors whitespace-nowrap cursor-pointer">
              Get Started
            </Link>
          </nav>

          <button 
            className="lg:hidden w-6 h-6 flex items-center justify-center cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
          </button>
        </div>

        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
            <div className="flex flex-col space-y-4">
              <Link href="/services" className="text-gray-700 hover:text-[#1F3D3A] transition-colors">
                Services
              </Link>
              <Link href="/case-studies" className="text-gray-700 hover:text-[#1F3D3A] transition-colors">
                Case Studies
              </Link>
              <Link href="/warehouse" className="text-gray-700 hover:text-[#1F3D3A] transition-colors">
                Warehouse
              </Link>
              <Link href="/diagnosis" className="text-gray-700 hover:text-[#1F3D3A] transition-colors">
                Diagnosis
              </Link>
              <Link href="/skills" className="text-gray-700 hover:text-[#1F3D3A] transition-colors">
                InHub Skills
              </Link>
              <Link href="/design" className="text-gray-700 hover:text-[#1F3D3A] transition-colors">
                InHub Design
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-[#1F3D3A] transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-[#1F3D3A] transition-colors">
                Contact
              </Link>
              <Link href="/contact" className="bg-[#1F3D3A] text-white px-6 py-2 rounded-full hover:bg-[#2a5248] transition-colors whitespace-nowrap cursor-pointer inline-block text-center">
                Get Started
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}