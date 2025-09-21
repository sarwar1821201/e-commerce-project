import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-gray-300 py-12 px-6 lg:px-12">
  <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">

    <div>
      <div className="mb-4">
        <svg className="w-8 h-8 text-indigo-500" fill="currentColor" viewBox="0 0 24 24">
          
          <path d="M5 3L19 12L5 21V3Z" />
        </svg>
      </div>
      <p className="text-gray-400 text-sm mb-4">
        Making the world a better place through constructing elegant hierarchies.
      </p>
      <div className="flex space-x-3">
        <a href="#" className="hover:text-white"><i className="fab fa-facebook-f"></i></a>
        <a href="#" className="hover:text-white"><i className="fab fa-instagram"></i></a>
        <a href="#" className="hover:text-white"><i className="fab fa-x-twitter"></i></a>
        <a href="#" className="hover:text-white"><i className="fab fa-github"></i></a>
        <a href="#" className="hover:text-white"><i className="fab fa-youtube"></i></a>
      </div>
    </div>

    {/* Links: Solutions */}
    <div>
      <h4 className="text-white font-semibold mb-3">Solutions</h4>
      <ul className="space-y-2 text-gray-400 text-sm">
        <li><a href="#" className="hover:text-white">Marketing</a></li>
        <li><a href="#" className="hover:text-white">Analytics</a></li>
        <li><a href="#" className="hover:text-white">Automation</a></li>
        <li><a href="#" className="hover:text-white">Commerce</a></li>
        <li><a href="#" className="hover:text-white">Insights</a></li>
      </ul>
    </div>

    {/* Links: Support */}
    <div>
      <h4 className="text-white font-semibold mb-3">Support</h4>
      <ul className="space-y-2 text-gray-400 text-sm">
        <li><a href="#" className="hover:text-white">Submit ticket</a></li>
        <li><a href="#" className="hover:text-white">Documentation</a></li>
        <li><a href="#" className="hover:text-white">Guides</a></li>
      </ul>
    </div>

    {/* Links: Company */}
    <div>
      <h4 className="text-white font-semibold mb-3">Company</h4>
      <ul className="space-y-2 text-gray-400 text-sm">
        <li><a href="#" className="hover:text-white">About</a></li>
        <li><a href="#" className="hover:text-white">Blog</a></li>
        <li><a href="#" className="hover:text-white">Jobs</a></li>
        <li><a href="#" className="hover:text-white">Press</a></li>
      </ul>
    </div>

    {/* Links: Legal */}
    <div>
      <h4 className="text-white font-semibold mb-3">Legal</h4>
      <ul className="space-y-2 text-gray-400 text-sm">
        <li><a href="#" className="hover:text-white">Terms of service</a></li>
        <li><a href="#" className="hover:text-white">Privacy policy</a></li>
        <li><a href="#" className="hover:text-white">License</a></li>
      </ul>
    </div>
  </div>

  {/* Footer Bottom */}
  <div className="border-t border-gray-700 mt-8 pt-6 text-gray-500 text-sm text-center">
    © 2025 Your Company, Inc. All rights reserved.
  </div>
</footer>

    </div>
  )
}

export default Footer