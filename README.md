# Beth Harrison - City Photography Portfolio

A modern, minimalistic photography portfolio website showcasing urban and city photography work. Built with clean HTML, CSS, and JavaScript for optimal performance and user experience.

## Features

### 🎨 Modern Design

-   Clean, minimalistic interface
-   Responsive design for all devices
-   Professional typography using Inter font
-   Smooth animations and transitions
-   Contemporary color scheme
-   Loading animations for enhanced UX

### 📸 Enhanced Gallery

-   Interactive image gallery with 12 curated city photos
-   Advanced filtering system (All, Architecture, Street, Skyline, Night, Urban Portraits)
-   Lightbox modal for viewing full-size images
-   Smooth hover effects and transitions
-   Touch-friendly mobile navigation
-   Optimized image loading and display

### 💼 Professional Services

-   **Services & Pricing Section**: Commercial photography packages
-   **Testimonials**: Client reviews and recommendations
-   **Awards & Recognition**: Professional achievements and accolades
-   **Portfolio Categories**: Specialized collections (Night Photography, Urban Portraits)

### 📝 Interactive Blog

-   **Expandable Blog Posts**: Click "Read More" for full content
-   **Professional Content**: Photography tips, behind-the-scenes stories, equipment guides
-   **Smooth Animations**: Fade-in/out transitions for content expansion
-   **Educational Value**: Detailed photography techniques and insights

### 🚀 Performance

-   Lightweight and fast loading
-   Optimized images from Unsplash
-   Smooth scrolling navigation
-   Intersection Observer for scroll animations
-   Preloaded images for better UX
-   Enhanced scroll-based animations

### 📱 Mobile Responsive

-   Mobile-first design approach
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
