"use client";

import { useFormStatus } from "react-dom";
import { useEffect, useRef, useActionState } from "react";
import { useToast } from "@/hooks/use-toast";
import { submitContactForm, type FormState } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";

const initialState: FormState = {
  message: "",
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      {pending ? "Envoi en cours..." : "Envoyer le Message"}
    </Button>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({
          title: "Succès!",
          description: state.message,
        });
        formRef.current?.reset();
      } else {
        toast({
          title: "Erreur",
          description: state.message,
          variant: "destructive",
        });
      }
    }
  }, [state, toast]);

  return (
    <form ref={formRef} action={formAction} className="space-y-4">
      <div>
        <Label htmlFor="name">Nom</Label>
        <Input id="name" name="name" type="text" placeholder="Votre nom complet" required />
        {state.errors?.name && (
          <p className="text-sm text-destructive mt-1">{state.errors.name[0]}</p>
        )}
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" placeholder="Votre adresse e-mail" required />
        {state.errors?.email && (
          <p className="text-sm text-destructive mt-1">{state.errors.email[0]}</p>
        )}
      </div>
      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" placeholder="Comment pouvons-nous vous aider ?" rows={5} required />
        {state.errors?.message && (
          <p className="text-sm text-destructive mt-1">{state.errors.message[0]}</p>
        )}
      </div>
      <SubmitButton />
    </form>
  );
}
