import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { useForm } from "react-hook-form";
import { useToast } from "./ui/use-toast";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const ContactSection = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormData>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      form.reset();
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="relative w-full py-20 bg-gradient-to-br from-portfolio-dark/50 to-portfolio-darkest">
      <div className="absolute inset-0 bg-gradient-subtle opacity-30" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's discuss your project or just say hello. I'm always open to new opportunities and interesting conversations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-portfolio-dark/60 backdrop-blur-sm rounded-2xl p-8 border border-primary/20 shadow-elegant">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="text-foreground font-medium">vikas.careerone@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="text-foreground font-medium">+91 9336021325</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-foreground font-medium">India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-portfolio-dark/60 backdrop-blur-sm rounded-2xl p-8 border border-primary/20 shadow-elegant">
              <h3 className="text-xl font-semibold text-foreground mb-4">Let's Connect</h3>
              <p className="text-muted-foreground mb-6">
                Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
              </p>

              <div className="flex gap-4">
                {/* LinkedIn Button */}
                <Button variant="outline" size="sm" className="flex-1">
                  <a href="https://www.linkedin.com/in/imvikas28" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </Button>

                {/* Github Button */}
                <Button variant="outline" size="sm" className="flex-1">
                  <a href="https://github.com/imvikas31" target="_blank" rel="noopener noreferrer">
                    Github
                  </a>
                </Button>
                {/* Instagram Button */}
                <Button variant="outline" size="sm" className="flex-1">
                  <a href="https://www.instagram.com/imvikas.exe/#" target="_blank" rel="noopener noreferrer">
                    Instagram
                  </a>
                </Button>

                {/* Twitter Button */}
                <Button variant="outline" size="sm" className="flex-1">
                  <a href="https://x.com/imvikas0331" target="_blank" rel="noopener noreferrer">
                    Twitter
                  </a>
                </Button>

                
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-portfolio-dark/60 backdrop-blur-sm rounded-2xl p-8 border border-primary/20 shadow-elegant">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Send Message</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  rules={{ required: "Name is required" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  rules={{ 
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/,
                      message: "Please enter a valid email"
                    }
                  }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="your.email@example.com" type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  rules={{ required: "Message is required" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell me about your project or just say hello..." 
                          className="min-h-[120px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;