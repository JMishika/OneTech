import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const HeroSection = () => {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'motherboard-hero');

  return (
    <section id="accueil" className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          data-ai-hint={heroImage.imageHint}
          priority
        />
      )}
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 text-center text-primary-foreground p-4">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-headline font-bold uppercase tracking-wider drop-shadow-lg">
          One Tech
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl lg:text-2xl font-light text-primary-foreground/80 drop-shadow-md">
          Votre porte d'entrée vers l'innovation et la transformation numérique.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/services">
              Explorer nos Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="bg-transparent text-white border-white/50 hover:bg-white/10 hover:text-white hover:border-white" asChild>
            <Link href="/#contact">Demander un Devis</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
