# Beth Harrison - City Photography Portfolio

A modern, fully-featured photography portfolio website showcasing urban and city photography work. Built with performance, accessibility, and user experience in mind.

![Portfolio Preview](https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&h=400&fit=crop)

## 🚀 Features

### 🎨 Modern Design & UX

- **Dark Mode Toggle**: Automatic theme switching with user preference persistence
- **Responsive Design**: Optimized for all devices and screen sizes
- **Smooth Animations**: CSS transitions and scroll-triggered animations
- **Professional Typography**: Inter font family for modern aesthetics
- **Loading States**: Skeleton screens and progressive loading

### 📸 Enhanced Gallery

- **Interactive Gallery**: 14 curated city photography images
- **Advanced Filtering**: Filter by Architecture, Street, Skyline, Night, and Urban Portraits
- **Lightbox Modal**: Full-screen image viewing with keyboard navigation
- **Lazy Loading**: Optimized image loading for better performance
- **Touch-Friendly**: Mobile-optimized interactions

### 💼 Professional Features

- **Services & Pricing**: Detailed commercial photography packages
- **Client Testimonials**: Social proof with client reviews
- **Awards & Recognition**: Professional achievements showcase
- **Blog Section**: Expandable photography tips and insights
- **Contact Form**: Functional contact form with EmailJS integration

### 🔧 Technical Excellence

- **Progressive Web App (PWA)**: Installable web app with offline capabilities
- **SEO Optimized**: Comprehensive meta tags, structured data, and Open Graph
- **Accessibility (A11y)**: WCAG compliant with screen reader support
- **Performance**: Lazy loading, optimized images, and efficient caching
- **Analytics**: Google Analytics 4 integration for insights

### 📱 Mobile & Cross-Platform

- **Mobile-First**: Responsive design with touch optimizations
- **PWA Ready**: Service worker for offline functionality
- **Cross-Browser**: Compatible with modern browsers
- **Keyboard Navigation**: Full keyboard accessibility

## 🛠️ Setup & Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Modern web browser

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/beth-harrison-portfolio.git
   cd beth-harrison-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure EmailJS (for contact form)**
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Create a service and email template
   - Update `script.js` with your EmailJS credentials:
     ```javascript
     emailjs.init("YOUR_PUBLIC_KEY");
     // In the send function:
     emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams);
     ```

4. **Configure Analytics**
   - Replace `GA_MEASUREMENT_ID` in `index.html` with your Google Analytics ID
   - Or remove the analytics code if not needed

5. **Start development server**
   ```bash
   npm start
   # or
   python3 -m http.server 8000
   ```

6. **Open in browser**
   ```
   http://localhost:8000
   ```

## 📋 Configuration

### EmailJS Setup

1. Create account at [EmailJS](https://www.emailjs.com/)
2. Add email service (Gmail, Outlook, etc.)
3. Create email template with variables:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{message}}`
   - `{{to_name}}`
4. Update credentials in `script.js`

### Analytics Setup

Replace `GA_MEASUREMENT_ID` in `index.html` with your Google Analytics measurement ID.

### Customization

- **Colors**: Update CSS custom properties in `:root`
- **Content**: Edit HTML content directly
- **Images**: Replace Unsplash URLs with your own images
- **Fonts**: Modify Google Fonts link in HTML head

## 🎯 Performance Optimizations

- **Image Optimization**: WebP format with fallbacks
- **Lazy Loading**: Intersection Observer API
- **Caching**: Service Worker for offline functionality
- **Minification**: Optimized CSS and JavaScript
- **Critical CSS**: Above-the-fold content prioritized

## ♿ Accessibility Features

- **WCAG 2.1 AA Compliant**: Screen reader friendly
- **Keyboard Navigation**: Full keyboard support
- **Focus Management**: Visible focus indicators
- **Semantic HTML**: Proper heading hierarchy
- **Alt Text**: Descriptive image alternatives
- **Skip Links**: Quick navigation for screen readers

## 📊 Analytics & Tracking

The site includes Google Analytics 4 with custom events:
- Gallery interactions
- Contact form submissions
- Theme changes
- Blog searches
- PWA installations

## 🔒 Security

- **Content Security Policy**: Implemented in service worker
- **HTTPS Ready**: Designed for secure hosting
- **Input Sanitization**: Client-side form validation
- **Secure Dependencies**: Regularly updated packages

## 🚀 Deployment

### Netlify (Recommended)

1. Connect GitHub repository
2. Set build command: `npm run build`
3. Deploy automatically on push

### Vercel

1. Import project from GitHub
2. Configure build settings
3. Deploy with zero configuration

### Traditional Hosting

1. Upload files to web server
2. Ensure HTTPS certificate
3. Configure server for PWA headers

## 🧪 Testing

```bash
# Run linting
npm run lint

# Performance testing (Lighthouse)
# Use browser dev tools or online testers

# Accessibility testing
# Use WAVE, axe, or Lighthouse accessibility audit
```

## 📝 Blog Content Management

The blog posts are currently hardcoded. For dynamic content:

1. **Static Site Generator**: Use Eleventy or Hugo
2. **Headless CMS**: Integrate with Contentful or Strapi
3. **Database**: Add backend with Node.js/Express

## 🎨 Customization Guide

### Color Scheme

```css
:root {
  --primary-color: #333333;
  --secondary-color: #666666;
  --accent-color: #007bff;
  --text-color: #333333;
  --bg-color: #ffffff;
}
```

### Typography

- Primary: Inter (Google Fonts)
- Headings: 600 weight
- Body: 400 weight
- Scale: 1.2 (minor third)

### Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Images**: [Unsplash](https://unsplash.com) photographers
- **Icons**: Unicode emojis and custom SVGs
- **Fonts**: [Google Fonts - Inter](https://fonts.google.com/specimen/Inter)
- **Libraries**: EmailJS for contact forms

## 📞 Support

For support or questions:
- Email: hello@bethharrison.com
- Portfolio: [bethharrison.com](https://bethharrison.com)

---

**Built with ❤️ for photographers by developers**
-   Touch-friendly navigation
-   Optimized layouts for tablets and phones
-   Collapsible mobile menu
-   Responsive image grid
-   Filter buttons optimized for mobile

### 🎯 User Experience

-   Intuitive navigation with section highlighting
-   Contact form with validation
-   Smooth page transitions
-   Loading screen with spinner
-   Accessibility features
-   SEO-friendly structure

## Sections Overview

### 1. Hero Section

-   Professional introduction
-   Call-to-action button
-   Stunning city photography backdrop

### 2. Gallery

-   12 curated urban photography images
-   Interactive filtering: All, Architecture, Street, Skyline, Night, Urban Portraits
-   Lightbox functionality for detailed viewing

### 3. Services & Pricing

-   **Commercial Photography**: $800+ (Business headshots, corporate events)
-   **Urban Collection**: $1,200+ (Custom city photography sessions)
-   **Fine Art Prints**: $150+ (Limited edition prints)

### 4. About

-   Professional photographer biography
-   Key statistics and achievements
-   Professional headshot

### 5. Testimonials

-   Client reviews from satisfied customers
-   Professional endorsements
-   Company affiliations

### 6. Awards & Recognition

-   **2023**: International Photography Awards Gold Medal
-   **2022**: Sony World Photography Awards Finalist
-   **2021**: National Geographic Featured Artist
-   **2020**: Architecture Photography Prize Winner

### 7. Blog

-   **"Mastering Night Photography in Urban Settings"**: Complete guide with equipment, settings, and techniques
-   **"The Story Behind Metropolitan Reflections"**: Behind-the-scenes of award-winning series
-   **"Best Lenses for Urban Architecture Photography"**: Comprehensive lens recommendations

### 8. Contact

-   Professional contact information
-   Working contact form
-   Social media links

## Setup Instructions

### Quick Start

1. Clone or download the project files
2. Open `index.html` in your web browser
3. The website will load with sample content and images

### For Development

1. Use a local server for best performance:

    ```bash
    # Using Python
    python -m http.server 8000

    # Using Node.js
    npx http-server

    # Using Live Server (VS Code extension)
    Right-click on index.html and select "Open with Live Server"
    ```

2. Open your browser and navigate to `http://localhost:8000`

### Customization

#### Replace Sample Content

1. **Images**: Replace Unsplash URLs in `index.html` with your own photography
2. **Text**: Update photographer name, bio, and contact information
3. **Services**: Modify pricing and service descriptions
4. **Blog Content**: Replace with your own photography articles
5. **Testimonials**: Add real client reviews
6. **Awards**: Update with actual achievements

#### Adding Your Own Images

1. Create an `images` folder in the project directory
2. Add your photography files (recommended: JPG, WebP format)
3. Update the `src` attributes in `index.html` to point to your images
4. Optimize images for web (recommended max width: 1200px)

#### Blog Customization

1. Update blog post content in the `.blog-full-content` sections
2. Add new blog posts by copying the existing structure
3. Modify categories and publication dates
4. The "Read More" functionality will work automatically

## File Structure

```
photography-portfolio/
├── index.html          # Main HTML file with all sections
├── styles.css          # Comprehensive CSS styles (1200+ lines)
├── script.js           # JavaScript functionality (1200+ lines)
├── README.md           # This documentation file
└── images/             # (Create this folder for your photos)
```

## Interactive Features

### Gallery Filtering

-   Click filter buttons to show specific categories
-   Smooth fade animations between filtered views
-   Mobile-optimized filter controls

### Blog Expansion

-   Click "Read More" to expand full blog content
-   Smooth animations with height transitions
-   Button changes to "Read Less" when expanded
-   Auto-scroll to keep content in view

### Contact Form

-   Real-time validation
-   Success/error notifications
-   Professional styling

### Navigation

-   Smooth scrolling to sections
-   Active section highlighting
-   Mobile hamburger menu

## Browser Support

-   Chrome (latest)
-   Firefox (latest)
-   Safari (latest)
-   Edge (latest)
-   Mobile browsers (iOS Safari, Chrome Mobile)

## Technologies Used

-   **HTML5**: Semantic markup and structure
-   **CSS3**: Modern styling with Grid, Flexbox, and animations
-   **JavaScript (ES6+)**: Interactive functionality and scroll effects
-   **Google Fonts**: Inter font family
-   **Unsplash**: High-quality photography images

## Key JavaScript Features

-   Gallery filtering with smooth transitions
-   Blog post expansion/collapse
-   Intersection Observer for scroll animations
-   Loading screen management
-   Lightbox functionality
-   Mobile menu toggle
-   Smooth scrolling navigation
-   Form validation and notifications

## Customization Tips

### Colors

Main colors used in the design:

-   Primary: `#333333` (Dark gray)
-   Background: `#ffffff` (White)
-   Accent: `#f8f9fa` (Light gray)
-   Text: `#666666` (Medium gray)

### Typography

-   Primary font: Inter (Google Fonts)
-   Fallback: System fonts (Arial, Helvetica)
-   Professional and clean styling

### Layout

-   Max width: 1200px
-   Mobile breakpoint: 768px
-   Small mobile: 480px

## Deployment

### GitHub Pages

1. Push your code to a GitHub repository
2. Go to Settings > Pages
3. Select source branch (usually `main`)
4. Your site will be available at `https://yourusername.github.io/repository-name`

### Netlify

1. Drag and drop your project folder to [Netlify](https://netlify.com)
2. Or connect your Git repository
3. Your site will be live with a custom URL

### Other Hosting

Upload all files to any web hosting service that supports static files.

## Performance Optimization

-   Optimized images for web delivery
-   Efficient CSS and JavaScript
-   Lazy loading for images
-   Smooth animations with CSS transitions
-   Intersection Observer for performance

## Accessibility Features

-   Semantic HTML structure
-   Proper heading hierarchy
-   Alt text for images
-   Keyboard navigation support
-   Screen reader friendly

## License

This project is open source and available under the MIT License.

## Updates

-   **Latest**: Added interactive blog posts with expandable content
-   **Enhanced**: Gallery filtering with smooth animations
-   **Added**: Professional services, testimonials, and awards sections
-   **Improved**: Mobile responsiveness and user experience

## Support

For questions or issues, please contact Beth Harrison at hello@bethharrison.com

---

_Built with ❤️ for showcasing beautiful city photography_
