import { motion } from "motion/react";
import { Wrench, HardDrive, Monitor, Code2, Smartphone } from "lucide-react";

export function About() {
  const features = [
    {
      icon: Wrench,
      title: "Troubleshooting",
      description: "Quick diagnosis and resolution of hardware, software, and network issues with a systematic approach"
    },
    {
      icon: HardDrive,
      title: "Hardware Replacement",
      description: "Expert installation and replacement of computer components, RAM, and SSD"
    },
    {
      icon: Monitor,
      title: "OS Integration",
      description: "Seamless operating system deployment, configuration, and integration across Windows"
    },
    {
      icon: Code2,
      title: "Web Development",
      description: "Building modern, responsive web applications using React, TypeScript, and Vite"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Developing cross-platform mobile apps using Flutter and Dart for Android"
    }
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20 bg-gray-900">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl mb-6 text-white font-bold tracking-tight">About Me</h2>
          <p className="text-xl text-gray-300 mb-16 max-w-4xl leading-relaxed">
            A highly motivated fresh graduate with a solid foundation in hardware troubleshooting, system maintenance, and operating system integration. Skilled in identifying and resolving technical issues efficiently with a structured and detail-oriented approach.
            <br /><br />
            In addition to IT support, I build practical software solutions, including cross-platform mobile applications using Flutter and Dart, and dynamic web applications with React, TypeScript, and Vite. I bring both technical precision and innovative thinking to every project.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="relative group bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-500 hover:bg-white/10 shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-blue-500/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              <feature.icon className="relative w-12 h-12 text-blue-500 mb-6 group-hover:scale-110 transition-transform duration-500" />
              <h3 className="relative text-2xl mb-3 text-white font-semibold">{feature.title}</h3>
              <p className="relative text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}