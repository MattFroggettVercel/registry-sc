"use client";

import { Search, Phone, ChevronDown, User, ShoppingCart } from "lucide-react";

export function BrandHeader() {
  return (
    <header className="bg-white shadow-sm font-sans">
      <div className="border-t-2 border-red-600">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center">
              <div className="bg-red-600 rounded-full w-8 h-8 flex items-center justify-center">
                <span className="text-white font-bold text-lg">s</span>
              </div>
              <span className="text-red-600 font-bold text-2xl ml-2">sana</span>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-xl mx-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search on product name or article number"
                  className="w-full border border-gray-300 rounded-md py-2 pl-4 pr-12 text-sm focus:ring-blue-500 focus:border-blue-500"
                />
                <button className="absolute inset-y-0 right-0 flex items-center justify-center bg-blue-600 text-white w-10 h-full rounded-r-md hover:bg-blue-700">
                  <Search size={20} />
                </button>
              </div>
            </div>

            {/* Utility Nav */}
            <div className="flex items-center space-x-6 text-sm text-gray-700">
              <div className="flex items-center space-x-1 cursor-pointer hover:text-blue-600">
                <Phone size={16} />
                <span>Questions? Call us</span>
                <ChevronDown size={16} />
              </div>
              <div className="flex items-center space-x-1 cursor-pointer hover:text-blue-600">
                <User size={16} />
                <ChevronDown size={16} />
              </div>
              <div className="flex items-center space-x-2 cursor-pointer hover:text-blue-600">
                <ShoppingCart size={16} />
                <span>0 product(s)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-gray-50 border-t border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-8 h-12">
            <a
              href="#"
              className="text-gray-800 hover:text-blue-600 text-sm font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-blue-600 text-sm font-medium"
            >
              Catalog
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-blue-600 text-sm font-medium"
            >
              Content
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-blue-600 text-sm font-medium"
            >
              Blog
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-blue-600 text-sm font-medium"
            >
              Contact us
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
