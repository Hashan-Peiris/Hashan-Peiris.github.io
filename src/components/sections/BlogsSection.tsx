import { useState } from 'react';
import { FileText, Calendar, ArrowRight, X, ChevronLeft } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

// Placeholder blogs with full content
const blogs = [
  {
    id: 1,
    title: 'Getting Started with DFT Calculations',
    excerpt: 'An introduction to Density Functional Theory and how it applies to materials science research...',
    date: '2024-01-15',
    readTime: '5 min read',
    tags: ['DFT', 'Tutorial'],
    content: `
## Introduction to DFT

Density Functional Theory (DFT) has become one of the most widely used methods in computational materials science. In this post, I'll walk you through the basics of getting started with DFT calculations.

### What is DFT?

DFT is a computational quantum mechanical modeling method used to investigate the electronic structure of many-body systems, particularly atoms, molecules, and condensed phases. The name comes from the use of functionals of the electron density.

### Why Use DFT?

- **Accuracy**: DFT provides a good balance between computational cost and accuracy
- **Versatility**: It can be applied to a wide range of systems
- **Predictive Power**: DFT can predict properties before experiments are conducted

### Getting Started

To begin with DFT calculations, you'll need:

1. A computational chemistry software package (VASP, Quantum ESPRESSO, GPAW, etc.)
2. Access to high-performance computing resources
3. Basic understanding of quantum mechanics and solid-state physics

### Your First Calculation

Start with a simple system like bulk silicon or a small molecule. This will help you understand the workflow:

1. Set up the input structure
2. Choose appropriate pseudopotentials
3. Define calculation parameters (k-points, cutoff energy, etc.)
4. Run the calculation
5. Analyze the results

### Conclusion

DFT is a powerful tool that has revolutionized materials science research. With practice, you'll be able to predict material properties and design new materials computationally.
    `,
  },
  {
    id: 2,
    title: 'My Journey in Computational Materials Science',
    excerpt: 'Reflecting on the path from traditional materials engineering to computational approaches...',
    date: '2024-02-20',
    readTime: '8 min read',
    tags: ['Career', 'Personal'],
    content: `
## From Lab Bench to Command Line

When I first started studying materials science, I never imagined I would spend most of my time in front of a computer rather than in a wet lab. This is the story of my transition into computational materials science.

### The Beginning

My journey began in a traditional materials engineering program. I spent countless hours in the lab, running experiments, characterizing samples, and analyzing data. While I loved the hands-on nature of the work, I was often frustrated by the trial-and-error approach to materials discovery.

### The Turning Point

Everything changed when I took a course on computational methods. For the first time, I saw how we could predict material properties before ever synthesizing them. The idea of screening thousands of materials computationally, rather than making each one by hand, was revolutionary to me.

### Making the Transition

The transition wasn't easy. I had to learn:

- **Programming**: Python became my best friend
- **Linux/Unix**: Essential for running calculations on clusters
- **Quantum Mechanics**: Going deeper into the theory
- **High-Performance Computing**: Managing jobs on supercomputers

### What I've Learned

Looking back, I realize that both experimental and computational approaches have their strengths. The best research often combines both. My experimental background gives me intuition about what's physically reasonable, while computational tools let me explore vast materials spaces efficiently.

### Advice for Others

If you're considering a similar transition:

1. Start learning to code early
2. Take every computational course available
3. Find a mentor in the field
4. Don't abandon your experimental intuition—it's valuable

The field of computational materials science is growing rapidly, and there's never been a better time to get involved.
    `,
  },
  {
    id: 3,
    title: 'Understanding Battery Interface Chemistry',
    excerpt: 'A deep dive into the complex reactions happening at cathode-electrolyte interfaces...',
    date: '2024-03-10',
    readTime: '10 min read',
    tags: ['Battery', 'Research'],
    content: `
## The Hidden World of Battery Interfaces

Lithium-ion batteries power almost everything in our modern world, from smartphones to electric vehicles. But what happens at the atomic level when your battery charges and discharges? Let's explore the fascinating chemistry at battery interfaces.

### The Cathode-Electrolyte Interface (CEI)

When a battery operates, complex chemical reactions occur at the interface between the cathode material and the electrolyte. This region, just nanometers thick, largely determines battery performance and longevity.

### Key Challenges

Several phenomena make interface chemistry challenging:

1. **Oxidation Reactions**: High-voltage cathodes can oxidize the electrolyte
2. **Transition Metal Dissolution**: Metal ions can leach from the cathode
3. **Structural Changes**: The surface structure evolves with cycling
4. **Gas Evolution**: Decomposition can produce gases

### Computational Approaches

Understanding these interfaces requires multiple computational methods:

- **DFT Calculations**: For electronic structure and reaction energetics
- **Molecular Dynamics**: To study ion transport and dynamic behavior
- **Machine Learning**: For screening protective coatings
- **Phase-Field Models**: To understand degradation at larger scales

### Our Research

In our group, we use first-principles calculations to:

1. Predict stable interface phases
2. Calculate dissolution energies
3. Design protective coating materials
4. Understand the role of dopants

### The Future

As we push for higher energy density batteries, understanding and controlling interface chemistry becomes even more critical. The goal is to design batteries that can:

- Operate at higher voltages without degradation
- Maintain capacity over thousands of cycles
- Charge faster without damaging the interface

### Conclusion

Battery interface chemistry is a perfect example of where fundamental science meets real-world applications. Every improvement in our understanding can translate to better batteries for everyone.
    `,
  },
];

const BlogsSection = () => {
  const [selectedBlog, setSelectedBlog] = useState<typeof blogs[0] | null>(null);

  const openBlog = (blog: typeof blogs[0]) => {
    setSelectedBlog(blog);
  };

  const closeBlog = () => {
    setSelectedBlog(null);
  };

  return (
    <section id="blogs" className="section-container">
      <div className="animate-fade-up">
        <h2 className="section-title flex items-center gap-3">
          <FileText className="text-primary" size={32} />
          Blogs
        </h2>
        <p className="section-subtitle">
          Thoughts on research, science, and life
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <article 
            key={blog.id}
            className="glass-card animate-fade-up group cursor-pointer"
            style={{ animationDelay: `${index * 0.1}s` }}
            onClick={() => openBlog(blog)}
          >
            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
              <Calendar size={12} />
              <span>{new Date(blog.date).toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric', 
                year: 'numeric' 
              })}</span>
              <span>•</span>
              <span>{blog.readTime}</span>
            </div>
            
            <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
              {blog.title}
            </h3>
            
            <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
              {blog.excerpt}
            </p>
            
            <div className="flex flex-wrap gap-1.5 mb-4">
              {blog.tags.map((tag) => (
                <span key={tag} className="pub-tag">{tag}</span>
              ))}
            </div>
            
            <span className="inline-flex items-center gap-1 text-sm text-primary group-hover:gap-2 transition-all">
              Read more <ArrowRight size={14} />
            </span>
          </article>
        ))}
      </div>

      {/* Coming soon placeholder */}
      <div className="mt-8 text-center animate-fade-up stagger-3">
        <p className="text-muted-foreground italic">
          More posts coming soon...
        </p>
      </div>

      {/* Blog Detail Dialog */}
      <Dialog open={!!selectedBlog} onOpenChange={() => closeBlog()}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto p-0 bg-background border-border">
          {selectedBlog && (
            <div className="relative">
              {/* Header */}
              <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b border-border p-6">
                <button
                  onClick={closeBlog}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
                >
                  <ChevronLeft size={16} />
                  Back to blogs
                </button>
                
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                  <Calendar size={12} />
                  <span>{new Date(selectedBlog.date).toLocaleDateString('en-US', { 
                    month: 'long', 
                    day: 'numeric', 
                    year: 'numeric' 
                  })}</span>
                  <span>•</span>
                  <span>{selectedBlog.readTime}</span>
                </div>
                
                <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                  {selectedBlog.title}
                </h1>
                
                <div className="flex flex-wrap gap-2">
                  {selectedBlog.tags.map((tag) => (
                    <span key={tag} className="pub-tag">{tag}</span>
                  ))}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 prose prose-invert prose-sm md:prose-base max-w-none
                prose-headings:font-display prose-headings:text-foreground
                prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-4
                prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-3
                prose-p:text-muted-foreground prose-p:leading-relaxed
                prose-li:text-muted-foreground
                prose-strong:text-foreground
                prose-code:text-primary prose-code:bg-secondary/50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
              ">
                {selectedBlog.content.split('\n').map((line, i) => {
                  if (line.startsWith('## ')) {
                    return <h2 key={i}>{line.replace('## ', '')}</h2>;
                  } else if (line.startsWith('### ')) {
                    return <h3 key={i}>{line.replace('### ', '')}</h3>;
                  } else if (line.startsWith('- **')) {
                    const match = line.match(/- \*\*(.+?)\*\*: (.+)/);
                    if (match) {
                      return <li key={i}><strong>{match[1]}</strong>: {match[2]}</li>;
                    }
                    return <li key={i}>{line.replace('- ', '')}</li>;
                  } else if (line.match(/^\d+\. /)) {
                    return <li key={i}>{line.replace(/^\d+\. /, '')}</li>;
                  } else if (line.trim()) {
                    return <p key={i}>{line}</p>;
                  }
                  return null;
                })}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default BlogsSection;
