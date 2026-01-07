import { profile } from "@/data/profile";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Briefcase, Code } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-8 text-center">
            About Me
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed mb-12 text-justify">
            {profile.bio}
          </p>

          {/* Skills */}
          <div className="mb-16">
            <h3 className="text-2xl font-serif font-semibold text-foreground mb-6 flex items-center gap-2">
              <Code className="h-6 w-6 text-primary" />
              Key Skills
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {Object.entries(profile.skills).map(([category, skills]) => (
                <Card key={category} className="bg-background">
                  <CardContent className="pt-6">
                    <h4 className="font-semibold text-foreground mb-4">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-serif font-semibold text-foreground mb-6 flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              Education
            </h3>
            <div className="space-y-4">
              {profile.education.map((edu, index) => (
                <Card key={index} className="bg-background">
                  <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                        <p className="text-muted-foreground">{edu.institution}</p>
                        {edu.details && (
                          <p className="text-sm text-primary">{edu.details}</p>
                        )}
                      </div>
                      <Badge variant="outline">{edu.year}</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
