import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 relative overflow-hidden selection:bg-blue-500/30">
      {/* Premium Gradient Theme Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-20%] w-[80%] h-[80%] bg-blue-600/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-20%] w-[80%] h-[80%] bg-purple-600/20 blur-[150px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[20%] right-[10%] w-[50%] h-[50%] bg-cyan-500/15 blur-[100px] rounded-full animate-pulse" style={{ animationDelay: '4s' }} />
        <div className="absolute bottom-[20%] left-[10%] w-[60%] h-[60%] bg-indigo-600/15 blur-[130px] rounded-full animate-pulse" style={{ animationDelay: '6s' }} />
      </div>

      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}