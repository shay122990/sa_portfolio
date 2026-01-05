import { Hero } from "./components/sections/Hero";
import { Services } from "./components/sections/Services";
import { Projects } from "./components/sections/Projects";
import { Snapshot } from "./components/sections/Snapshot";
import { projects } from "./lib/data/projects";

export default function Page() {
  return (
    <div className="w-full overflow-x-hidden text-[#e6e7ea] antialiased">
      <Hero />
      <Services />
      <Projects projects={projects} />
      <Snapshot />
    </div>
  );
}
