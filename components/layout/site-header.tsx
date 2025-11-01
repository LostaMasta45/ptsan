'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, MessageCircle, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { site } from '@/config/site';
import { useLanguage } from '@/lib/i18n/context';
import { LanguageToggle } from '@/components/language-toggle';

export function SiteHeader() {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [portfolioDropdownOpen, setPortfolioDropdownOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const portfolioItems = [
    { name: t.portfolio.title, href: '/portofolio' },
    { name: t.serviceChips.furniture, href: '/portofolio/furniture' },
    { name: t.serviceChips.construction, href: '/portofolio/konstruksi' },
  ];

  const navigation = [
    { name: t.nav.home, href: '/' },
    { name: t.nav.aboutUs, href: '/tentang-kami' },
    { name: t.nav.services, href: '/layanan' },
    { name: t.nav.portfolio, href: '/portofolio', hasDropdown: true },
    { name: t.nav.process, href: '/proses-kerja' },
    { name: t.nav.testimonials, href: '/testimoni' },
    { name: t.nav.contact, href: '/kontak' },
  ];

  const handleMouseEnter = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    setPortfolioDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setPortfolioDropdownOpen(false);
    }, 150);
    setTimeoutId(id);
  };

  useEffect(() => {
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [timeoutId]);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          {/* Logo - colored version only */}
          <Image
            src="/media/logos/logo-san-colored.jpg"
            alt={site.short}
            width={120}
            height={40}
            priority
            className="h-10 w-auto object-contain"
            style={{ width: 'auto', height: '40px' }}
          />
        </Link>

        <div className="hidden md:flex md:gap-6 md:items-center">
          {navigation.map((item) => (
            item.hasDropdown ? (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary py-2">
                  {item.name}
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${portfolioDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {portfolioDropdownOpen && (
                  <div className="absolute top-full left-0 mt-0 w-48 bg-background border rounded-lg shadow-lg py-2 animate-in fade-in slide-in-from-top-1 duration-150">
                    {portfolioItems.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2.5 text-sm hover:bg-accent transition-colors"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {item.name}
              </Link>
            )
          ))}
        </div>

        <div className="flex items-center gap-2">
          <LanguageToggle />
          
          <Button asChild className="hidden sm:inline-flex">
            <a href={site.whatsappLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-4 w-4" />
              {t.hero.ctaWhatsapp.split(' ')[0]}
            </a>
          </Button>

          <button
            type="button"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container space-y-1 px-4 py-4">
            {navigation.map((item) => (
              item.hasDropdown ? (
                <div key={item.name} className="space-y-1">
                  <button
                    onClick={() => setPortfolioDropdownOpen(!portfolioDropdownOpen)}
                    className="flex items-center justify-between w-full rounded-lg px-3 py-2 text-base font-medium hover:bg-accent"
                  >
                    {item.name}
                    <ChevronDown className={`h-4 w-4 transition-transform ${portfolioDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {portfolioDropdownOpen && (
                    <div className="pl-4 space-y-1">
                      {portfolioItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block rounded-lg px-3 py-2 text-sm hover:bg-accent"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-base font-medium hover:bg-accent"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            ))}
            <div className="pt-2 border-t mt-2">
              <LanguageToggle />
            </div>
            <Button asChild className="w-full mt-2">
              <a href={site.whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" />
                {t.hero.ctaWhatsapp}
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
