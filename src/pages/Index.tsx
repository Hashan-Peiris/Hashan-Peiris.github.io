import { useState } from "react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Publications } from "@/components/sections/Publications";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { Personal } from "@/components/sections/Personal";
import { Tabs, TabsContent } from "@/components/ui/tabs";

const Index = () => {
  const [activeTab, setActiveTab] = useState<"research" | "personal">("research");

  return (
    <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as "research" | "personal")}>
      <div className="min-h-screen bg-background">
        <Navigation activeTab={activeTab} />
        <main>
          <Hero onNavigateToResearch={() => setActiveTab("research")} />
          <TabsContent value="research" className="mt-0">
            <About />
            <Experience />
            <Publications />
            <Projects />
            <Contact />
          </TabsContent>
          <TabsContent value="personal" className="mt-0">
            <Personal />
          </TabsContent>
        </main>
        <Footer />
      </div>
    </Tabs>
  );
};

export default Index;
