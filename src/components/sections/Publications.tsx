import { useState } from "react";
import { publications, allTags, type Publication } from "@/data/publications";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ExternalLink, FileText, Copy, Check, Search, BookOpen } from "lucide-react";
import { toast } from "sonner";

export function Publications() {
  const [search, setSearch] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [expandedBibtex, setExpandedBibtex] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredPublications = publications
    .filter((pub) => {
      const matchesSearch =
        pub.title.toLowerCase().includes(search.toLowerCase()) ||
        pub.authors.toLowerCase().includes(search.toLowerCase()) ||
        pub.journal.toLowerCase().includes(search.toLowerCase());
      const matchesTag = !selectedTag || pub.tags.includes(selectedTag);
      return matchesSearch && matchesTag;
    })
    .sort((a, b) => b.year - a.year);

  const copyBibtex = async (pub: Publication) => {
    if (pub.bibtex) {
      await navigator.clipboard.writeText(pub.bibtex);
      setCopiedId(pub.id);
      toast.success("BibTeX copied to clipboard");
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  const statusColors = {
    published: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100",
    submitted: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100",
    "in-prep": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100",
  };

  return (
    <section id="publications" className="py-20 bg-card">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4 text-center">
            Publications
          </h2>
          <p className="text-lg text-muted-foreground mb-8 text-center">
            Selected peer-reviewed publications and conference presentations
          </p>

          {/* Search and filters */}
          <div className="mb-8 space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search publications..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedTag === null ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTag(null)}
              >
                All
              </Button>
              {allTags.map((tag) => (
                <Button
                  key={tag}
                  variant={selectedTag === tag ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedTag(tag)}
                >
                  {tag}
                </Button>
              ))}
            </div>
          </div>

          {/* Publications list */}
          <div className="space-y-4">
            {filteredPublications.map((pub) => (
              <Card key={pub.id} className="bg-background hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                        <BookOpen className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-base font-medium leading-snug">
                          {pub.title}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground mt-1">
                          {pub.authors}
                        </p>
                      </div>
                    </div>
                    <Badge className="shrink-0">{pub.year}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="text-sm font-medium text-foreground">
                      {pub.journal}
                    </span>
                    {pub.status && (
                      <Badge variant="outline" className={statusColors[pub.status]}>
                        {pub.status === "in-prep" ? "In Preparation" : pub.status.charAt(0).toUpperCase() + pub.status.slice(1)}
                      </Badge>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {pub.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {pub.url && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={pub.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-3 w-3 mr-1" />
                          View
                        </a>
                      </Button>
                    )}
                    {pub.pdf && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={pub.pdf} target="_blank" rel="noopener noreferrer">
                          <FileText className="h-3 w-3 mr-1" />
                          PDF
                        </a>
                      </Button>
                    )}
                    {pub.bibtex && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyBibtex(pub)}
                      >
                        {copiedId === pub.id ? (
                          <Check className="h-3 w-3 mr-1" />
                        ) : (
                          <Copy className="h-3 w-3 mr-1" />
                        )}
                        BibTeX
                      </Button>
                    )}
                  </div>

                  {expandedBibtex === pub.id && pub.bibtex && (
                    <pre className="mt-4 p-4 bg-muted rounded-lg text-xs overflow-x-auto">
                      {pub.bibtex}
                    </pre>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPublications.length === 0 && (
            <p className="text-center text-muted-foreground py-8">
              No publications found matching your criteria.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
