import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto py-6 px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="font-headline text-xl font-bold text-primary-foreground">One<span className="text-primary">Tech</span></div>
            <div className="text-center text-sm text-muted-foreground mt-4 md:mt-0" suppressHydrationWarning>
                &copy; {currentYear} One Tech. Tous droits réservés.
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
