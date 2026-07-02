/**
 * SBB Platform Color Palette
 * Designed for light and dark theme accessibilities (AA/AAA contrast levels).
 */
export const colors = {
  // Brand Identifiers
  brand: {
    slate: '#1E293B',     // Deep slate brand identity
    charcoal: '#0F172A',  // Editorial secondary
    crimson: '#991B1B',   // SBB Traditional accent
  },
  
  // Neutrals - Light Mode
  light: {
    bg: '#FAFAFA',
    surface: '#FFFFFF',
    border: '#E5E5E5',
    textPrimary: '#0F172A',
    textSecondary: '#475569',
    textMuted: '#94A3B8',
  },

  // Neutrals - Dark Mode
  dark: {
    bg: '#0A0A0B',
    surface: '#0F0F11',
    border: '#262626',
    textPrimary: '#F5F5F5',
    textSecondary: '#A3A3A3',
    textMuted: '#737373',
  },

  // State colors
  status: {
    success: {
      light: '#15803D',
      dark: '#4ADE80',
    },
    warning: {
      light: '#B45309',
      dark: '#FBBF24',
    },
    error: {
      light: '#B91C1C',
      dark: '#F87171',
    },
    info: {
      light: '#1D4ED8',
      dark: '#60A5FA',
    }
  }
};
