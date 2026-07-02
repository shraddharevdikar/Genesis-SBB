/**
 * SBB Typography Tokens
 * Curated pairings for Swiss/Editorial aesthetic (Inter paired with Georgia / editorial Display).
 */
export const typography = {
  fonts: {
    sans: 'Inter, system-ui, -apple-system, sans-serif',
    serif: 'Georgia, serif',
    mono: 'JetBrains Mono, Fira Code, monospace',
  },
  sizes: {
    xs: '11px',      // Micro labels, status tags
    sm: '13px',      // Standard UI body text, buttons
    base: '15px',    // Interactive fields, primary body
    md: '18px',      // Sub-headings, compact cards
    lg: '24px',      // Cards title, modal headings
    xl: '32px',      // Large Display titles
  },
  weights: {
    light: '300',
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  lineHeights: {
    none: '1',
    tight: '1.2',
    normal: '1.5',
    relaxed: '1.625',
  }
};
