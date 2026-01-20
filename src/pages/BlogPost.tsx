import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, Calendar, Clock } from 'lucide-react';
import { getBlogBySlug } from '@/data/blogs';
import AnimatedBackground from '@/components/AnimatedBackground';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const blog = slug ? getBlogBySlug(slug) : undefined;

  if (!blog) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-display font-bold text-foreground mb-4">Blog post not found</h1>
          <button
            onClick={() => navigate('/')}
            className="text-primary hover:underline"
          >
            Return home
          </button>
        </div>
      </div>
    );
  }

  const renderContent = (content: string) => {
    const lines = content.trim().split('\n');
    const elements: JSX.Element[] = [];
    let listItems: string[] = [];
    let listType: 'ul' | 'ol' | null = null;

    const flushList = () => {
      if (listItems.length > 0 && listType) {
        const ListTag = listType;
        elements.push(
          <ListTag key={elements.length} className={listType === 'ul' ? 'list-disc pl-6 space-y-2 my-4' : 'list-decimal pl-6 space-y-2 my-4'}>
            {listItems.map((item, i) => (
              <li key={i} className="text-muted-foreground">{renderInlineFormatting(item)}</li>
            ))}
          </ListTag>
        );
        listItems = [];
        listType = null;
      }
    };

    const renderInlineFormatting = (text: string) => {
      // Handle bold text
      const parts = text.split(/(\*\*[^*]+\*\*)/g);
      return parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={i} className="text-foreground font-semibold">{part.slice(2, -2)}</strong>;
        }
        return part;
      });
    };

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();
      
      if (!trimmedLine) {
        flushList();
        return;
      }

      // H1
      if (trimmedLine.startsWith('# ')) {
        flushList();
        elements.push(
          <h1 key={index} className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 mt-8 first:mt-0">
            {trimmedLine.slice(2)}
          </h1>
        );
        return;
      }

      // H2
      if (trimmedLine.startsWith('## ')) {
        flushList();
        elements.push(
          <h2 key={index} className="text-2xl font-display font-bold text-foreground mb-4 mt-10">
            {trimmedLine.slice(3)}
          </h2>
        );
        return;
      }

      // H3
      if (trimmedLine.startsWith('### ')) {
        flushList();
        elements.push(
          <h3 key={index} className="text-xl font-display font-semibold text-foreground mb-3 mt-6">
            {trimmedLine.slice(4)}
          </h3>
        );
        return;
      }

      // Bullet list
      if (trimmedLine.startsWith('- ')) {
        if (listType !== 'ul') {
          flushList();
          listType = 'ul';
        }
        listItems.push(trimmedLine.slice(2));
        return;
      }

      // Numbered list
      const numberedMatch = trimmedLine.match(/^(\d+)\.\s+(.+)/);
      if (numberedMatch) {
        if (listType !== 'ol') {
          flushList();
          listType = 'ol';
        }
        listItems.push(numberedMatch[2]);
        return;
      }

      // Regular paragraph
      flushList();
      elements.push(
        <p key={index} className="text-muted-foreground leading-relaxed mb-4">
          {renderInlineFormatting(trimmedLine)}
        </p>
      );
    });

    flushList();
    return elements;
  };

  return (
    <div className="min-h-screen bg-background relative">
      <AnimatedBackground />
      
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ChevronLeft size={16} />
            Back to home
          </button>
        </div>
      </header>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-6 py-12 relative z-10">
        {/* Meta */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
          <div className="flex items-center gap-2">
            <Calendar size={14} />
            <span>{new Date(blog.date).toLocaleDateString('en-US', { 
              month: 'long', 
              day: 'numeric', 
              year: 'numeric' 
            })}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={14} />
            <span>{blog.readTime}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {blog.tags.map((tag) => (
            <span key={tag} className="pub-tag">{tag}</span>
          ))}
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {renderContent(blog.content)}
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-border">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-primary hover:underline"
          >
            <ChevronLeft size={16} />
            Back to all posts
          </button>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
