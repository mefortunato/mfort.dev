// Single source of truth for site-wide copy and links.
// Leave a social `href` empty to hide it from the site.

export const site = {
  name: 'mfort',
  legalName: 'mfort, LLC',
  url: 'https://mfort.dev',
  tagline: 'Small studio. Big leverage.',
  description:
    'mfort is a two-person studio where humans and AI agents build software, grow brands, and create content.',
  email: 'hello@mfort.dev',
};

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/about/', label: 'About' },
  { href: '/contact/', label: 'Contact' },
];

export type SocialKey = 'github' | 'x' | 'instagram' | 'tiktok' | 'linkedin' | 'youtube';

export const socials: { key: SocialKey; label: string; href: string }[] = [
  { key: 'github', label: 'GitHub', href: 'https://github.com/mefortunato' },
  { key: 'x', label: 'X', href: '' },
  { key: 'instagram', label: 'Instagram', href: '' },
  { key: 'tiktok', label: 'TikTok', href: '' },
  { key: 'linkedin', label: 'LinkedIn', href: '' },
  { key: 'youtube', label: 'YouTube', href: '' },
];

export const activeSocials = socials.filter((s) => s.href);
