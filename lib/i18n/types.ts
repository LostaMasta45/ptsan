export type Language = 'id' | 'en';

export interface Translations {
  // Site Info
  site: {
    brand: string;
    tagline: string;
    description: string;
  };

  // Navigation
  nav: {
    home: string;
    services: string;
    portfolio: string;
    aboutUs: string;
    process: string;
    testimonials: string;
    contact: string;
    estimate: string;
  };

  // Hero Section
  hero: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    ctaWhatsapp: string;
    ctaEstimate: string;
    freeSurvey: string;
    serviceArea: string;
    warranty: string;
    transformationExample: string;
  };

  // Service Chips
  serviceChips: {
    renovation: string;
    construction: string;
    drafter: string;
    furniture: string;
    interior: string;
    maintenance: string;
  };

  // Trust Bar
  trustBar: {
    experience: string;
    projects: string;
    warranty: string;
    freeConsultation: string;
  };

  // Services Section
  services: {
    title: string;
    subtitle: string;
    renovation: {
      title: string;
      description: string;
      problem: string;
      solution: string;
      result: string;
    };
    construction: {
      title: string;
      description: string;
      problem: string;
      solution: string;
      result: string;
    };
    interior: {
      title: string;
      problem: string;
      solution: string;
      result: string;
    };
    drafter: {
      title: string;
      description: string;
      problem: string;
      solution: string;
      result: string;
    };
    maintenance: {
      title: string;
      problem: string;
      solution: string;
      result: string;
    };
    furniture: {
      title: string;
      description: string;
    };
    viewDetails: string;
    problemLabel: string;
    solutionLabel: string;
    resultLabel: string;
  };

  // Portfolio Section
  portfolio: {
    title: string;
    subtitle: string;
    viewAll: string;
    before: string;
    after: string;
    project: string;
  };

  // Process/Timeline
  process: {
    title: string;
    subtitle: string;
    steps: {
      consultation: {
        title: string;
        description: string;
      };
      design: {
        title: string;
        description: string;
      };
      agreement: {
        title: string;
        description: string;
      };
      execution: {
        title: string;
        description: string;
      };
    };
  };

  // Testimonials
  testimonials: {
    title: string;
    subtitle: string;
  };

  // CTA Section
  cta: {
    title: string;
    subtitle: string;
    button: string;
  };

  // Partnership
  partnership: {
    title: string;
    subtitle: string;
  };

  // FAQ
  faq: {
    title: string;
    subtitle: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
  };

  // Footer
  footer: {
    about: string;
    aboutDescription: string;
    quickLinks: string;
    services: string;
    contact: string;
    followUs: string;
    allRightsReserved: string;
    privacyPolicy: string;
    termsConditions: string;
  };

  // Contact Form
  contactForm: {
    title: string;
    subtitle: string;
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    phone: string;
    phonePlaceholder: string;
    message: string;
    messagePlaceholder: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
  };

  // Estimate Form
  estimateForm: {
    title: string;
    subtitle: string;
    projectType: string;
    projectTypePlaceholder: string;
    location: string;
    locationPlaceholder: string;
    budget: string;
    budgetPlaceholder: string;
    description: string;
    descriptionPlaceholder: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
  };

  // Common
  common: {
    learnMore: string;
    readMore: string;
    seeAll: string;
    close: string;
    next: string;
    previous: string;
    loading: string;
    category: string;
    allCategories: string;
    date: string;
    location: string;
    duration: string;
    scope: string;
  };
}
