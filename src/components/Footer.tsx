import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-border bg-secondary/20">
      <div className="container-narrow mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            © {currentYear} Venny Wanjiru Kang'ethe. All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            Built with <Heart size={14} className="text-primary mx-1" /> in Nairobi, Kenya
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
