import { servicesData } from "@/lib/services-data";
import ServiceCard from "@/components/cards/service-card";

const ServicesSection = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary-foreground">
            Notre Expertise à Votre <span className="text-primary">Service</span>
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-muted-foreground text-lg">
            Nous offrons une gamme complète de solutions technologiques pour propulser votre entreprise vers le succès.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
