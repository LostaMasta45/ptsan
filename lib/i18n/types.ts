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
    button: string;
    steps: {
      consultation: {
        title: string;
        description: string;
        details: string[];
      };
      survey: {
        title: string;
        description: string;
        details: string[];
      };
      estimate: {
        title: string;
        description: string;
        details: string[];
      };
      execution: {
        title: string;
        description: string;
        details: string[];
      };
      handover: {
        title: string;
        description: string;
        details: string[];
      };
    };
  };

  // Testimonials
  testimonials: {
    title: string;
    subtitle: string;
    items: Array<{
      name: string;
      location: string;
      project: string;
      comment: string;
    }>;
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
    name: string;
    namePlaceholder: string;
    phone: string;
    phonePlaceholder: string;
    email: string;
    emailPlaceholder: string;
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
    responseTime: string;
    services: {
      renovasi: string;
      konstruksi: string;
      interior: string;
      drafter: string;
      perbaikan: string;
    };
    budgetRanges: {
      'under-50': string;
      '50-100': string;
      '100-250': string;
      '250-500': string;
      'above-500': string;
      'flexible': string;
    };
  };

  // About Page
  about: {
    title: string;
    intro: string;
    origin: string;
    focus: string;
    serviceAreaTitle: string;
    serviceAreaDesc: string;
    features: {
      comprehensive: { title: string; desc: string };
      experienced: { title: string; desc: string };
      quality: { title: string; desc: string };
      transparent: { title: string; desc: string };
    };
  };

  // Services Page
  servicesPage: {
    title: string;
    subtitle: string;
    downloadCatalog: string;
    downloadPDF: string;
    interested: string;
    requestEstimate: string;
    details: {
      renovation: string[];
      construction: string[];
      interior: string[];
      drafter: string[];
      maintenance: string[];
    };
  };

  // Process Page
  processPage: {
    title: string;
    subtitle: string;
    updateTitle: string;
    updateDesc: string;
  };

  // Testimonials Page
  testimonialsPage: {
    title: string;
    subtitle: string;
    stats: {
      projectsCompleted: string;
      averageRating: string;
      satisfactionRate: string;
    };
    whyChooseTitle: string;
    reasons: Array<{
      title: string;
      description: string;
    }>;
    ctaTitle: string;
    ctaSubtitle: string;
    ctaConsult: string;
    ctaEstimate: string;
  };

  // Contact Page
  contactPage: {
    title: string;
    subtitle: string;
    sendMessage: string;
    contactInfo: string;
    officeAddress: string;
    servingAreas: string;
    andSurrounding: string;
    whatsapp: string;
    clickToChat: string;
    email: string;
    fiverr: string;
    clickToOrderFiverr: string;
    operatingHours: string;
    monday: string;
    saturday: string;
    sunday: string;
    fasterResponse: string;
    fasterResponseDesc: string;
    chatWhatsappNow: string;
  };

  // Estimate Page
  estimatePage: {
    title: string;
    subtitle: string;
    features: Array<{
      title: string;
      description: string;
    }>;
    whatYouGet: string;
    benefits: string[];
    orContact: string;
  };

  // Portfolio Pages
  portfolioPage: {
    title: string;
    subtitle: string;
    ctaTitle: string;
    ctaSubtitle: string;
    ctaWhatsapp: string;
    ctaEstimate: string;
    swipeToSee: string;
  };

  furniturePortfolio: {
    title: string;
    subtitle: string;
    allCategories: string;
    items: string;
    clickToView: string;
    renderImage: string;
    construction: string;
    noItems: string;
    category: string;
    viewAll: string;
    date: string;
    slide: string;
    ctaTitle: string;
    ctaDescription: string;
    ctaWhatsapp: string;
    ctaContact: string;
    orderSimilar: string;
    previous: string;
    next: string;
  };

  constructionPortfolio: {
    title: string;
    subtitle: string;
    projects: string;
    allCategories: string;
    allTypes: string;
    clickToView: string;
    slideOf: string;
    filterByType: string;
    renderLabel: string;
    technicalLabel: string;
    photoLabel: string;
    noProjects: string;
    noProjectsInCategory: string;
    startYourProject: string;
    startYourProjectDesc: string;
    consultSimilarProject: string;
    images: string;
    category: string;
    featuredProject: string;
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
