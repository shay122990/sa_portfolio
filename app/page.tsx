import { Hero } from "./components/sections/Hero";
import { Services } from "./components/sections/Services";
import { Projects } from "./components/sections/Projects";
import { projects } from "./lib/data/projects";
import { ProcessSkills } from "./components/sections/ProcessSkill";
// import { About } from "./components/sections/About";

export default function Page() {
  return (
    <div className="w-full overflow-x-hidden text-[#e6e7ea] antialiased">
      <Hero />
      <Services />
      <Projects projects={projects} />
      <ProcessSkills />
      {/* <About /> */}
    </div>
  );
}
