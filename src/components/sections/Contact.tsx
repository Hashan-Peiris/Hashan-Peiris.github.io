import { profile } from "@/data/profile";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Github, MapPin, Download } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-card">
      <div className="container px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Interested in collaboration or have questions about my research? Feel free to reach out.
          </p>

          <Card className="bg-background">
            <CardContent className="pt-8 pb-8">
              <div className="grid gap-6 md:grid-cols-3 mb-8">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-muted transition-colors"
                >
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <span className="font-medium text-foreground">Email</span>
                  <span className="text-sm text-muted-foreground break-all">
                    {profile.email}
                  </span>
                </a>

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-muted transition-colors"
                >
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Linkedin className="h-6 w-6 text-primary" />
                  </div>
                  <span className="font-medium text-foreground">LinkedIn</span>
                  <span className="text-sm text-muted-foreground">Connect with me</span>
                </a>

                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-muted transition-colors"
                >
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Github className="h-6 w-6 text-primary" />
                  </div>
                  <span className="font-medium text-foreground">GitHub</span>
                  <span className="text-sm text-muted-foreground">View my code</span>
                </a>
              </div>

              <Button size="lg" asChild>
                <a href={profile.cvUrl} download>
                  <Download className="mr-2 h-4 w-4" />
                  Download Full CV
                </a>
              </Button>
            </CardContent>
          </Card>

          <p className="mt-8 text-sm text-muted-foreground">
            References will be provided upon request.
          </p>
        </div>
      </div>
    </section>
  );
}
