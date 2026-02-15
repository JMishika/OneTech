import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import ServicesSection from '@/components/sections/services';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nos Services - One Tech',
  description: 'Découvrez la gamme complète de solutions technologiques que nous offrons pour propulser votre entreprise.',
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-24 md:pt-32">
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
}
