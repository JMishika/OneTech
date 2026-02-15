import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Progress } from "@/components/ui/progress";
import TestimonialCard from "@/components/cards/testimonial-card";

const skills = [
  { name: "Développement Web & Mobile", value: 95 },
  { name: "Intelligence Artificielle", value: 85 },
  { name: "Infrastructure Réseau", value: 90 },
  { name: "Maintenance & Support", value: 98 },
];

const testimonials = [
  {
    quote: "L'équipe d'One Tech a transformé notre présence en ligne. Leur professionnalisme est sans égal.",
    name: "Jean-Pierre K.",
    company: "CEO, Kinshasa Ventures",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    avatarFallback: "JP",
  },
  {
    quote: "Une réactivité et une expertise technique qui nous ont permis de déployer notre projet en un temps record.",
    name: "Marie N.",
    company: "Directrice, Congo Logistics",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026705d",
    avatarFallback: "MN",
  },
  {
    quote: "Enfin un partenaire fiable pour toute notre infrastructure informatique. Je recommande vivement.",
    name: "David M.",
    company: "Gérant, Etoile du Fleuve",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026706d",
    avatarFallback: "DM",
  },
];

const AboutSection = () => {
  const teamPhoto = PlaceHolderImages.find((img) => img.id === 'team-photo');

  return (
    <section id="a-propos" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary-foreground">
              Expertise au Coeur de l'Innovation
            </h2>
            <p className="text-muted-foreground text-lg">
              Fondée sur des principes de confiance et d'innovation, One Tech est votre partenaire stratégique pour la transformation numérique. Notre équipe d'experts passionnés s'engage à fournir des solutions robustes, évolutives et parfaitement adaptées aux défis du marché congolais.
            </p>
            <div className="space-y-4 pt-4">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-base font-medium text-foreground">{skill.name}</span>
                    <span className="text-sm font-code text-primary">{skill.value}%</span>
                  </div>
                  <Progress value={skill.value} aria-label={`${skill.name} proficiency`} className="h-2" />
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-video group">
            <div className="absolute -inset-2.5 bg-gradient-to-r from-primary to-accent rounded-lg opacity-20 group-hover:opacity-50 transition-opacity duration-300 blur-xl"></div>
            {teamPhoto && (
              <Image
                src={teamPhoto.imageUrl}
                alt={teamPhoto.description}
                fill
                className="rounded-lg object-cover shadow-2xl"
                data-ai-hint={teamPhoto.imageHint}
              />
            )}
          </div>
        </div>
        
        <div className="mt-20 md:mt-32">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-headline font-bold text-primary-foreground">Ils Nous Font <span className="text-primary">Confiance</span></h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
