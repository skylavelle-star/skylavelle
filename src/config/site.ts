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

