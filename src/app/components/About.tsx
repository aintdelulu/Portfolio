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
          <h2 className="text-5xl mb-6 text-white">About Me</h2>
          <p className="text-xl text-gray-300 mb-4 max-w-3xl">
            I'm a driven IT Support Specialist and Software Engineer with solid fundamentals in
            hardware troubleshooting, hardware replacement, and operating system integration.
          </p>
          <p className="text-lg text-gray-400 mb-16 max-w-3xl">
            Beyond IT support, I build real-world software — from cross-platform mobile apps using
            Flutter & Dart, to interactive web experiences with React, TypeScript, and Vite. I bring
            both a technician's precision and a developer's creativity to every challenge.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all hover:bg-gray-800/80"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <feature.icon className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-2xl mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}