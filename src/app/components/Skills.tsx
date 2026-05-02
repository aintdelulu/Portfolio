import { motion } from "motion/react";

export function Skills() {
  const skillCategories = [
    {
      category: "Operating Systems",
      color: "text-blue-400",
      skills: ["Windows", "OS Installation", "System Configuration"]
    },
    {
      category: "Hardware & IT Support",
      color: "text-emerald-400",
      skills: ["Hardware Diagnostics", "Component Replacement", "RAM/SSD Upgrades", "Cable Management"]
    },
    {
      category: "Web Development",
      color: "text-purple-400",
      skills: ["React", "TypeScript", "JavaScript", "Vite", "HTML/CSS", "Tailwind CSS"]
    },
    {
      category: "Mobile Development",
      color: "text-pink-400",
      skills: ["Flutter", "Dart", "Cross-Platform Apps", "Mobile UI Design", "API Integration"]
    },
    {
      category: "Tools & Software",
      color: "text-orange-400",
      skills: ["Git & GitHub", "VS Code", "Remote Desktop", "Ticketing Systems", "Backup Solutions"]
    },
    {
      category: "Soft Skills",
      color: "text-cyan-400",
      skills: ["Problem Solving", "Empathy", "Team Collaboration", "Time Management", "Hardworking"]
    }
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-6 py-20 bg-gray-900">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl mb-6 text-white">Skills & Expertise</h2>
          <p className="text-xl text-gray-300 mb-16 max-w-3xl">
            A dual toolkit built across IT support and software engineering — ready to tackle technical challenges from any angle.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              className="bg-white/[0.02] backdrop-blur-3xl p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-colors duration-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className={`text-xl font-bold mb-6 tracking-wide uppercase ${category.color}`}>{category.category}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    className="relative group bg-white/5 backdrop-blur-sm px-4 py-2.5 rounded-xl border border-white/10 hover:border-blue-500/40 transition-all duration-300 text-sm text-gray-300 hover:text-white"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: skillIndex * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <div className="absolute inset-0 bg-blue-500/5 blur opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                    <span className="relative z-10">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}