import { useState } from "react";
import { personalPosts, personalPhotos, type PersonalPhoto } from "@/data/personal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Calendar, Camera, MapPin, PenLine } from "lucide-react";

export function Personal() {
  const [activePhoto, setActivePhoto] = useState<PersonalPhoto | null>(null);

  return (
    <section id="personal" className="py-20 bg-background">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Personal Studio
            </h2>
            <p className="text-lg text-muted-foreground">
              Writing, reflections, and photography outside the lab.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-6 scroll-mt-24" id="personal-blogs">
              <div className="flex items-center gap-2">
                <PenLine className="h-5 w-5 text-primary" />
                <h3 className="text-2xl font-serif font-semibold text-foreground">Field Notes</h3>
              </div>

              <div className="space-y-5">
                {personalPosts.map((post) => (
                  <Card key={post.id} className="overflow-hidden bg-card">
                    <div className="h-24 bg-gradient-to-br from-primary/15 via-accent/30 to-background" />
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">{post.title}</CardTitle>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Calendar className="h-3.5 w-3.5" />
                        <span>{post.date}</span>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {post.summary}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      {post.url && (
                        <Button variant="outline" size="sm" asChild>
                          <a href={post.url} target="_blank" rel="noopener noreferrer">
                            Read post
                          </a>
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="space-y-6 scroll-mt-24" id="personal-photos">
              <div className="flex items-center gap-2">
                <Camera className="h-5 w-5 text-primary" />
                <h3 className="text-2xl font-serif font-semibold text-foreground">Photo Journal</h3>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {personalPhotos.map((photo) => (
                  <button
                    key={photo.id}
                    type="button"
                    onClick={() => setActivePhoto(photo)}
                    className="group w-full overflow-hidden rounded-xl border bg-card shadow-sm text-left"
                    aria-label={`Open photo ${photo.title}`}
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={photo.image}
                        alt={photo.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="space-y-2 p-4">
                      <div className="flex items-start justify-between gap-3">
                        <span className="font-medium text-foreground">{photo.title}</span>
                        <span className="text-xs text-muted-foreground">{photo.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <MapPin className="h-3.5 w-3.5" />
                        <span>{photo.location}</span>
                      </div>
                      {photo.camera && (
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Camera className="h-3.5 w-3.5" />
                          <span>{photo.camera}</span>
                        </div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={Boolean(activePhoto)} onOpenChange={(open) => !open && setActivePhoto(null)}>
        <DialogContent className="max-w-5xl p-0 overflow-hidden">
          {activePhoto && (
            <div className="bg-background">
              <div className="bg-black/90">
                <img
                  src={activePhoto.image}
                  alt={activePhoto.title}
                  className="max-h-[70vh] w-full object-contain"
                />
              </div>
              <div className="space-y-2 p-4">
                <div className="flex items-start justify-between gap-3">
                  <span className="text-lg font-semibold text-foreground">{activePhoto.title}</span>
                  <span className="text-sm text-muted-foreground">{activePhoto.date}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{activePhoto.location}</span>
                </div>
                {activePhoto.camera && (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Camera className="h-4 w-4" />
                    <span>{activePhoto.camera}</span>
                  </div>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
