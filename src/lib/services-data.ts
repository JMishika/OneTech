import {
  Smartphone,
  Database,
  Globe,
  FileText,
  Camera,
  Contact,
  ClipboardList,
  Bot,
  Router,
  Video,
  Satellite,
  Laptop,
  FileArchive,
  SmartphoneNfc,
  Printer,
  Wrench,
  ShoppingCart,
  BookOpen,
} from 'lucide-react';
import type { LucideProps } from 'lucide-react';
import type { ForwardRefExoticComponent, RefAttributes } from 'react';

export type Service = {
  icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
  title: string;
  description: string;
};

export const servicesData: Service[] = [
  {
    icon: Smartphone,
    title: "Création d'applications",
    description: "Solutions mobiles natives et hybrides, intuitives et performantes pour iOS et Android.",
  },
  {
    icon: Database,
    title: "Bases de données",
    description: "Conception, gestion et optimisation de bases de données relationnelles et NoSQL.",
  },
  {
    icon: Globe,
    title: "Sites web",
    description: "Développement de sites vitrines, e-commerce et plateformes sur-mesure, sécurisés et optimisés SEO.",
  },
  {
    icon: FileText,
    title: "Affiches publicitaires",
    description: "Création de visuels percutants pour vos anniversaires, vos campagnes d'évangélisation, vos campagnes marketing, du digital au print.",
  },
  {
    icon: Camera,
    title: "Photographie",
    description: "Séances photo professionnelles pour équipes, individus, photos passeports et pour immortaliser tous vos événements.",
  },
  {
    icon: Contact,
    title: "Cartes de visite",
    description: "Design et impression de cartes de visite professionnelles qui marquent les esprits.",
  },
  {
    icon: ClipboardList,
    title: "Formulaires en ligne",
    description: "Création de formulaires de contact, de sondages, de retours utilisateurs pour le marketing et questionnaires interactifs et sécurisés.",
  },
  {
    icon: Bot,
    title: "Agents IA",
    description: "Développement de chatbots et assistants virtuels pour automatiser votre service client.",
  },
  {
    icon: Router,
    title: "LANs câblés/sans fil",
    description: "Installation et configuration de réseaux locaux (LAN) fiables et rapides pour entreprises ou organisations.",
  },
  {
    icon: Video,
    title: "Caméras surveillance",
    description: "Mise en place de systèmes de vidéosurveillance IP pour la sécurité de vos locaux.",
  },
  {
    icon: Satellite,
    title: "Paraboles Canal+",
    description: "Installation et réglage professionnel d'antennes paraboliques pour une réception optimale.",
  },
  {
    icon: Laptop,
    title: "Windows/Mac/Linux",
    description: "Installation, configuration et dépannage de tous les systèmes d'exploitation majeurs.",
  },
  {
    icon: FileArchive,
    title: "Pack Office 2013-2025",
    description: "Installation et support pour toutes les versions de la suite Microsoft Office.",
  },
  {
    icon: SmartphoneNfc,
    title: "Déblocage Smartphones",
    description: "Services de déverrouillage pour iPhones et autres smartphones toutes marques.",
  },
  {
    icon: Printer,
    title: "Config. imprimantes",
    description: "Installation et configuration de vos imprimantes en réseau et locales.",
  },
  {
    icon: Wrench,
    title: "Maintenance informatique",
    description: "Contrats de maintenance préventive et curative pour votre parc informatique, réparations des Laptops et desktops.",
  },
  {
    icon: ShoppingCart,
    title: "Consommables Informatique",
    description: "Vente souris, disques durs (HDD et SSD),dongles Wi-Fi, claviers, clés USB, RAM,etc.",
  },
  {
    icon: BookOpen,
    title: "Formations à domicile",
    description: "Cours particuliers en initiation à l'informatique, aux réseaux informatiques, à la programmation web pour tous les niveaux.",
  },
];
