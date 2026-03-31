import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Mail, Github, Linkedin, Send, Phone } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const ContactSection = () => {
  const ref = useScrollReveal();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: { name: form.name, email: form.email, message: form.message },
      });
      if (error) throw error;
      setForm({ name: "", email: "", message: "" });
      toast({ title: "Message sent!", description: "Your message has been delivered successfully." });
    } catch (err: any) {
      toast({ title: "Error", description: "Failed to send message. Please try again.", variant: "destructive" });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="relative z-10 py-24 px-6">
      <div className="container mx-auto max-w-5xl" ref={ref}>
        <div className="text-center">
          <h2 className="section-heading neon-text">Contact</h2>
          <div className="section-divider" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <form
            onSubmit={handleSubmit}
            className="glass-card neon-border-hover rounded-xl p-6 space-y-4"
          >
            {(["name", "email"] as const).map((field) => (
              <input
                key={field}
                type={field === "email" ? "email" : "text"}
                placeholder={field === "name" ? "Your Name" : "Your Email"}
                required
                value={form[field]}
                onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                className="w-full bg-secondary/40 border border-border/50 rounded-lg px-4 py-3 text-sm font-rajdhani text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-neon/50 focus:shadow-[0_0_12px_hsl(190_100%_50%/0.15)] transition-all duration-300"
              />
            ))}
            <textarea
              placeholder="Your Message"
              rows={4}
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-secondary/40 border border-border/50 rounded-lg px-4 py-3 text-sm font-rajdhani text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-neon/50 focus:shadow-[0_0_12px_hsl(190_100%_50%/0.15)] transition-all duration-300 resize-none"
            />
            <button
              type="submit"
              disabled={sending}
              className="neon-button w-full flex items-center justify-center gap-2"
            >
              <Send size={14} /> {sending ? "Sending..." : "Send Message"}
            </button>
          </form>

          <div className="flex flex-col justify-center space-y-6">
            {[
              { icon: Mail, label: "nimmalabhuvanalakshmi@gmail.com", href: "https://mail.google.com/mail/?view=cm&fs=1&to=nimmalabhuvanalakshmi@gmail.com" },
              { icon: Github, label: "GitHub", href: "https://github.com/bhuvanalakshmi27" },
              { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/bhuvanalakshmi-nimmala-7b5b9b39a" },
              { icon: Phone, label: "9133144228", href: "tel:9133144228" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-foreground/70 hover:text-neon transition-colors duration-300 font-rajdhani group"
              >
                <span className="w-10 h-10 rounded-lg glass-card neon-border-hover flex items-center justify-center group-hover:shadow-[0_0_16px_hsl(190_100%_50%/0.3)]">
                  <item.icon size={18} />
                </span>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
