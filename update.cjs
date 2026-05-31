const fs = require('fs');
const path = require('path');

const dir = 'src/components/landing';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (let file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Decrease section vertical padding
  content = content.replace(/py-24 md:py-32/g, 'py-12 md:py-16');
  
  if (file === 'Hero.tsx') {
    // Remove italic
    content = content.replace(/className="italic"/g, 'className=""');
    
    // Adjust padding and class
    content = content.replace(
      /className="pt-36 md:pt-40 pb-20 md:pb-28 bg-secondary\/40"/,
      'className="pt-32 md:pt-36 pb-12 md:pb-16 relative bg-cover bg-center overflow-hidden"'
    );
    
    // Add style background image and overlay
    content = content.replace(
      /<section id="top" className="(.*?)">/,
      `<section id="top" className="$1" style={{ backgroundImage: "url('/hero-bg.png')" }}>\n      <div className="absolute inset-0 bg-[#001f3f]/70 mix-blend-multiply" />\n      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />`
    );
    
    // Make content relative z-10
    content = content.replace(
      /<div className="max-w-4xl mx-auto px-6 text-center">/,
      '<div className="max-w-4xl mx-auto px-6 text-center relative z-10">'
    );
    
    // Ensure the text color is bright since background might be dark now. 
    // Wait, the text is already "text-brand" which might be dark if the theme is light.
    // If the theme is light, "text-brand" could be dark blue. The new background might make it hard to read.
    // Let's change "text-brand" in Hero to "text-white" to ensure readability on the dark background.
    // "text-brand" is used for the H1. "text-accent" for the top span. "text-muted-foreground" for the p.
    content = content.replace(/text-brand/g, 'text-white');
    content = content.replace(/text-muted-foreground/g, 'text-white/80');
    // For the CTA buttons:
    // primary button: bg-white text-brand
    content = content.replace(/bg-brand text-brand-foreground/g, 'bg-white text-[#001f3f]');
    // secondary button: border-white text-white
    content = content.replace(/ring-border/g, 'ring-white/30');
    content = content.replace(/text-brand/g, 'text-white'); // wait, I already replaced text-brand
  }
  
  if (file === 'FinalCta.tsx') {
      content = content.replace(/py-24 md:py-32/g, 'py-12 md:py-16');
  }

  fs.writeFileSync(filePath, content);
}
console.log('Update complete.');
