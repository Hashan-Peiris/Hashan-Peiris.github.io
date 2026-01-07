import { useState } from "react";
import { projects, categories, type Project } from "@/data/projects";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ExternalLink, Github, FileText, Search, Beaker, Star } from "lucide-react";

export function Projects() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProjects = projects
    .filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(search.toLowerCase()) ||
        project.description.toLowerCase().includes(search.toLowerCase()) ||
        project.tags.some((tag) =>
          tag.toLowerCase().includes(search.toLowerCase())
        );
      const matchesCategory =
        !selectedCategory || project.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4 text-center">
            Projects
          </h2>
          <p className="text-lg text-muted-foreground mb-8 text-center">
            Research and development projects across academia and industry
          </p>

          {/* Search and filters */}
          <div className="mb-8 space-y-4">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search projects..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              <Button
                variant={selectedCategory === null ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(null)}
              >
                All
              </Button>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className={`bg-card hover:shadow-lg transition-all hover:-translate-y-1 ${
                  project.featured ? "ring-2 ring-primary/20" : ""
                }`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Beaker className="h-4 w-4 text-primary" />
                      </div>
                      {project.featured && (
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      )}
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg mt-3">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    {project.url && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-3 w-3 mr-1" />
                          View
                        </a>
                      </Button>
                    )}
                    {project.repo && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.repo} target="_blank" rel="noopener noreferrer">
                          <Github className="h-3 w-3 mr-1" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.pdf && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.pdf} target="_blank" rel="noopener noreferrer">
                          <FileText className="h-3 w-3 mr-1" />
                          PDF
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <p className="text-center text-muted-foreground py-8">
              No projects found matching your criteria.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
