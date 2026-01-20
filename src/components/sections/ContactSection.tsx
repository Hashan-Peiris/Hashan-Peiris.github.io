import { Mail, Linkedin, Github, Download } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="section-container">
      <div className="max-w-2xl mx-auto text-center animate-fade-up">
        <h2 className="section-title">Get in Touch</h2>
        <p className="text-muted-foreground mb-8">
          Interested in collaboration or have questions about my research? Feel free to reach out.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            href="mailto:peiris.mdhc@gmail.com"
            className="flex items-center gap-3 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all hover:scale-105 w-full sm:w-auto justify-center whitespace-nowrap"
          >
            <Mail size={18} />
            peiris.mdhc@gmail.com
          </a>
          
          <a
            href="https://www.linkedin.com/in/m-d-hashan-c-peiris-aa9b65146"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 bg-secondary text-secondary-foreground rounded-full font-medium hover:bg-secondary/80 transition-all hover:scale-105 w-full sm:w-auto justify-center whitespace-nowrap"
          >
            <Linkedin size={18} />
            Connect with me
          </a>
          
          <a
            href="https://github.com/Hashan-Peiris"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 bg-secondary text-secondary-foreground rounded-full font-medium hover:bg-secondary/80 transition-all hover:scale-105 w-full sm:w-auto justify-center whitespace-nowrap"
          >
            <Github size={18} />
            View my code
          </a>
        </div>

        <a
          href="https://hashan-peiris.github.io/assets/Hashan_Peiris_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary hover:underline"
        >
          <Download size={16} />
          Download Full CV
        </a>

        <p className="text-sm text-muted-foreground mt-8">
          Happy to provide references upon request.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
