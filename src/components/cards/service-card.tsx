import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Service } from "@/lib/services-data";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

type ServiceCardProps = {
  service: Service;
  className?: string;
};

const ServiceCard = ({ service, className }: ServiceCardProps) => {
  const Icon = service.icon;

  return (
    <Link href="/#contact" className={cn("group block h-full", className)}>
        <Card className="flex flex-col h-full bg-card border border-border/50 transition-all duration-300 ease-in-out group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/10">
        <CardHeader className="flex flex-row items-center gap-4">
            <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <Icon className="w-6 h-6" />
            </div>
            <CardTitle className="text-lg font-bold">{service.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow flex flex-col">
            <p className="text-sm text-muted-foreground flex-grow">{service.description}</p>
            <div className="mt-4 flex items-center text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            En savoir plus <ArrowRight className="w-4 h-4 ml-2" />
            </div>
        </CardContent>
        </Card>
    </Link>
  );
};

export default ServiceCard;
