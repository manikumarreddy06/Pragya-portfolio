import React from 'react';
import { Mail, Linkedin, BookOpen, MapPin, User } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-[#F5F5F5]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-[#1A365D] mb-12">Get in Touch</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#4A90A0] focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#4A90A0] focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#4A90A0] focus:border-transparent"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#1A365D] text-white px-6 py-3 rounded-lg hover:bg-[#4A90A0] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-[#1A365D] mb-4">Contact Information</h3>
              <div className="space-y-4">
                <a href="mailto:contact@example.com" className="flex items-center text-gray-600 hover:text-[#4A90A0]">
                  <Mail className="w-5 h-5 mr-3" />
                  pragyapallavi56@gmail.com
                </a>
                <a href="#" className="flex items-center text-gray-600 hover:text-[#4A90A0]">
                  <MapPin className="w-5 h-5 mr-3" />
                  Department of Bioengineering<br />
                  University Research Center<br />
                  123 Science Drive
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#1A365D] mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-[#4A90A0]">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-[#4A90A0]">
                  <BookOpen className="w-6 h-6" />
                </a>
                <a href="https://orcid.org/0000-0001-6422-9697" className="text-gray-600 hover:text-[#4A90A0]" target="_blank" rel="noopener noreferrer">
                  <User className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#1A365D] mb-4">Publications</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-[#4A90A0]">
                  <BookOpen className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#1A365D] mb-4">Newsletter</h3>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-2 rounded-l-lg border border-gray-300 focus:ring-2 focus:ring-[#4A90A0] focus:border-transparent"
                />
                <button className="bg-[#1A365D] text-white px-6 py-2 rounded-r-lg hover:bg-[#4A90A0] transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;