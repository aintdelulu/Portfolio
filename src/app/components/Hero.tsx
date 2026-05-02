import { motion } from "motion/react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative bg-gray-950 pt-20 pb-10">
      <div className="max-w-6xl w-full">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div
            className="flex-1 md:pr-8 text-center md:text-left z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl mb-6 text-white font-bold tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hi, I'm <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 bg-clip-text text-transparent">Edgar Carandang</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl font-bold tracking-[0.25em] bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              FRESH GRADUATE
            </motion.p>

            <motion.p
              className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto md:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Passionate about solving technical issues and developing efficient software solutions.
              Experienced in IT support, including hardware troubleshooting, system maintenance, and OS integration, alongside building real-world applications using React, Flutter, and TypeScript.
              Adept at bridging technical support and software development to deliver reliable, user-focused systems.
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center md:justify-start gap-6 mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <a
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-bold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="px-8 py-4 border border-white/10 bg-white/5 backdrop-blur-sm text-gray-300 rounded-xl font-bold hover:bg-white/10 hover:border-white/20 transition-all"
              >
                View My Work
              </a>
            </motion.div>

            <motion.div
              className="flex justify-center md:justify-start gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <a
                href="https://github.com/aintdelulu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/edgar-carandang-a2744a3b9/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:edgarcarandang18@gmail.com"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </motion.div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            className="flex-1 flex justify-center md:justify-end z-10 w-full max-w-[280px] md:max-w-[350px] lg:max-w-[400px]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div 
              animate={{ 
                y: [0, -15, 0],
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="relative w-full aspect-[3/4] md:aspect-square group"
            >
              {/* Subtle ambient glow behind the image */}
              <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full group-hover:bg-blue-500/30 transition-colors duration-500" />

              {/* Image Container with masking to hide the studio background edges */}
              <div className="relative w-full h-full rounded-[2rem] md:rounded-full overflow-hidden border border-gray-800 shadow-2xl bg-gray-900 group-hover:border-gray-600 transition-colors duration-500">
                <img
                  src="/edgar-profile-nobg.png"
                  alt="Edgar Carandang"
                  className="w-full h-full object-cover object-top scale-110 translate-y-4"
                  onError={(e) => {
                    // Fallback to original if the nobg image isn't perfect
                    (e.target as HTMLImageElement).src = "/edgar-profile.png";
                    (e.target as HTMLImageElement).className = "w-full h-full object-cover object-[center_top] scale-[1.2]";
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="w-6 h-6 text-gray-600" />
      </motion.div>
    </section>
  );
}