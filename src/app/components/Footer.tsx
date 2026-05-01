import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          <div>
            <h3 className="text-2xl mb-4">Edgar Carandang</h3>
            <p className="text-gray-400">
              IT Support Specialist & Software Engineer — building solutions and keeping systems running.
            </p>
          </div>

          <div>
            <h4 className="text-lg mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-gray-400 hover:text-white transition-colors">
                About
              </a>
              <a href="#projects" className="block text-gray-400 hover:text-white transition-colors">
                Projects
              </a>
              <a href="#skills" className="block text-gray-400 hover:text-white transition-colors">
                Skills
              </a>
              <a href="#contact" className="block text-gray-400 hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/aintdelulu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/edgar-carandang-a2744a3b9/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:edgarcarandang18@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p className="flex items-center justify-center gap-2">
            All rights reserved by Edgar Carandang © 2026
          </p>
        </div>
      </div>
    </footer>
  );
}