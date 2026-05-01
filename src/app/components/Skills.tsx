import { motion } from "motion/react";

export function Skills() {
  const skillCategories = [
    {
      category: "Operating Systems",
      color: "text-blue-400",
      skills: ["Windows 10/11", "Windows Server", "Linux/Ubuntu", "macOS", "OS Installation", "System Configuration"]
    },
    {
      category: "Hardware & IT Support",
      color: "text-emerald-400",
      skills: ["Hardware Diagnostics", "Component Replacement", "RAM/SSD Upgrades", "Peripheral Setup", "Cable Management", "Network Troubleshooting"]
    },
    {
      category: "Web Development",
      color: "text-purple-400",
      skills: ["React", "TypeScript", "JavaScript", "Vite", "HTML/CSS", "Tailwind CSS"]
    },
    {
      category: "Mobile Development",
      color: "text-pink-400",
      skills: ["Flutter", "Dart", "Cross-Platform Apps", "Mobile UI Design", "State Management", "API Integration"]
    },
    {
      category: "Tools & Software",
      color: "text-orange-400",
      skills: ["Git & GitHub", "VS Code", "Active Directory", "Remote Desktop", "Ticketing Systems", "Backup Solutions"]
    },
    {
      category: "Soft Skills",
      color: "text-cyan-400",
      skills: ["Problem Solving", "Customer Support", "Documentation", "Team Collaboration", "Time Management", "User Training"]
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className={`text-xl mb-5 ${category.color}`}>{category.category}</h3>
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    className="bg-gray-800 text-gray-300 px-4 py-3 rounded-lg border border-gray-700 hover:border-gray-500 transition-all text-sm"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: skillIndex * 0.05 }}
                    viewport={{ once: true }}
                  >
                    {skill}
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