import { experiences } from "@/data/experience";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Building } from "lucide-react";

const typeIcons = {
  research: GraduationCap,
  teaching: GraduationCap,
  industry: Building,
};

const typeColors = {
  research: "bg-primary/10 text-primary",
  teaching: "bg-accent text-accent-foreground",
  industry: "bg-secondary text-secondary-foreground",
};

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4 text-center">
            Experience
          </h2>
          <p className="text-lg text-muted-foreground mb-12 text-center">
            Professional and research experience across academia and industry
          </p>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />

            <div className="space-y-8">
              {experiences.map((exp, index) => {
                const Icon = typeIcons[exp.type];
                const isEven = index % 2 === 0;

                return (
                  <div
                    key={exp.id}
                    className={`relative flex items-start gap-4 md:gap-8 ${
                      isEven ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full md:-translate-x-1.5 translate-y-6" />

                    {/* Content */}
                    <div className={`flex-1 ml-10 md:ml-0 ${isEven ? "md:pr-12" : "md:pl-12"}`}>
                      <Card className="bg-card hover:shadow-lg transition-shadow">
                        <CardHeader className="pb-2">
                          <div className="flex items-start justify-between gap-4 flex-wrap">
                            <div className="flex items-center gap-2">
                              <div className={`p-2 rounded-lg ${typeColors[exp.type]}`}>
                                <Icon className="h-4 w-4" />
                              </div>
                              <div>
                                <CardTitle className="text-lg">{exp.title}</CardTitle>
                                <p className="text-sm text-muted-foreground">
                                  {exp.organization} • {exp.location}
                                </p>
                              </div>
                            </div>
                            <Badge variant="outline" className="shrink-0">
                              {exp.period}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            {exp.highlights.slice(0, 3).map((highlight, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-primary mt-1.5">•</span>
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Spacer for alternating layout */}
                    <div className="hidden md:block flex-1" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
