const tintColorLight = '#0f172a';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#0f172a',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#fff',
    background: '#0f172a',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};

export const Palette = {
  primary: '#a3e635', // Electric Lime
  secondary: '#38bdf8', // Sky Blue
  accent: '#f472b6', // Pink
  background: '#0f172a', // Dark Navy
  card: '#1e293b', // Slate
  text: '#f8fafc', // White
  textDim: '#94a3b8', // Gray
  danger: '#ef4444',
  success: '#22c55e',
  warning: '#eab308',
} as const;

export default Colors;
