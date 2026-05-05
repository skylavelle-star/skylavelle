export const site = {
  url: import.meta.env.PUBLIC_SITE_URL || 'https://skylavelle.com.au',
  name: 'Sky Lavelle',
  description:
    'Senior project management help for technology leaders, delivery teams and project managers working through high-pressure delivery environments.',
  email: 'hello@skylavelle.com.au',
  linkedin: 'https://linkedin.com/in/skylavelle',
} as const;

export const analytics = {
  gaId: import.meta.env.PUBLIC_GA_ID || '',
} as const;

export const beehiiv = {
  publicationId: import.meta.env.PUBLIC_BEEHIIV_PUBLICATION_ID || '',
  signupUrl: import.meta.env.PUBLIC_BEEHIIV_SIGNUP_URL || '',
} as const;

export const products = {
  projectRecoveryPack: {
    name: 'Project Recovery Pack',
    price: '$297',
    href: '/templates/project-recovery-pack',
    checkoutUrl: import.meta.env.PUBLIC_LS_PROJECT_RECOVERY_PACK || '',
  },
  businessCasePack: {
    name: 'Enterprise Technology Business Case Pack',
    price: '$247',
    href: '/templates/enterprise-technology-business-case-pack',
    checkoutUrl: import.meta.env.PUBLIC_LS_BUSINESS_CASE_PACK || '',
  },
  procurementPack: {
    name: 'Procurement Evaluation Pack',
    price: '$297',
    href: '/templates/procurement-evaluation-pack',
    checkoutUrl: import.meta.env.PUBLIC_LS_PROCUREMENT_PACK || '',
  },
  steeringCommitteePack: {
    name: 'Steering Committee Reporting Pack',
    price: '$147',
    href: '/templates/steering-committee-reporting-pack',
    checkoutUrl: import.meta.env.PUBLIC_LS_STEERING_COMMITTEE_PACK || '',
  },
} as const;

// Derived helpers - use these in components instead of reading env vars directly
export const newsletterUrl = beehiiv.signupUrl || '/newsletter';
export const lsEnabled = Object.values(products).some((p) => p.checkoutUrl);
export const beehiivEnabled = Boolean(beehiiv.signupUrl || beehiiv.publicationId);
