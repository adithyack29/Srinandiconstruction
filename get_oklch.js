import { formatCss, oklch, parse } from 'culori';

// Parse colors
const primary = parse('#0B1E2E');
const secondary = parse('#D4AF37');
const accent = parse('#D4AF37');

console.log('Primary (Navy/Charcoal):', formatCss(oklch(primary)));
console.log('Secondary/Accent (Gold):', formatCss(oklch(secondary)));
