// Single source of truth for site-wide copy and links.
// Leave a social `href` empty to hide it from the site.

export const site = {
  name: 'mfort',
  legalName: 'mfort, LLC',
  url: 'https://mfort.dev',
  description:
    'mfort, LLC is a small, family-run company for software, digital marketing, and content projects.',
  email: 'hello@mfort.dev',
};

// What the company does, shown as a short list on the home page.
export const activities = [
  { title: 'Software & apps', text: 'Web and mobile applications.' },
  { title: 'Digital marketing', text: 'Branding, websites, and online campaigns.' },
  { title: 'Social media & content', text: 'Writing, video, and design for social platforms.' },
];

export type SocialKey = 'github' | 'x' | 'instagram' | 'tiktok' | 'linkedin' | 'youtube';

export const socials: { key: SocialKey; label: string; href: string }[] = [
  { key: 'github', label: 'GitHub', href: '' },
  { key: 'x', label: 'X', href: '' },
  { key: 'instagram', label: 'Instagram', href: '' },
  { key: 'tiktok', label: 'TikTok', href: '' },
  { key: 'linkedin', label: 'LinkedIn', href: '' },
  { key: 'youtube', label: 'YouTube', href: '' },
];

export const activeSocials = socials.filter((s) => s.href);
