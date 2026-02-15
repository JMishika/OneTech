import Image from "next/image";
import { ContactForm } from "@/components/forms/contact-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Mail, MapPin, MessageSquare } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Link from 'next/link';

const ContactSection = () => {
  const mapImage = PlaceHolderImages.find((img) => img.id === 'kinshasa-map');

  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary-foreground">
            Prêt à <span className="text-primary">démarrer</span> un projet ?
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
            Une question ? Un projet ? Remplissez le formulaire ou utilisez nos coordonnées. Notre équipe vous répondra rapidement.
          </p>
        </div>
        <div className="grid lg:grid-cols-5 gap-8 md:gap-12">
          <Card className="lg:col-span-3 bg-card border-border/50">
            <CardHeader>
                <CardTitle>Envoyez-nous un message</CardTitle>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-card border-border/50">
                <CardHeader>
                    <CardTitle>Nos Coordonnées</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 mt-1 text-primary shrink-0" />
                    <p className="text-muted-foreground">
                      Avenue Kemi, Lemba, Kinshasa, R.D. Congo
                    </p>
                  </div>
                   <div className="flex items-center gap-4">
                    <Mail className="w-5 h-5 text-primary shrink-0" />
                    <a href="mailto:onetech243@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                      onetech243@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <Clock className="w-5 h-5 text-primary shrink-0" />
                    <p className="text-muted-foreground">
                      Lun - Ven : 8h30 - 20h00
                    </p>
                  </div>
                   <Button asChild variant="outline" className="w-full">
                    <a href="https://wa.me/243859858240" target="_blank" rel="noopener noreferrer">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Discuter sur WhatsApp
                    </a>
                  </Button>
                </CardContent>
            </Card>
            <div className="aspect-video relative rounded-lg overflow-hidden shadow-lg group">
               <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-lg opacity-20 group-hover:opacity-50 transition-opacity duration-300 blur-lg"></div>
              {mapImage && (
                <Link href="https://maps.google.com/?q=Kinshasa" target="_blank" rel="noopener noreferrer">
                  <Image
                    src={mapImage.imageUrl}
                    alt={mapImage.description}
                    fill
                    className="object-cover rounded-md"
                    data-ai-hint={mapImage.imageHint}
                  />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
