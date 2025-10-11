# Golden Trees Caterers - Landing Page

## Overview
A professional, elegant landing page for Golden Trees Caterers, a premium catering service based in Karachi, Pakistan with over 30 years of experience in the hospitality industry.

## Project Information
- **Type**: Static landing page website
- **Framework**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS (CDN)
- **Status**: Production Ready

## Recent Changes
- **October 11, 2025**: Complete UI/UX Redesign
  - Redesigned entire website with sophisticated, elegant, professional styling
  - Added premium CSS animations and transitions (fadeInUp, slideIn, scaleIn)
  - Implemented glass morphism effects with backdrop blur
  - Enhanced with gold gradient text and premium shadows
  - Added smooth hover effects and interactive animations throughout
  - Improved visual hierarchy and typography across all sections
  - Enhanced header with fixed positioning and blur effects
  - Redesigned hero section with gradient overlays and animated text
  - Upgraded service cards with hover-lift effects and premium borders
  - Enhanced booking form with professional glass styling
  - Added elegant scroll animations and staggered delays
  - Maintained full responsiveness and code quality
  
- **October 11, 2025**: Initial Replit setup
  - Configured Vite to run on port 5000 with allowed hosts for Replit proxy
  - Installed all dependencies (React, TypeScript, Vite)
  - Removed unnecessary API key configuration (static site)
  - Set up frontend workflow for development server
  - Updated .gitignore for Node.js project

## Project Architecture
This is a single-page application (SPA) with the following structure:

### File Structure
- `App.tsx` - Main application component with all sections
- `index.tsx` - React DOM entry point
- `index.html` - HTML template
- `index.css` - Custom CSS styles
- `vite.config.ts` - Vite configuration
- `public/assets/` - Static assets (logo, images)

### Key Sections
1. **Header** - Logo, navigation menu, and Book Now CTA
2. **Hero** - Rotating slideshow with company messaging
3. **About** - Company history and values
4. **Overseas Clients** - Special services for international clients
5. **Services** - Wedding catering, private gatherings, corporate events, BBQs
6. **Why Choose Us** - Quality, attention to detail, professional team
7. **Gallery** - Image gallery and event reels
8. **Booking Form** - Event booking with comprehensive form fields
9. **Contact** - Company contact information
10. **Footer** - Social media links and company info

### Technologies Used
- React 19.2.0
- TypeScript 5.8.2
- Vite 6.2.0
- Tailwind CSS (via CDN)
- Custom fonts: Playfair Display, Lora, Open Sans

## Development
The project runs on port 5000 with hot module replacement enabled. The development server is configured to accept connections from Replit's proxy.

### Running Locally
```bash
npm install
npm run dev
```

### Building for Production
```bash
npm run build
npm run preview
```

## User Preferences
- Static landing page only (no backend/API required)
- Professional and elegant design
- Focus on visual presentation and user experience

## Notes
- This is a frontend-only static website
- Uses Tailwind CDN for rapid development (should migrate to build-time Tailwind for production)
- Images currently use placeholder URLs (picsum.photos) - should be replaced with actual company images
- Form submission currently logs to console - needs backend integration for actual bookings
