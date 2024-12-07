import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {/* Who We Are */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Who We Are</h3>
            <ul className="space-y-2">
              <li>About</li>
              <li>Leadership</li>
              <li>Partners</li>
              <li>Press Releases</li>
              <li>Awards</li>
              <li>Media Coverage</li>
              <li>Events</li>
              <li>CSR</li>
              <li>Privacy Policy</li>
              <li>Modern Slavery Statement</li>
            </ul>
          </div>
          {/* What We Do */}
          <div>
            <h3 className="font-semibold text-lg mb-4">What We Do</h3>
            <ul className="space-y-2">
              <li>Services</li>
              <li>Technologies</li>
              <li>Solutions</li>
              <li>Industries</li>
              <li>Idanim</li>
            </ul>
          </div>
          {/* Insights */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Insights</h3>
            <ul className="space-y-2">
              <li>Success Stories</li>
              <li>Whitepapers</li>
              <li>Webinars</li>
              <li>Podcasts</li>
              <li>Blogs</li>
              <li>E-Books</li>
              <li>Magazines</li>
              <li>Spotlight</li>
            </ul>
          </div>
          {/* Contact Us */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>Request for Services</li>
              <li>Join us!</li>
              <li>Media Queries</li>
              <li>Career</li>
              <li>Responsible Disclosure</li>
            </ul>
          </div>
          {/* Connect With Us */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-blue-500">LinkedIn</a>
              <a href="#" className="text-blue-400">Twitter</a>
              <a href="#" className="text-blue-600">Facebook</a>
              <a href="#" className="text-red-500">YouTube</a>
              <a href="#" className="bg-gray-300 px-2 py-1 rounded">Glassdoor</a>
            </div>
            <div className="mt-6">
              <img
                src="/logo.png"
                alt="TO THE NEW"
                className="w-20 mb-2"
              />
              <p className="text-sm text-gray-600">©2024 TO THE NEW</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 py-4 text-center text-white">
        <p>SERVICES</p>
      </div>
    </footer>
  );
};

export default Footer;