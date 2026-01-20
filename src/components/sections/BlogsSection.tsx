import { Link } from 'react-router-dom';
import { FileText, Calendar, ArrowRight } from 'lucide-react';
import { blogs } from '@/data/blogs';

const BlogsSection = () => {
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
          <Link 
            key={blog.id}
            to={`/blog/${blog.slug}`}
            className="glass-card animate-fade-up group cursor-pointer block"
            style={{ animationDelay: `${index * 0.1}s` }}
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
          </Link>
        ))}
      </div>

      {/* Coming soon placeholder */}
      <div className="mt-8 text-center animate-fade-up stagger-3">
        <p className="text-muted-foreground italic">
          More posts coming soon...
        </p>
      </div>
    </section>
  );
};

export default BlogsSection;
