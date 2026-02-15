"use client";

import { useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MessageSquare } from "lucide-react";

export function ContactForm() {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  const handleWhatsAppSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formRef.current) {
      const formData = new FormData(formRef.current);
      const name = formData.get("name") as string;
      const email = formData.get("email") as string;
      const message = formData.get("message") as string;

      if (!name?.trim() || !email?.trim() || !message?.trim()) {
        toast({
          title: "Champs Incomplets",
          description: "Veuillez remplir tous les champs avant d'envoyer via WhatsApp.",
          variant: "destructive",
        });
        return;
      }
      
      const whatsappText = `Nouveau message depuis le site web :\n\n*Nom:* ${name}\n*Email:* ${email}\n\n*Message:*\n${message}`;
      const whatsappUrl = `https://wa.me/243859858240?text=${encodeURIComponent(whatsappText)}`;
      window.open(whatsappUrl, '_blank');
      
      toast({
        title: "Redirection vers WhatsApp",
        description: "Votre message est prêt à être envoyé.",
      });
      formRef.current.reset();
    }
  };

  return (
    <form ref={formRef} onSubmit={handleWhatsAppSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <Label htmlFor="name">Nom</Label>
          <Input id="name" name="name" type="text" placeholder="Votre nom complet" required />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" placeholder="Votre adresse e-mail" required />
        </div>
        <div>
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" name="message" placeholder="Comment pouvons-nous vous aider ?" rows={5} required />
        </div>
      </div>
      <Button type="submit" className="w-full">
          <MessageSquare className="mr-2 h-4 w-4" /> Envoyer via WhatsApp
      </Button>
    </form>
  );
}
