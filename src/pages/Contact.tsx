import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import ContactFAQ from "@/components/ContactFAQ";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    };

    // Validate all fields are filled
    if (!data.firstName || !data.lastName || !data.email || !data.phone || !data.subject || !data.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // TODO: This will work once Supabase is connected
    // For now, just show a success message
    console.log('Form data:', data);
    
    toast({
      title: "Form Submitted",
      description: "Thank you for your message. We'll get back to you within 24 hours. (Note: Email sending requires Supabase connection)",
    });
    
    // Reset form
    e.currentTarget.reset();
    setIsSubmitting(false);
  };

  return <div className="min-h-screen bg-background">
      <SEOHead title="Contact SurgeAhead - Medical School Interview Training Support" description="Get in touch with SurgeAhead for medical school interview training, surgical skills workshops, and personal statement support. Contact our team of qualified NHS doctors today." image="/lovable-uploads/1e553bea-530f-499f-8277-2b8e88243ef8.png" url="https://surgeahead.com/contact" keywords="contact surgeahead, medical school support, interview training contact, surgical skills enquiry, personal statement help" />
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 text-white relative overflow-hidden" style={{
      background: 'linear-gradient(135deg, #104475 0%, #0a3b5f 100%)'
    }}>
        <div className="absolute inset-0">
          <img src="/lovable-uploads/1e553bea-530f-499f-8277-2b8e88243ef8.png" alt="Medical students in surgical training" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Ready to start your medical journey? Get in touch with our team of qualified doctors and medical education experts.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <p className="text-muted-foreground">We'll get back to you within 24 hours</p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input 
                          id="firstName" 
                          name="firstName"
                          placeholder="Enter your first name" 
                          className="mt-1" 
                          required 
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input 
                          id="lastName" 
                          name="lastName"
                          placeholder="Enter your last name" 
                          className="mt-1" 
                          required 
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input 
                        id="email" 
                        name="email"
                        type="email" 
                        placeholder="Enter your email address" 
                        className="mt-1" 
                        required 
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input 
                        id="phone" 
                        name="phone"
                        type="tel" 
                        placeholder="Enter your phone number" 
                        className="mt-1" 
                        required 
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input 
                        id="subject" 
                        name="subject"
                        placeholder="What can we help you with?" 
                        className="mt-1" 
                        required 
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <textarea 
                        id="message" 
                        name="message"
                        rows={6} 
                        className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1" 
                        placeholder="Tell us more about your inquiry..." 
                        required 
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full font-semibold text-white bg-[#104475] hover:bg-[#0a3b5f]"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl">Get in Touch</CardTitle>
                    <p className="text-muted-foreground">Multiple ways to reach our team</p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-start space-x-4 p-4 rounded-lg" style={{
                    backgroundColor: '#f0f7ff'
                  }}>
                      <div className="p-3 rounded-full" style={{
                      backgroundColor: '#e0efff'
                    }}>
                        <Mail className="h-6 w-6" style={{
                        color: '#104475'
                      }} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Email Us</h4>
                        <p className="font-medium" style={{
                        color: '#104475'
                      }}>surgeahead.org@gmail.com</p>
                        <p className="text-sm text-muted-foreground mt-1">We'll respond within 24 hours</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-lg">
                      <div className="bg-green-100 p-3 rounded-full">
                        <Phone className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Call Us</h4>
                        <p className="text-green-700 font-medium">+44 7983250539</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <p className="text-sm text-muted-foreground">Mon-Fri 9:00 AM - 6:00 PM GMT</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4 p-4 bg-purple-50 rounded-lg">
                      <div className="bg-purple-100 p-3 rounded-full">
                        <MapPin className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Location</h4>
                        <p className="text-purple-700 font-medium">London, United Kingdom</p>
                        <p className="text-sm text-muted-foreground mt-1">Workshop locations vary</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 shadow-lg" style={{
                background: 'linear-gradient(135deg, #f0f7ff 0%, #e0efff 100%)',
                borderColor: '#bae0ff'
              }}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-full" style={{
                      backgroundColor: '#104475'
                    }}>
                        <CheckCircle className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold" style={{
                      color: '#104475'
                    }}>Personal Statement Support</h3>
                    </div>
                    <p className="mb-4" style={{
                    color: '#0a3b5f'
                  }}>
                      Need help with your personal statement? Our NHS doctors provide one-to-one support with unlimited revisions.
                    </p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-center gap-2 text-sm" style={{
                      color: '#0a3b5f'
                    }}>
                        <CheckCircle className="h-4 w-4" />
                        Strategic guidance from qualified doctors
                      </li>
                      <li className="flex items-center gap-2 text-sm" style={{
                      color: '#0a3b5f'
                    }}>
                        <CheckCircle className="h-4 w-4" />
                        Line-by-line feedback and improvements
                      </li>
                      <li className="flex items-center gap-2 text-sm" style={{
                      color: '#0a3b5f'
                    }}>
                        <CheckCircle className="h-4 w-4" />
                        Unlimited revisions until perfect
                      </li>
                    </ul>
                    <Button className="text-white w-full font-semibold bg-[#104475] hover:bg-[#0a3b5f]">
                      Get Personal Statement Help
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-green-600 p-2 rounded-full">
                        <CheckCircle className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-green-900">Workshop Inquiries</h3>
                    </div>
                    <p className="text-green-800 mb-4">
                      Have questions about our surgical skills workshops? Want to know more about dates and availability?
                    </p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-center gap-2 text-sm text-green-700">
                        <CheckCircle className="h-4 w-4" />
                        Small group sizes for quality teaching
                      </li>
                      <li className="flex items-center gap-2 text-sm text-green-700">
                        <CheckCircle className="h-4 w-4" />
                        Led by UK trained doctors
                      </li>
                      <li className="flex items-center gap-2 text-sm text-green-700">
                        <CheckCircle className="h-4 w-4" />
                        Hands-on surgical skills training
                      </li>
                    </ul>
                    <Link to="/workshops">
                      <Button variant="outline" className="border-2 border-green-600 text-green-700 hover:bg-green-50 w-full font-semibold">
                        View Workshop Details
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <ContactFAQ />
      <Footer />
    </div>;
};
export default Contact;
