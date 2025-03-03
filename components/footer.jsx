import React from 'react';
import { 
  Briefcase, 
  FileText, 
  BookOpen, 
  Brain, 
  Mail, 
  Github, 
  Linkedin, 
  Twitter,
  GraduationCap,
  FileCheck,
  MessageSquare,
  Trophy
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Main Services */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                <a href="dashboard" className="hover:text-white transition">Career Insights</a>
              </li>
              <li className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                <a href="resume" className="hover:text-white transition">Resume Builder</a>
              </li>
              <li className="flex items-center gap-2">
                <FileCheck className="w-4 h-4" />
                <a href="ai-cover-letter" className="hover:text-white transition">Cover Letter Generator</a>
              </li>
              <li className="flex items-center gap-2">
                <Brain className="w-4 h-4" />
                <a href="interview" className="hover:text-white transition">Practice Quizzes</a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                <a href="#" className="hover:text-white transition">Career Guide</a>
              </li>
              <li className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                <a href="#" className="hover:text-white transition">Learning Center</a>
              </li>
              <li className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                <a href="#" className="hover:text-white transition">Interview Tips</a>
              </li>
              <li className="flex items-center gap-2">
                <Trophy className="w-4 h-4" />
                <a href="#" className="hover:text-white transition">Success Stories</a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-white transition">About Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">Contact</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">Terms of Service</a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="mb-4">
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                shyamkaruparthi@gmail.com
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/ksvpraveen/" className="hover:text-white transition">
                <Linkedin className="w-6 h-6" />
              </a>
              
              
              <a href="https://github.com/" className="hover:text-white transition">
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-center text-sm">
            © {new Date().getFullYear()} AI Career Coach. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;