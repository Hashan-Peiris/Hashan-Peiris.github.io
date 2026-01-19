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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  const [activeTab, setActiveTab] = useState<"research" | "personal">("research");

  return (
    <div className="min-h-screen bg-background">
      <Navigation onNavigateToResearch={() => setActiveTab("research")} />
      <main>
        <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as "research" | "personal")}>
          <Hero onNavigateToResearch={() => setActiveTab("research")} />
          <div className="sticky top-16 z-40 border-b border-border bg-background/80 backdrop-blur">
            <div className="container px-4 py-6 flex justify-center">
              <TabsList className="bg-muted/80">
                <TabsTrigger value="research">Research</TabsTrigger>
                <TabsTrigger value="personal">Personal</TabsTrigger>
              </TabsList>
            </div>
          </div>
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
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
